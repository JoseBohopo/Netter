import { colors } from "eplant/styles/theme";
import css from "styled-jsx/css";

const styles = css`
  h1 {
    color: ${colors.primary};
    font-weight: 800;
    margin-bottom: 0;
  }

  h2 {
    color: ${colors.secondary};
    font-size: 1.125rem;
    margin: 0;
  }
  section {
    display: grid;
    height: 100%;
    place-content: center;
    place-items: center;
    text-align: center;
    align-content: center;
    gap: 1rem;
    width: 100%;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  img {
    width: 20%;
  }
`;

export default styles;
