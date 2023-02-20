import { colors } from "eplant/styles/theme";
import css from "styled-jsx/css";

const styles = `
h1 {
  color: ${colors.primary};
  font-weight: 800;
  margin-bottom: 0;
}

h2 {
  color: ${colors.secondary};
  font-size: 18px;
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
}
`;

export default styles;
