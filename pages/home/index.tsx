import { time } from "console";
import ArrowLeftIcon from "eplant/components/Atoms/Icons/Arrow-left";
import CreateIcon from "eplant/components/Atoms/Icons/Create-Icon";
import HomeIcon from "eplant/components/Atoms/Icons/Home-Icon";
import SearchIcon from "eplant/components/Atoms/Icons/Search-Icon";
import AppLayout from "eplant/components/Layouts/AppLayout";
import Nettwit from "eplant/components/Organisms/Nettwit";
import { fetchLatestNettwits } from "eplant/firebase/client";
import useUser from "eplant/hooks/useUser";
import { colors } from "eplant/styles/theme";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

function Home() {
  const [timeline, setTimeline] = useState<any>();

  const user = useUser();

  useEffect(() => {
    const getData = async () => {
      user &&
        (await fetchLatestNettwits()
          .then(setTimeline)
          .catch((error) => console.log(error)));
    };
    getData();
  }, [user]);

  const timelineMapped = (timeline: any[]): JSX.Element[] =>
    timeline?.map((nettwit: any) => {
      return (
        <Nettwit
          key={nettwit.id}
          createdAt={nettwit.createdAt}
          userName={nettwit.userName}
          avatar={nettwit.avatar}
          content={nettwit.content}
          img={nettwit.img}
        />
      );
    });
  return (
    <>
      <AppLayout>
        <Head>
          <title>Inicio / Nettwit</title>
        </Head>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>{timelineMapped(timeline)}</section>
        <nav>
          <Link href={"/home"}>
            <HomeIcon width={32} height={20} stroke="#09f" />
          </Link>
          <Link href={"/compose/nettwit"}>
            <CreateIcon width={32} height={20} stroke="#09f" />
          </Link>
          <Link href={"/compose/nettwit"}>
            <SearchIcon width={32} height={20} stroke="#09f" />
          </Link>
        </nav>
      </AppLayout>
      <style jsx>
        {`
          header {
            border-bottom: 0.0625rem solid #eee;
            height: 3.063rem;
            top: 0;
            width: 100%;
            display: flex;
            align-items: center;
            background: #ffffffaa;
            backdrop-filter: blur(5px);
          }

          section {
            flex: 1;
          }
          nav {
            bottom: 0;
            border-top: 0.0625rem solid #eee;
            display: flex;
            justify-content: space-evenly;
            flex: 1 1;
            height: max-content;
            align-items: center;
            width: 100%;
            background: ${colors.white};
            padding: 0.5rem 0 0 0;
          }
          nav Link {
            display: flex;
            align-items: baseline;
          }
          nav Link:hover {
            background: radial-gradient(#0099ff33 15%, red 16%);
            background-size: 180px 180px;
            background-position: center;
          }
          nav Link:hover > :global(svg) {
            stroke: ${colors.primary};
          }
          h2 {
            font-weight: 700;
            font-size: 1.313rem;
            padding-left: 15px;
          }
          article {
            padding: 0.625rem 0.938rem;
          }
        `}
      </style>
    </>
  );
}

export default Home;
