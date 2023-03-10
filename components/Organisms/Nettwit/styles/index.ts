import css from "styled-jsx/css";

const style = css`
  img {
    width: 100%;
    height: auto;
    border-radius: 0.625rem;
    margin-top: 0.625rem;
  }
  article {
    display: flex;
    padding: 0.625rem 0.938rem;
    border-bottom: 0.0625rem solid #eee;
  }

  div {
    padding-right: 0.5rem;
  }
  .head-content {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .head-content p {
    font-size: 0.813rem;
    color: #808080;
  }
  p {
    line-height: 1.3125;
    margin: 0;
  }
`;

export default style;
