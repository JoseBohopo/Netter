import AppLayout from "eplant/components/Layouts/AppLayout";
import Nettwit from "eplant/components/Organisms/Nettwit";
import { useEffect, useState } from "react";

function Home() {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setTimeline);
  }, []);
  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map((nettwit: any) => {
            return (
              <Nettwit
                key={nettwit.id}
                username={nettwit.username}
                avatar={nettwit.avatar}
                message={nettwit.message}
              />
            );
          })}
        </section>
        <nav></nav>
      </AppLayout>
      <style jsx>
        {`
          header {
            border-bottom: 0.0625rem solid #ccc;
            height: 3.063rem;
            top: 0;
            width: 100%;
            display: flex;
            align-items: center;
          }

          nav {
            bottom: 0;
            border-top: 0.0625rem solid #ccc;
            position: fixed;
            width: 100%;
          }
          h2 {
            font-weight: 700;
            font-size: 1.313rem;
          }
          section {
            padding-top: 1.563rem;
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
