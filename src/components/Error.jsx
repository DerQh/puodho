import styled from "styled-components";
import FooterContainer from "./Footer";
import Navbar from "./Navbar";
import { useRouteError } from "react-router-dom";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
`;

const ErrorTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const ErrorContent = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

function ErrorDisplay() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Navbar></Navbar>
      <ErrorContainer>
        <ErrorTitle>Ooops .. </ErrorTitle>
        <ErrorContent>
          Something went wrong! Please try again later. Sorry, an unexpected
          error has occurred. Please refresh the page or try again later.
        </ErrorContent>
      </ErrorContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}

export default ErrorDisplay;
