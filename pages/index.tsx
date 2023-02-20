import { useEffect, useState } from "react";
import Head from "next/head";
import { createUserWithEmailAndPassword } from "firebase/auth";

import AppLayout from "eplant/components/AppLayout";
import Image from "next/image";
import { colors } from "eplant/styles/theme";
import Button from "eplant/components/Atoms/Button";
import Github from "eplant/components/Atoms/Icons/GitHub";
import styles from "./styles";
import { auth, loginWithGithub } from "eplant/firebase/client";
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const [user, setUser] = useState<{} | null>(null);
  const [userUID, setUserUID] = useState<string | null>(null);
  console.log(user);
  const handleClick = async () => {
    try {
      const user = await loginWithGithub();
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateWithEmail = () => {
    console.log("entro aqui");

    createUserWithEmailAndPassword(auth, "test1@test.com", "123456")
      .then((user) => console.log(user))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserUID(user.uid);
      } else {
        setUserUID(null);
      }
    });
  }),
    [];

  return (
    <>
      <Head>
        <title>Netter</title>
        <meta
          name="description"
          content="This is a Twitter clone for developers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <section>
          <Image
            src="/netter-logo.png"
            width="70"
            height={70}
            alt="Netter logo image"
          />
          <h1 className="main-title">Netter</h1>
          <h2>
            Talk about development <br /> with developers{" "}
          </h2>
          <div>
            {userUID !== null && (
              <Button onClick={handleClick}>
                {" "}
                <Github fill={colors.white} /> Log in with Github
              </Button>
            )}
          </div>
          <div>
            <Button onClick={handleCreateWithEmail}>Sign with Email</Button>
          </div>
        </section>
      </AppLayout>

      <style jsx>{styles}</style>
    </>
  );
}
