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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      currentUser && setCurrentUser(currentUser);

      console.log(
        "🚀 ~ file: authContext.ts:18 ~ unsubscribe ~ currentUser:",
        currentUser && currentUser
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};
