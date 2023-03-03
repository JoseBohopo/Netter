import { auth } from "eplant/firebase/client";
import { onAuthStateChanged, User } from "firebase/auth";
// import { useRouter } from 'next/router'
import { createContext, ReactNode, useEffect, useState } from "react";

// const router = useRouter()

export const AuthContext = createContext<unknown>({});

interface IAuthProvider {
  children: ReactNode;
}

// // eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }: IAuthProvider) => {
  const [currentUser, setCurrentUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (fetchedUser) => {
      fetchedUser && setCurrentUser(fetchedUser);
      fetchedUser && setLoading(false);
    });
    return () => {
      (async () => {
        try {
          await unsubscribe();
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      })();
    };
  }, []);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AuthContext.Provider
      value={{ currentUser: currentUser, isLoading: loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
