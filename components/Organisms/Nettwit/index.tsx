import TextStrong from "eplant/components/Atoms/TextStrong";
import Avatar from "eplant/components/Molecules/Avatar";
import useTimeAgo from "eplant/hooks/useTimeAgo";
import style from "./styles";
import { INettwit } from "./types";

function Nettwit({ avatar, userName, id, content, createdAt, img }: INettwit) {
  console.log("🚀 ~ file: index.tsx:9 ~ Nettwit ~ createdAt:", createdAt);

  const time = createdAt?._seconds
    ? createdAt?._seconds
    : Number(createdAt) / 1000;

  const timeAgo = useTimeAgo(time);
  return (
    <>
      <article key={id}>
        <div>
          <Avatar src={avatar} />
        </div>
        <section>
          <div className="head-content">
            <TextStrong text={userName} />
            <p>{timeAgo}</p>
          </div>

          <p>{content}</p>
          {img && <img src={img}></img>}
        </section>
      </article>
      <style jsx>{style}</style>
    </>
  );
}

export default Nettwit;
