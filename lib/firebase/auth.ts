import { KEYS } from "@/lib/constants/keys";
import { STRINGS } from "@/lib/constants/strings/ko";
import { auth } from "@/lib/firebase/firebase";
import { useFirestore } from "@/lib/hooks/use-firestore";
import { useAuthStore } from "@/lib/store/use-auth-store";
import {
  SignupData,
  SignupSchema,
  UserData,
  UserSchema,
} from "@/lib/types/user";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  type User,
} from "firebase/auth";
import { Timestamp } from "firebase/firestore";

export async function signIn(email: string, password: string) {
  try {
    useAuthStore.getState().setLoading(true);

    const { user } = await signInWithEmailAndPassword(auth, email, password);
    useAuthStore.getState().setUser(user);
  } catch (error) {
    useAuthStore
      .getState()
      .setMessage(`${STRINGS.ERRORS.INVALID_CREDENTIALS} : ${error}`);
  } finally {
    useAuthStore.getState().setLoading(false);
  }
}

export async function signUp(formData: FormData) {
  const { set } = useFirestore(KEYS.FIRESTORE.USERS);

  const email = formData.get(KEYS.COMMON.EMAIL) as string;
  const password = formData.get(KEYS.COMMON.PASSWORD) as string;
  const passwordConfirm = formData.get(KEYS.COMMON.PASSWORD_CONFIRM) as string;
  const displayName = formData.get(KEYS.COMMON.DISPLAY_NAME) as string;

  try {
    useAuthStore.getState().setLoading(true);

    if (passwordConfirm !== passwordConfirm) {
      throw new Error(STRINGS.ERRORS.PASSWORD_NOT_MATCH);
    }

    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // 데이터 검증
    const signupData = SignupSchema.parse({
      email,
      displayName,
      isApproved: false,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });

    console.log(signupData);

    await set(user.uid, signupData);

    useAuthStore.getState().setUser(user);
  } catch (error) {
    useAuthStore
      .getState()
      .setMessage(`${STRINGS.ERRORS.CREATE_ACCOUNT} : ${error}`);
  } finally {
    useAuthStore.getState().setLoading(false);
  }
}

export async function signOut() {
  try {
    useAuthStore.getState().setLoading(true);

    await firebaseSignOut(auth);

    useAuthStore.getState().setUser(null);
    useAuthStore.getState().setUserData(null);
  } catch (error) {
    useAuthStore.getState().setMessage(`${STRINGS.ERRORS.SIGNOUT} : ${error}`);
  } finally {
    useAuthStore.getState().setLoading(false);
  }
}
