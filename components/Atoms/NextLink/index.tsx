import Link from "next/link";
import INextLink from "./types";

export default function NextLink({ path, textArea }: INextLink) {
  return (
    <Link id="RouterPath" href={path}>
      {textArea}
    </Link>
  );
}
