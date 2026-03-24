function SignupLogin() {
  return (
    <MainContainer>
      <Link to="/">
        <div>
          <Logo src="/logo1.jpg" alt="Logo" />
          <Title>AFARMER</Title>
        </div>
      </Link>

      <div>
        {/* <Image src="/food-chain.png" alt="" /> */}
        <Subtitle>Connecting Farmers and Consumers</Subtitle>
        <Description>
          AFARMER is a platform that connects local farmers with consumers,
          providing fresh produce and supporting sustainable agriculture.
        </Description>
      </div>
      <div>
        <h2>Sign Up / Login</h2>
        <Form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </Form>
      </div>
      <div>
        <p>Don't have an account? Sign up now!</p>
        <SignupForm>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </SignupForm>
      </div>
    </MainContainer>
  );
}

export default SignupLogin;

import { Link } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  font-family: "Dosis", sans-serif;

  :nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;

const Title = styled.h1`
  margin-top: 20px;
  color: #77a54f;
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-top: 30px;
`;

const Subtitle = styled.h2`
  margin-top: 30px;
  color: #77a54f;
  text-align: center;
`;

const Description = styled.p`
  margin-top: 20px;
  max-width: 600px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 300px;
  }

  button {
    padding: 10px;
    background-color: #77a54f;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #6b8e3c;
    }
  }
`;

const SignupForm = styled(Form)`
  margin-top: 20px;
`;
