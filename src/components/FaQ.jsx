import styled from "styled-components";

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
`;

const FAQTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const FAQContent = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

function FAQ() {
  return (
    <FAQContainer>
      <FAQTitle>FAQ</FAQTitle>
      <FAQContent>
        Welcome to our FAQ section! Here you can find answers to the most
        frequently asked questions about our services and products.
      </FAQContent>
    </FAQContainer>
  );
}

export default FAQ;
