import { timestampSchema } from "@/lib/utils";
import { z } from "zod";

export const UserSchema = z.object({
  uid: z.string(),
  email: z.string().email(),
  displayName: z.string().optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});

export type UserData = z.infer<typeof UserSchema>;
