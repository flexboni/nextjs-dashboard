import { timestampSchema } from "@/lib/utils";
import { Timestamp } from "firebase/firestore";
import { z } from "zod";

export const UserSchema = z.object({
  uid: z.string(),
  email: z.string().email(),
  displayName: z.string().optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});

export const SignupSchema = z.object({
  email: z.string().email(),
  displayName: z.string(),
  isApproved: z.boolean().default(false),
  createdAt: z.custom<Timestamp>(),
  updatedAt: z.custom<Timestamp>(),
});

export type UserData = z.infer<typeof UserSchema>;

export type SignupData = z.infer<typeof SignupSchema>;
