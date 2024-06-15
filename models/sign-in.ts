import { signInWithEmailSupabase } from "@supabaselib/supabase_auth";
import { z } from "zod";
import { formatZodErrorWithPath } from "@models/index";
import { throwErrorWithData } from "@utils/index";

export const SignInFormDataSchema = z.object({
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Invalid Email" }),
  password: z.string({ message: "Password is required" }),
});

export type TSignInFormData = z.infer<typeof SignInFormDataSchema>;

export function signInWithEmail(signInData: TSignInFormData) {
  const { success, data, error } = SignInFormDataSchema.safeParse(signInData);
  if (!success) {
    return throwErrorWithData(
      'Sign In Validation Error',
      formatZodErrorWithPath(
        error.issues,
        Object.keys(SignInFormDataSchema.shape),
        "map"
      )
    )
  }
  const userData = signInWithEmailSupabase(data.email, data.password);
  return userData
}
