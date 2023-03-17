import { useEffect, useState } from "react";
import Head from "next/head";
import { createUserWithEmailAndPassword, User } from "firebase/auth";

import Image from "next/image";
import { colors } from "eplant/styles/theme";
import Button from "eplant/components/Atoms/Button";
import Github from "eplant/components/Atoms/Icons/GitHub";
import styles from "../components/Layouts/styles";
import { auth, loginWithGithub } from "eplant/firebase/client";
import { useRouter } from "next/router";
import useUser, { USER_STATES } from "eplant/hooks/useUser";
import { IUser } from "eplant/hooks/types";
import Modal from "eplant/components/Molecules/Modal";
import Signup from "eplant/components/Organisms/Singup";

export default function Home() {
  const { currentUser } = useUser() as IUser;
  const [toggle, setToggle] = useState(false);

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
      <Button onClick={handleClick}>
        <Github fill={colors.white} /> Log in with Github
      </Button>
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
          {showButtonGithubLogin(currentUser)}
          {/* <div>
            <Button onClick={handleCreateWithEmail}>Sign with Email</Button>
          </div> */}

          <Modal toggle={toggle} setToggle={setToggle} title="Sign up">
            <Signup />
          </Modal>

          <Button onClick={() => (toggle ? setToggle(false) : setToggle(true))}>
            Sing up{" "}
          </Button>
          {showSpinner(currentUser)}
        </div>
      </section>

      <style jsx>{styles}</style>
    </>
  );
}
