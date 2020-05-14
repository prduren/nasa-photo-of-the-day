import useAxios from "axios-hooks";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import StyledDiv from "./components/StyledDiv";
import styled from "styled-components";
import { ThemeProvider, GlobalStyle } from "./theme";

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  margin: 5rem;
  line-height: 1.5rem;
`;

function App() {
  const [{ data, loading, error }] = useAxios(
    "https://api.nasa.gov/planetary/apod?api_key=TjdfHwdKkwBeLImpu8LLOskzl0sUux357JqFuurW"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error, null, 2)}</p>;

  return (
    <React.Fragment>
      <GlobalStyle />
      <StyledDiv>
        <Header />
        <img src={data.url} alt="space" />
        <PhotoInfo explanation={data.explanation} />
        <Footer />
      </StyledDiv>
    </React.Fragment>
  );
}

function PhotoInfo({ explanation }) {
  return <Paragraph>{explanation}</Paragraph>;
}

export default App;
