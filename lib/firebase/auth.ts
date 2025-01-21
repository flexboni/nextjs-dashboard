import { STRINGS } from "@/lib/constants/strings/ko";
import { auth } from "@/lib/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  type User,
} from "firebase/auth";

export async function signIn(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: STRINGS.ERRORS.INVALID_CREDENTIALS };
  }
}

export async function signUp(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: STRINGS.ERRORS.CREATE_ACCOUNT };
  }
}

export async function signOut() {
  try {
    await firebaseSignOut(auth);

    return { error: null };
  } catch (error) {
    return { user: null, error: STRINGS.ERRORS.SIGNOUT };
  }
}
