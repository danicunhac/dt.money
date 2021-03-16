import styled from "styled-components";
import { GlobalStyle } from "./styles/global";

const Title = styled.h1`
  color: #8257e6;
  font-size: 4rem;
`;

export const App = () => {
  return (
    <>
      <Title>App</Title>
      <GlobalStyle />
    </>
  );
};
