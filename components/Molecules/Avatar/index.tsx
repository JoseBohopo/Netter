import TextStrong from "eplant/components/Atoms/TextStrong";
import styles from "./styles";
import { IAvatar } from "./types";

export default function Avatar({ alt, src, text, withText }: IAvatar) {
  if (alt === null) {
    return <></>;
  }

  return (
    <>
      <div>
        <img src={src} alt={alt} title={alt} />
        <TextStrong text={(withText && text) || alt} />
      </div>
      <style jsx>{styles}</style>
    </>
  );
}
