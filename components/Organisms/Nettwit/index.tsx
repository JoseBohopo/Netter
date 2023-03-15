import TextStrong from "eplant/components/Atoms/TextStrong";
import Avatar from "eplant/components/Molecules/Avatar";
import useDateTimeFormat from "eplant/hooks/useDateTimeFormat";
import useTimeAgo from "eplant/hooks/useTimeAgo";
import Link from "next/link";
import { useRouter } from "next/router";
import style from "./styles";
import { INettwit } from "./types";

function Nettwit({
  avatar,
  userName,
  id,
  content,
  createdAt,
  img,
  key,
}: INettwit) {
  const timeAgo = useTimeAgo(createdAt);
  const createdAtFormatted = useDateTimeFormat(createdAt);
  const router = useRouter();

  const handleArticleClick = (
    e: React.MouseEvent<HTMLElement>,
    id?: number
  ) => {
    e.preventDefault();
    router.push(`/status/${id}`);
  };
  return (
    <>
      <article onClick={(e) => handleArticleClick(e, id)} key={id}>
        <div>
          <Avatar src={avatar} />
        </div>
        <section>
          <div className="head-content">
            <TextStrong text={userName} />
            <Link className="time-link" href={`/status/${id}`}>
              <time title={createdAtFormatted}>{timeAgo}</time>
            </Link>
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
