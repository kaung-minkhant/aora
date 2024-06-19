import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "@supabaselib/supabase_auth";
import { User } from "@supabase/supabase-js";

const GlobalContext = createContext<
  Partial<{
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    user: User | null;
    isLoading: boolean;
    setUser: React.Dispatch<React.SetStateAction<User | null | undefined>>;
  }>
>({});

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((data) => {
        setIsLoading(false);
        setUser(data!.user);
        setIsLoggedIn(true);
        return;
      })
      .catch((error) => {
        setIsLoading(false);
        setUser(null);
        // TODO: handle error
        console.log("error in global provider: ", error);
        return;
      });
  }, []);
  return (
    <GlobalContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, user, setUser, isLoading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
