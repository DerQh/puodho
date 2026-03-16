import styled from "styled-components";
import Navbar from "./Navbar";
import FooterContainer from "./Footer";
import { Link } from "react-router-dom";

const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
`;

const ShopTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
`;

const ShopContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #8f8f8f;
    padding: 20px;
    text-align: center;
    border-radius: 10px;
    transition: transform 0.2s;
    margin-bottom: 20px;

    &:hover {
      transform: scale(1.05);
      border: 1px solid #000000;
    }

    img {
      max-width: 100%;
      max-height: 300px;
      height: auto;
      min-height: 150px;
      border-radius: 10px;
      object-fit: cover;
    }

    h4 {
      font-size: 18px;
      font-weight: 700;
      margin: 10px 0 0 0;
    }
  }
`;

const Price = styled.p`
  font-size: 18px;
  color: #ffb300;
  font-weight: 600;
  margin: 10px 0 0 0;
`;

function Shop() {
  return (
    <>
      <Navbar></Navbar>
      <ShopContainer>
        <ShopTitle>Merchandise Shop</ShopTitle>
        <ShopContent>
          <Link to="/shop/item">
            <div>
              <img loading="lazy" src="/shop/mugs.jpg" alt="Mugs" />
              <h4>Afarmer Combo Mug</h4>
              <Price>Kes 200</Price>
            </div>
          </Link>

          <Link to="/shop/item">
            <div>
              <img loading="lazy" src="/shop/t-shirt.png" alt="T-Shirt" />
              <h4>T-Shirt White and Black</h4>
              <Price>Kes 699</Price>
            </div>
          </Link>
          <Link to="/shop/item">
            <div>
              <img loading="lazy" src="/shop/mug.jpg" alt="Mug " />
              <h4>Afarmer Black Mug</h4>
              <Price>Kes 1,250</Price>
            </div>
          </Link>
          <Link to="/shop/item">
            <div>
              <img loading="lazy" src="/shop/tote.jpg" alt="Tote Bag" />
              <h4>Afarmer White and Black Tote Bag</h4>
              <Price>Kes 3,899</Price>
            </div>
          </Link>
          <Link to="/shop/item">
            <div>
              <img loading="lazy" src="/shop/hat.jpg" alt="Hat" />
              <h4>Afarmer White and Black Hat</h4>
              <Price>Kes 599</Price>
            </div>
          </Link>
          <Link to="/shop/item">
            <div>
              <img loading="lazy" src="/shop/hoodies.jpg" alt="Hoodies" />
              <h4>Afarmer White and Black Hoodies</h4>
              <Price>Kes 599</Price>
            </div>
          </Link>
        </ShopContent>
      </ShopContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}

export default Shop;
