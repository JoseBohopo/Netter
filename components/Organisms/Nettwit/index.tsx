import TextStrong from "eplant/components/Atoms/TextStrong";
import Avatar from "eplant/components/Molecules/Avatar";
import style from "./styles";
import { INettwit } from "./types";

function Nettwit({ avatar, username, id, message }: INettwit) {
  return (
    <>
      <article key={id}>
        <div>
          <Avatar src={avatar} />
        </div>
        <section>
          <TextStrong text={username} />
          <p>{message}</p>
        </section>
      </article>
      <style jsx>{style}</style>
    </>
  );
}

export default Nettwit;
