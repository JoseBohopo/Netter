import { ITitle } from "./types";

function Title({ text }: ITitle) {
  return <h1>{text}</h1>;
}

export default Title;
