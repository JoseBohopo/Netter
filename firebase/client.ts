import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, Timestamp } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
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
  measurementId: "G-J55D9V2BKL",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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

interface IAddNettwit {
  avatar: string | null;
  content?: string;
  userId: string | null;
  userName: string | null;
}

export const addNettwit = async ({
  avatar,
  content,
  userId,
  userName,
}: IAddNettwit) => {
  try {
    const docRef = await addDoc(collection(db, "nettwits"), {
      createdAt: Timestamp.fromDate(new Date()),
      avatar,
      content,
      userId,
      userName,
      likesCount: 0,
      sharedCount: 0,
    });
    return docRef;
  } catch (error) {
    console.error(error);
  }
};

export const fetchLatestNettwits = async () => {
  let querySnapshot;
  try {
    return (querySnapshot = await getDocs(collection(db, "nettwits")).then(
      (snapshot) =>
        snapshot.docs.map((docs) => {
          const data = docs.data();
          const id = docs.id;
          const { createdAt } = data;
          const normalizedCreatedAt = new Date(
            createdAt.seconds * 1000
          ).toDateString();

          return {
            ...data,
            id,
            createdAt: normalizedCreatedAt,
          };
        })
    ));
  } catch (error) {
    console.log(error);
  }
};

export default db;
