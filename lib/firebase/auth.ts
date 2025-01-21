import { STRINGS } from "@/lib/constants/strings/ko";
import { auth } from "@/lib/firebase/firebase";
import { useAuthStore } from "@/lib/store/use-auth-store";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  type User,
} from "firebase/auth";

export async function signIn(email: string, password: string) {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    useAuthStore.getState().setUser(user);

    return { user: user, error: null };
  } catch (error) {
    return { user: null, error: STRINGS.ERRORS.INVALID_CREDENTIALS };
  }
}

export async function signUp(email: string, password: string) {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    useAuthStore.getState().setUser(user);

    return { user: user, error: null };
  } catch (error) {
    return { user: null, error: STRINGS.ERRORS.CREATE_ACCOUNT };
  }
}

export async function signOut() {
  try {
    await firebaseSignOut(auth);

    useAuthStore.getState().setUser(null);
    useAuthStore.getState().setUserData(null);

    return { error: null };
  } catch (error) {
    return { user: null, error: STRINGS.ERRORS.SIGNOUT };
  }
}
