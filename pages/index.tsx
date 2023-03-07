import { useEffect } from "react";
import Head from "next/head";
import { createUserWithEmailAndPassword, User } from "firebase/auth";

import AppLayout from "eplant/components/Layouts/AppLayout";
import Image from "next/image";
import { colors } from "eplant/styles/theme";
import Button from "eplant/components/Atoms/Button";
import Github from "eplant/components/Atoms/Icons/GitHub";
import styles from "../components/Layouts/styles";
import { auth, loginWithGithub } from "eplant/firebase/client";
import { useRouter } from "next/router";
import useUser, { USER_STATES } from "eplant/hooks/useUser";
import { IUser } from "eplant/hooks/types";

export default function Home() {
  const { currentUser } = useUser() as IUser;

  const router = useRouter();

  const handleClick = async (): Promise<void> => {
    try {
      await loginWithGithub();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateWithEmail = (): void => {
    createUserWithEmailAndPassword(auth, "test1@test.com", "123456")
      .then((user) => console.log(user))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    currentUser && router.replace("/home");
  }),
    [currentUser];

  const showButtonGithubLogin = (user: unknown): boolean | JSX.Element =>
    user === USER_STATES.NOT_KNOWN && (
      <div>
        <Button onClick={handleClick}>
          <Github fill={colors.white} /> Log in with Github
        </Button>
      </div>
    );

  const showSpinner = (user: unknown): boolean | JSX.Element =>
    user === USER_STATES.NOT_KNOWN && (
      <img src="/Hourglass.gif" alt="Spinner gif" />
    );

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
          {showButtonGithubLogin(currentUser)}
          {showSpinner(currentUser)}
          {/* <div>
            <Button onClick={handleCreateWithEmail}>Sign with Email</Button>
          </div> */}
        </section>
      </AppLayout>

      <style jsx>{styles}</style>
    </>
  );
}
