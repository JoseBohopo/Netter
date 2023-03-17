import css from "styled-jsx/css";
import { colors } from "eplant/styles/theme";

const styles = css`
  button {
    background-color: ${colors.black};
    border: 0;
    color: #fff;
    border-radius: 624.938rem;
    font-size: 1rem;
    font-weight: 800;
    padding: 0.5rem 1.5rem;
    text-align: center;
    align-items: center;
    cursor: pointer;
    transition: opacity 0.3s ease;
    display: flex;
    gap: 0.7rem;
    user-select: none;
    justify-content: center;
    width: 100%;
  }

  button[disabled] {
    pointer-events: none;
    opacity: 0.2;
  }

  button:hover {
    opacity: 0.7;
  }
`;

export default styles;
