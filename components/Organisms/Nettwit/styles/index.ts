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

  article:hover {
    background: #f5f8fa;
    cursor: pointer;
  }

  div {
    padding-right: 0.5rem;
  }
  .head-content {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .head-content time {
    font-size: 0.813rem;
  }
  time {
    line-height: 1.3125;
    margin: 0;
    text-decoration: none;
    font-size: 14px;
    color: #555;
  }

  time:hover {
    text-decoration: underline;
  }
`;

export default style;
