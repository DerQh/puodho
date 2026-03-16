import styled from "styled-components";
import Navbar from "./Navbar";
import FooterContainer from "./Footer";

const AboutUsContainer = styled.div`
  padding: 20px 40px;
  background-color: #37b3e3;
  color: #000000;

  div {
    margin-bottom: 30px;
  }
`;

const Heading = styled.h2`
  font-size: 50px;
  letter-spacing: 4px;
  font-weight: 700;
  line-height: 62px;
  color: #fff;
  text-align: center;
`;

const InnerContainer = styled.div`
  background-color: #fff;
  padding: 20px 30px;
  border-radius: 10px;
  margin-top: 20px;

  h2 {
    font-size: 24px;
    letter-spacing: 2px;
    font-weight: 700;
    line-height: 36px;
    margin-bottom: 15px;
    text-align: center;
  }
  p {
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 700;
    line-height: 27.2px;
    margin-bottom: 15px;
    span {
      font-weight: 500;
    }
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
    flex-direction: column;
    gap: 20px;
  }
`;

const BuySellGrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 10px; */
  /* margin-top: 30px; */
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

const FounderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px;
  background-color: #e5f4ff;
  color: #5c9132;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    margin: 20px;
    object-fit: cover;
  }

  h4 {
    font-size: 24px;
    line-height: 28.8px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    line-height: 27.2px;
    font-weight: 500;
    letter-spacing: 1px;
    max-width: 600px;
    color: #5e5d5d;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  img {
    margin: 40px 80px;
    max-width: 100%;
    height: auto;
  }
`;

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <AboutUsContainer>
        <div>
          <Heading>About Us </Heading>
        </div>
        <div>
          <InnerContainer>
            <BuySellGrowContainers>
              <BuySellGrowContainer>
                <img loading="lazy" src="/objective.png" alt="buy image" />
                <h2>Mission</h2>
                <p>
                  Create economic opportunities for local food growers and
                  connect communities with the economic, environmental, and
                  health benefits of locally grown food
                </p>
              </BuySellGrowContainer>
              <BuySellGrowContainer>
                <img loading="lazy" src="/our way.png" alt="sell image" />
                <h2>Our Path</h2>
                <p>
                  Recent events have shown us the fragility of our
                  national/global food systems. Unlike big corporations, local
                  food resources (gardens, farms, etc.) are able to pivot in the
                  face of change.
                </p>
              </BuySellGrowContainer>
              <BuySellGrowContainer>
                <img loading="lazy" src="/community.png" alt="grow image" />
                <h2>Community</h2>
                <p>
                  As a mission-driven marketplace, our first priority is
                  community. Bringing people together is the focus of everything
                  we do
                </p>
              </BuySellGrowContainer>
            </BuySellGrowContainers>
          </InnerContainer>
        </div>
      </AboutUsContainer>
      <FounderContainer>
        <img loading="lazy" src="/public/founder.jpg" alt="founder picture" />
        <h4>HI ! I'M FRED</h4>
        <p>
          I'm a father living in Kisumu, Kenya. Founder of AFARMER. I’m
          passionate about gardening, local food production, and supporting our
          community. Like many families, we’ve started growing more of our own
          food over the past few years and have sought out local sources.
          However, it often takes several steps—such as asking around, searching
          online, and reaching out to others—to connect with local farmers. With
          the technology we have today, it shouldn't be so difficult to create a
          local supply chain when we have producers in our own communities.
          That's how my journey began.
        </p>
      </FounderContainer>
      <ImageContainer>
        <img loading="lazy" src="/food-chain.png" alt="" />
      </ImageContainer>
      <FooterContainer />
    </>
  );
};

export default AboutUs;
