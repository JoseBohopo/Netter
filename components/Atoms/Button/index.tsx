import styles from "./styles";
import { IButton } from "./types";

export default function Button({ children, onClick }: IButton) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>{styles}</style>
    </>
  );
}
