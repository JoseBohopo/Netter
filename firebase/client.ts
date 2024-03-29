import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  DocumentData,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
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
export const db = getFirestore(app);

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
    return mapUserFromFirebaseAuth(user);
  });
};

interface IAddNettwit {
  avatar: string | null;
  content?: string;
  userId: string | null;
  userName: string | null;
  img?: string | null;
}

export const addNettwit = async ({
  avatar,
  content,
  userId,
  userName,
  img,
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
      img: img || null,
    });
    return docRef;
  } catch (error) {
    console.error(error);
  }
};

const mapNettwitFromFirebaseToNettwitObject = (docs: any) => {
  const data = docs.data();

  const id = docs.id;
  const { createdAt } = data;

  return {
    ...data,
    id,
    createdAt: +createdAt.toDate(),
  };
};

//Fetch data with real time from firebase

export const listenLatestNettwits = (callback: (doc: DocumentData) => {}) => {
  const q = query(
    collection(db, "nettwits"),
    orderBy("createdAt", "desc"),
    limit(20)
  );
  const unsub = onSnapshot(q, (snapshot) => {
    callback(
      snapshot.docs.map((docs) => mapNettwitFromFirebaseToNettwitObject(docs))
    );
  });
  return unsub;
};

//Fetch data without real time from firebase

// export const fetchLatestNettwits = async () => {
//   let querySnapshot;
//   try {
//     return (querySnapshot = await getDocs(collection(db, "nettwits")).then(
//       (snapshot) =>
//         snapshot.docs.map((docs) => mapNettwitFromFirebaseToNettwitObject(docs))
//     ));
//   } catch (error) {
//     console.log(error);
//   }
// };

export const uploadImage = async (file: File) => {
  const metadata = {
    contentType: "image/jpeg",
  };

  let storage;
  let task;
  let uploadTask;
  let data;
  let imgUrl;

  try {
    storage = await getStorage();
    task = ref(storage, `images/${file.name}`);
    uploadTask = uploadBytesResumable(task, file);
    data = await uploadBytes(task, file, metadata);
    imgUrl = await getDownloadURL(ref(storage, `images/${file.name}`))
      .then((url) => url)
      .catch((error) => console.error(error));
  } catch (error) {
    console.log("🚀 ~ file: client.ts:149 ~ uploadImage ~ error:", error);
  }
  return { data, uploadTask, imgUrl };
};

export default db;
