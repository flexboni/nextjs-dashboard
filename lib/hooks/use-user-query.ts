import { KEYS } from "@/lib/constants/keys";
import { useFirestore } from "@/lib/hooks/use-firestore";
import { UserSchema } from "@/lib/types/user";
import { useQuery } from "@tanstack/react-query";

export function useUserQuery(userId: string | null | undefined) {
  const { get } = useFirestore(KEYS.FIRESTORE.USERS);

  return useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      if (!userId) return null;

      const data = await get(userId);
      return data ? UserSchema.parse(data) : null;
    },
    enabled: !!userId, // userId가 있을 때만 쿼리 실행
  });
}
