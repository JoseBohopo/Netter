import styles from "./styles";
import { IButton } from "./types";

export default function Button({ children, onClick, type }: IButton) {
  return (
    <>
      <button type={type} onClick={onClick}>
        {children}
      </button>
      <style jsx>{styles}</style>
    </>
  );
}
