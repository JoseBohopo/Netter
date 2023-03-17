import css from "styled-jsx/css";
import { colors } from "eplant/styles/theme";

const styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #222;
    position: relative;
    min-height: 100vh;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.4rem;
    width: 450px;
    padding: 3.3rem;
    min-height: 250px;
    position: absolute;
    top: 20%;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 15px;
    z-index: 2;
  }

  .btn-close {
    padding: 0.5rem 0.7rem;
    background: #eee;
    border-radius: 50%;
  }

  .outer {
    position: relative;
    width: 30px;
    padding: 0 3rem 0 0;
    margin: auto 0;
    cursor: pointer;
    transform: translate(50px, -50px);
  }
  .inner {
    width: inherit;
    text-align: center;
  }

  label {
    font-size: 0.8em;
    line-height: 4em;
    text-transform: uppercase;
    color: #000;
    transition: all 0.3s ease-in;
    opacity: 0;
    cursor: pointer;
  }

  .inner:before,
  .inner:after {
    position: absolute;
    content: "";
    height: 1px;
    width: inherit;
    background: ${colors.primary};
    left: 0;
    transition: all 0.3s ease-in;
  }

  .inner:before {
    top: 50%;
    transform: rotate(45deg);
  }

  .inner:after {
    bottom: 50%;
    transform: rotate(-45deg);
  }

  .outer:hover label {
    opacity: 1;
  }

  .outer:hover .inner:before,
  .outer:hover .inner:after {
    transform: rotate(0);
  }

  .outer:hover .inner:before {
    top: 0;
  }

  .outer:hover .inner:after {
    bottom: 0;
  }

  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
    z-index: 1;
  }
`;

export default styles;
