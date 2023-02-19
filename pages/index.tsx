import Head from "next/head";
import { Inter } from "@next/font/google";

import AppLayout from "eplant/components/AppLayout";
import Image from "next/image";
import { colors } from "eplant/styles/theme";
import Button from "eplant/components/Atoms/Button";
import Github from "eplant/components/Atoms/Icons/GitHub";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
            <Button>
              {" "}
              <Github fill={colors.white} /> Log in with Github
            </Button>
          </div>
        </section>
      </AppLayout>

      <style jsx>{`
        h1 {
          color: ${colors.primary};
          font-weight: 800;
          margin-bottom: 0;
        }

        h2 {
          color: ${colors.secondary};
          font-size: 18px;
          margin: 0;
        }
        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
          text-align: center;
          align-content: center;
          gap: 1rem;
        }
      `}</style>
    </>
  );
}
