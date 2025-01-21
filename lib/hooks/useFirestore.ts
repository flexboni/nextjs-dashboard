import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  type QueryConstraint,
} from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import { STRINGS } from "@/lib/constants/strings/ko";

type FirestoreData = Record<string, any>;
type DocumentWithId = FirestoreData & { id: string };

export const useFirestore = (collectionName: string) => {
  const add = async (data: FirestoreData): Promise<DocumentWithId> => {
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      return { id: docRef.id, ...data };
    } catch (error) {
      console.error("Error adding document:", error);
      throw error;
    }
  };

  const update = async (
    id: string,
    data: FirestoreData
  ): Promise<DocumentWithId> => {
    try {
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, data);
      return { id, ...data };
    } catch (error) {
      console.error(`${STRINGS.ERRORS.UPDATING_DOCUMENT} : `, error);
      throw error;
    }
  };

  const remove = async (id: string): Promise<string> => {
    try {
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);
      return id;
    } catch (error) {
      console.error(`${STRINGS.ERRORS.DELETE_DOCUMENT} : `, error);
      throw error;
    }
  };

  const get = async (id: string): Promise<DocumentWithId | null> => {
    try {
      const docRef = doc(db, collectionName, id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      }

      return null;
    } catch (error) {
      console.error(`${STRINGS.ERRORS.GET_DOCUMENT} : `, error);
      throw error;
    }
  };

  const list = async (
    constraints: QueryConstraint[] = []
  ): Promise<DocumentWithId[]> => {
    try {
      const q = query(collection(db, collectionName), ...constraints);
      const querySnapshot = await getDocs(q);

      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error(`${STRINGS.ERRORS.LISTING_DOCUMENT} : `, error);
      throw error;
    }
  };

  return { add, update, remove, get, list };
};
