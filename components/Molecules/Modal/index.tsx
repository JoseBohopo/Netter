import { Dispatch, ReactNode, SetStateAction } from "react";
import styles from "./styles";

interface IModal {
  children: ReactNode;
  title?: string;
  setToggle: Dispatch<SetStateAction<boolean>>;
  toggle: boolean;
}

function Modal({ children, title, setToggle, toggle }: IModal) {
  if (toggle) {
    return (
      <>
        <section className="modal hidden">
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
        <div className="overlay hidden"></div>
        <button className="btn btn-open"></button>

        <style jsx>{styles}</style>
      </>
    );
  }
  return <></>;
}

export default Modal;
