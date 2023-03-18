import { Dispatch, ReactNode, SetStateAction } from "react";
import styles from "./styles";

interface IModal {
  children: ReactNode;
  title?: string;
  setToggle: Dispatch<SetStateAction<boolean>>;
  toggle: boolean;
}

function Modal({ children, title, setToggle, toggle }: IModal) {
  const showSectionHiddenClassName = toggle ? "modal visible" : "modal hidden";
  const showOverlayHiddenClassName = toggle
    ? "overlay visible"
    : "overlay hidden";

  return (
    <>
      <section className={showSectionHiddenClassName}>
        {" "}
        <div className="top">
          <h3>{title}</h3>
          <div className="outer" onClick={() => setToggle(false)}>
            <div className="inner">
              <label>Back</label>
            </div>
          </div>
        </div>
        {children}
      </section>
      <div className={showOverlayHiddenClassName}></div>
      <button className="btn btn-open"></button>

      <style jsx>{styles}</style>
    </>
  );
}

export default Modal;
