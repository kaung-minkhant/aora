import {z} from 'zod'
import { formatZodErrorWithPath } from '@models/index';
import { signUpWithEmailSupabase } from '@supabaselib/supabase_auth';
import { throwErrorWithData } from '@utils/index';
export const SignUpFormDataSchema = z.object({
  username: z.string({
    message: "Username is required"
  }).min(2, 'Username must be at least 2 characters long').max(50, 'Username must be at most 50 characters long'),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, 'Password must be at least 8 characters long').max(50, 'Password must be at most 50 characters long'),
})
export type TSignUpFormData = z.infer<typeof SignUpFormDataSchema>

export function signUpWithEmail(signUpData: TSignUpFormData) {
  const {success, data, error} = SignUpFormDataSchema.safeParse(signUpData)
  if (!success) {
    return throwErrorWithData('Sign Up Validation Error', 
      formatZodErrorWithPath(
        error.issues,
        Object.keys(SignUpFormDataSchema.shape),
        "map"
      ) 
    )
  }
  const userData = signUpWithEmailSupabase(data.email, data.password, data.username)
  return userData
}