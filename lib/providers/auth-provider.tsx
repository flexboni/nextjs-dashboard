"use client";

import { auth } from "@/lib/firebase/firebase";
import { useUserQuery } from "@/lib/hooks/use-user-query";
import { useAuthStore } from "@/lib/store/use-auth-store";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { user, setUser, setLoading } = useAuthStore();
  const { data: userData } = useUserQuery(user?.uid);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);

        const token = await user.getIdToken();
        document.cookie = `auth=${token}; path=/; secure; samesite=strict`;
      } else {
        setUser(null);
        document.cookie = `auth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [setUser, setLoading]);

  return children;
}
