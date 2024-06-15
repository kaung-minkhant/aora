import { supabase } from "./supabase";

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
      throw new Error("Error occured in sign up funciton: " + error);
    }
    return data;
  } catch (error: any) {
    throw new Error(
      "Error occured in sign up funciton: " + JSON.stringify(error)
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
      throw new Error("Error occured in sign in funciton: " + error);
    }
    console.log("User data in sign in function: ", data);
    return data;
  } catch (error) {
    throw new Error(
      "Error occured in sign in funciton: " + JSON.stringify(error as any)
    );
  }
};

export const getCurrentUser = async () => {
  try {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      throw new Error("Error occured in get current user function: " + error);
    }
    return data;
  } catch (error) {
    throw new Error("Error occured in get current user function: " + error);
  }
};
