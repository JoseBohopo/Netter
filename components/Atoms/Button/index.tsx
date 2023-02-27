import styles from "./styles";
import { IButton } from "./types";

export default function Button({ children, onClick, type, disabled }: IButton) {
  return (
    <>
      <button disabled={disabled} type={type} onClick={onClick}>
        {children}
      </button>
      <style jsx>{styles}</style>
    </>
  );
}
