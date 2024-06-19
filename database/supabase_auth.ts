import { throwErrorWithData } from "@utils/index";
import { supabase } from "./supabase";
import { ErrorCodes } from "@utils/ErrorCodes";

export const signUpWithEmailSupabase = async (
  email: string,
  password: string,
  username: string
) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: username,
        },
      },
    });
    if (error) {
      return throwErrorWithData(
        "Error occured in sign up function: " + error.message,
        {
          type: ErrorCodes.DBAuthError,
        }
      );
    }
    return data;
  } catch (_e) {
    const error = _e as any
    return throwErrorWithData(
      "Error occured in sign up funciton:  " + error.message,
      {
        type: ErrorCodes.DBAuthError,
      }
    );
  }
};

export const signInWithEmailSupabase = async (
  email: string,
  password: string
) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      return throwErrorWithData(
        "Error occured in sign in funciton:  " + error.message,
        {
          type: ErrorCodes.DBAuthError,
        }
      );
    }
    return data;
  } catch (_e) {
    const error = _e as any;
    return throwErrorWithData(
      "Error occured in sign in funciton:  " + error.message,
      {
        type: ErrorCodes.DBAuthError,
      }
    );
  }
};

export const getCurrentUser = async () => {
  try {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      return throwErrorWithData(
        "Error occured in get current user funciton:  " + error.message,
        {
          type: ErrorCodes.DBAuthError,
        }
      );
    }
    return data;
  } catch (_e) {
    const error = _e as any;
    return throwErrorWithData(
      "Error occured in get current user funciton:  " + error.message,
      {
        type: ErrorCodes.DBAuthError,
      }
    );
  }
};
