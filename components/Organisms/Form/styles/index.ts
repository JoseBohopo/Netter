import css from "styled-jsx/css";

const styles = css`
  body {
    gap-column: 3rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border: 1px solid #ddd;
    border-radius: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .hidden {
    display: none;
  }
  .icon {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 32px;
    right: 5px;
    pointer-events: none;
    z-index: 2;
  }
  .icon.icon-success {
    stroke: teal;
  }
  .icon.icon-error {
    stroke: red;
  }

  Button:hover {
    filter: brightness(110%);
  }
`;

export default styles;
