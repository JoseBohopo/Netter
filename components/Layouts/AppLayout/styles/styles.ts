import { breakpoints, colors, fonts } from "eplant/styles/theme";
import { addOpacityToColor } from "eplant/styles/utils";
import css from "styled-jsx/css";

const backgroundColor = addOpacityToColor(colors.primary, 0.7);

export const globalStyles = css.global`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
    background-image: radial-gradient(
        ${backgroundColor} 0.063rem,
        ${colors.lightGrey} 0.063rem
      ),
      radial-gradient(${backgroundColor} 0.063rem, ${colors.lightGrey} 0.063rem);
    background-position: 0 0, 1.563rem 1.563rem;
    background-size: 3.125rem 3.125rem;
    overflow: hidden;
  }
  * {
    box-sizing: border-box;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 1rem;
    position: relative;
  }
  textarea,
  input {
    font-family: ${fonts.base};
  }
`;

const styles = css`
  div {
    display: grid;
    place-items: center;
    height: 100vh;
  }

  main {
    background: #fff;
    border-radius: 0.625rem;
    box-shadow: 0 0.625rem 1.563rem rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    height: 100%;
    overflow-y: auto;
  }
  @media (min-width: ${breakpoints.mobile}) {
    main {
      max-width: ${breakpoints.mobile};
      width: 100%;
      height: 90vh;
    }
  }
`;

export default styles;
