import { initializeApp } from "firebase/app";
import {
  GithubAuthProvider,
  EmailAuthProvider,
  signInWithPopup,
  getAuth,
  UserCredential,
} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "net-ter.firebaseapp.com",
  projectId: "net-ter",
  storageBucket: "net-ter.appspot.com",
  messagingSenderId: "135691417415",
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: "G-XFDE1JS1VZ",
};

initializeApp(firebaseConfig);
export const auth = getAuth();

const mapUserFromFirebaseAuth = (user: UserCredential) => {
  const { email, displayName, photoURL } = user.user;
  return {
    avatar: photoURL,
    name: displayName,
    email: email,
  };
};

export const loginWithGithub = async () => {
  const githubProvider = new GithubAuthProvider();
  return signInWithPopup(auth, githubProvider).then((user) => {
    return mapUserFromFirebaseAuth(user);
  });
};

export const loginWithEmail = async () => {
  const emailProvider = new EmailAuthProvider();
  return signInWithPopup(auth, emailProvider).then((user) => {
    console.log(user);
    //   return mapUserFromFirebaseAuth(user);
  });
};
