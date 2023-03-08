import { formatDistance, subDays } from "date-fns";
import TextStrong from "eplant/components/Atoms/TextStrong";
import Avatar from "eplant/components/Molecules/Avatar";
import useTimeAgo from "eplant/hooks/useTimeAgo";
import style from "./styles";
import { INettwit } from "./types";

function Nettwit({ avatar, userName, id, content, createdAt, img }: INettwit) {
  const timeAgo = useTimeAgo(Number(createdAt));
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
