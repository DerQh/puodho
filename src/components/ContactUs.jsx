import styled from "styled-components";
import Navbar from "./Navbar";
import FooterContainer from "./Footer";

const ContactUsContainer = styled.div`
  background-color: #f5f5f5;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
`;

const ContactUsTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const ContactUsContent = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

function ContactUs() {
  return (
    <>
      <Navbar />
      <ContactUsContainer>
        <ContactUsTitle>Contact Us</ContactUsTitle>
        <ContactUsContent>
          Welcome to our contact section! Here you can find ways to get in touch
          with us for any inquiries or support.
        </ContactUsContent>
        <form action="">
          <div>
            <div>
              <input
                placeholder="First Name"
                type="text"
                id="first name"
                name="first name"
              />
            </div>
            <div>
              <input
                placeholder="Last Name"
                type="text"
                id="last name"
                name="last name"
              />
            </div>
          </div>

          <input placeholder="Email" type="email" id="email" name="email" />
          <label htmlFor="message">How can we be of help?</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </ContactUsContainer>
      <FooterContainer />
    </>
  );
}

export default ContactUs;
