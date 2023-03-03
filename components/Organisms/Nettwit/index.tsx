import { formatDistance, subDays } from "date-fns";
import TextStrong from "eplant/components/Atoms/TextStrong";
import Avatar from "eplant/components/Molecules/Avatar";
import style from "./styles";
import { INettwit } from "./types";

function Nettwit({ avatar, userName, id, content, createdAt }: INettwit) {
  return (
    <>
      <article key={id}>
        <div>
          <Avatar src={avatar} />
        </div>
        <section>
          <TextStrong text={userName} />
          <p>{createdAt}</p>
          <p>{content}</p>
        </section>
      </article>
      <style jsx>{style}</style>
    </>
  );
}

export default Nettwit;
