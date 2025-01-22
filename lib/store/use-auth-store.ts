import { UserData } from "@/lib/types/user";
import { User } from "firebase/auth";
import { create } from "zustand";

interface AuthStore {
  user: User | null;
  userData: UserData | null;
  loading: boolean;
  message: string | null;
  setUser: (user: User | null) => void;
  setUserData: (userData: UserData | null) => void;
  setLoading: (loading: boolean) => void;
  setMessage: (message: string | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  userData: null,
  loading: true,
  message: null,
  setUser: (user) => set({ user }),
  setUserData: (userData) => set({ userData }),
  setLoading: (loading) => set({ loading }),
  setMessage: (message) => set({ message }),
}));
