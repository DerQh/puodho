import styled from "styled-components";

const MainContainer = styled.div`
  padding: 20px 40px;
  background-color: #e5f4ff;
  color: #000000;
  @media (max-width: 1200px) {
    padding: 60px;
    /* Padding for medium screens */
  }

  @media (max-width: 768px) {
    padding: 50px;
    /* Padding for small screens */
  }

  @media (max-width: 480px) {
    padding: 30px; /* Padding for extra small screens */
  }

  p {
    font-size: 16px;
    letter-spacing: 3px;
    font-weight: 500;
    line-height: 27.2px;
    margin-bottom: 45px;
    font-family: "Montserrat", sans-serif;
    &:nth-child(3) {
      font-size: 20px;
      line-height: 32px;
      font-weight: 500;
      letter-spacing: 1px;
      margin-bottom: 45px;
    }
  }
  h1 {
    font-size: 42px;
    line-height: 43.2px;
    font-weight: 700;
    line-height: 54.2px;
    font-family: "Dosis", sans-serif;
  }
`;
const DownloadContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  a {
    img {
      max-width: 110px;
      height: auto;
    }
  }
`;
const ImageContainer = styled.div`
  background-image: url("/farming.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  img {
    max-width: 80%;
    height: auto;
  }
`;
// HOW IT WORKS CONTAINER
const HowItWorksContainer = styled.div`
  display: grid;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: #362f2f;
  background-color: #fff;
  font-family: "Montserrat", sans-serif;
  padding: 20px 40px;
  @media (max-width: 1200px) {
    padding: 60px;
    /* Padding for medium screens */
  }

  @media (max-width: 768px) {
    padding: 50px;
    /* Padding for small screens */
  }

  @media (max-width: 480px) {
    padding: 40px; /* Padding for extra small screens */
  }
`;
const HowitWorks = styled.div`
  h2 {
    font-size: 42px;
    line-height: 43.2px;
    font-weight: 700;
  }
`;

const BuySellGrowContainers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: #362f2f;
  background-color: #fff;
  font-family: "Montserrat", sans-serif;
  padding: 20px 40px;
  @media (max-width: 1200px) {
    padding: 60px;
    /* Padding for medium screens */
  }

  @media (max-width: 768px) {
    padding: 50px;
  }

  @media (max-width: 480px) {
    padding: 40px; /* Padding for extra small screens */
    flex-direction: column; /* Stack items vertically on small screens */
    gap: 20px; /* Add some spacing between items */
  }
`;

const BuySellGrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 10px; */
  margin-top: 30px;
  img {
    max-width: 100px;
    height: auto;
  }
  h2 {
    font-size: 24px;
    line-height: 28.8px;
    font-weight: 700;
  }
  p {
    font-size: 16px;
    line-height: 27.2px;
    font-weight: 500;
    letter-spacing: 1px;
    max-width: 300px;
    color: #5e5d5d;
  }
`;
const LearnButton = styled.button`
  background-color: #5c9132;
  color: #fff;
  border: 2px solid #ffffff;
  padding: 10px 20px;
  letter-spacing: 1px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 30px;
  max-width: 200px;
  &:hover {
    background-color: #ffffff;
    color: #5c9132;
    border: 2px solid #5c9132;
  }
`;

const InquiryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #362f2f;
  background-color: #f6f6f6;
  font-family: "Montserrat", sans-serif;
  padding: 20px 40px;
  @media (max-width: 1200px) {
    padding: 60px;
    /* Padding for medium screens */
  }

  @media (max-width: 768px) {
    padding: 50px;
    /* Padding for small screens */
  }

  @media (max-width: 480px) {
    padding: 40px; /* Padding for extra small screens */
  }

  h2 {
    font-size: 42px;
    line-height: 46px;
    font-weight: 700;
  }
  p {
    font-family: "Dosis", sans-serif;
    font-size: 18px;
  }
`;
const InquiryParagraph = styled.p`
  font-family: "Dosis", sans-serif;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  margin-bottom: 45px;
  font-style: italic;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 500px;

  button {
    background-color: #5c9132;
    color: #fff;
    border: none;
    padding: 10px 20px;
    letter-spacing: 1px;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    align-self: center;
    margin-top: 20px;
    max-width: 200px;

    &:hover {
      background-color: #ffffff;
      color: #5c9132;
      border: 2px solid #5c9132;
    }
  }
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
  text-align: left;

  p {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
    color: #000000;
    margin-bottom: 5px;
  }

  input,
  textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
  div {
    display: flex;
    gap: 10px;

    input {
      flex: 1;
    }
  }
`;

function Body() {
  return (
    <>
      <MainContainer>
        <p>DIRECT FROM THE FARM</p>
        <h1>THE MARKETPLACE APP FOR LOCAL FOOD & FARMS</h1>
        <p>Discover and connect with local food and farms near you.</p>
        <DownloadContainer>
          <a href="">
            <img src="/app store.png" alt="google play logo" />
          </a>
          <a href="">
            <img src="/google store.png" alt="app store logo" />
          </a>
        </DownloadContainer>
      </MainContainer>
      <ImageContainer>
        <img
          loading="lazy"
          src="/app screenshot.png"
          alt=" app phone screenshot"
        />
      </ImageContainer>
      <HowItWorksContainer>
        <HowitWorks>
          <h2>HOW IT WORKS</h2>
          <p>
            We are on a mission to empower local farms and strengthen local food
            supply chain across Kisumu amd it's environs.
          </p>
        </HowitWorks>
        <BuySellGrowContainers>
          <BuySellGrowContainer>
            <img src="/buy.png" alt="buy image" />
            <h2>Buy</h2>
            <p>
              Search on a map using a keyword for produce that is on sale.
              Message the seller and arrange a pickup, meetup, or delivery.
            </p>
          </BuySellGrowContainer>
          <BuySellGrowContainer>
            <img src="/sell.png" alt="sell image" />
            <h2>Sell</h2>
            <p>
              Create a free listing to sell your homegrown produce, chicken
              eggs, supplies, plant trees, and more.
            </p>
          </BuySellGrowContainer>
          <BuySellGrowContainer>
            <img src="/grow.png" alt="grow image" />
            <h2>Grow</h2>
            <p>
              Connect with the consumer and wholesale buyers for your homegrown
              produce without the hassle of branding, a website, or
              advertising.{" "}
            </p>
          </BuySellGrowContainer>
        </BuySellGrowContainers>

        <div>
          <LearnButton>LEARN MORE </LearnButton>
        </div>
      </HowItWorksContainer>
      <InquiryContainer>
        <h2>LOCAL FARM INSTITUTIONAL PURCHASING</h2>
        <p>
          Are you a food buyer for an institution, retailer,or restaurant? Join
          our wholesale program to source directly from a diverse network of
          hundreds of farms across Kisumu and its environs.
        </p>
        <InquiryParagraph>
          If you are looking to buy local food for personla use, please download
          the Puodho app to find farms near you.
        </InquiryParagraph>
        <FormContainer>
          <InputDiv>
            <p>Name</p>
            <div>
              <input placeholder="First Name" type="text" />
              <input placeholder="Last Name" type="text" />
            </div>
          </InputDiv>
          <InputDiv>
            <p>Email</p>
            <div>
              <input placeholder="First Name" type="text" />
              <input placeholder="Last Name" type="text" />
            </div>
          </InputDiv>

          <div>
            <p>Institution</p>
            <input placeholder="Institution Name" type="text" />
          </div>
          <div>
            <p>Message</p>
            <textarea placeholder="Your Message" rows="4"></textarea>
          </div>
          <button>Submit Inquiry</button>
        </FormContainer>
      </InquiryContainer>
      <div>
        "Puodho has resulted in both professional and personal relationships
        with increible customes an people in my local community. Not only have I
        been able to \n network and make sales but I never eaten better or
        cleaner in my life! I downloaded it when I was the only producer withi
        50 kms and now there are ovr 30 in my village alone! I can't wait to see
        what else Puodo has up their sleeve!" - Jeff Ondoro.
      </div>
      <div>
        <div>
          <img src="/logo.png" alt="logo  " />
          <h1>FARMFRESH</h1>
        </div>
        <p>
          Welcome to fARMfRESH! Our mission is to cnnectt communities with local
          food sources. Buy and sell garden and farm produce, backyar chicken
          eggs, supplies, and many more.
        </p>
        <div>
          <a href="">How it Works</a>
          <a href="">About us</a>
          <a href="">FAQ</a>
        </div>
        <input type="text" placeholder="Email" />
        <button>Sign Up for News & Updates </button>
        <p>support@famrfresh.com</p>
        <div>
          <img src="" alt="facebook logo" />
          <img src="" alt="x logo" />
          <img src="" alt="instagram logo" />
          <img src="" alt="pintrest logo" />
        </div>
        <div>
          <p>
            Privacy policy | Terms and Conditions | Cookie Policy | Refunds and
            Returns
          </p>
        </div>
      </div>
    </>
  );
}

export default Body;
