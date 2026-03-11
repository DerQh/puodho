import styled from "styled-components";
import DropDownMenu from "./DropDownMenu";
import { useState } from "react";

const Nav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  background-color: #e5f4ff;
  color: #5c9132;
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
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  h1 {
    font-size: 1.5rem;
    padding-left: 4px;
    margin: 0;
  }
`;

const MenuContainer = styled.div``;

const ToggleIcons = styled.div`
  cursor: pointer;

  div {
    width: 20px;
    height: 2px;
    background-color: #5c9132;
    margin: 4px 0;
    border-radius: 10px;
  }
`;

const DropdownMenu = styled.div`
  position: relative;
  display: none;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: #4caf50;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }

  li {
    position: relative;

    a {
      color: white;
      text-decoration: none;
      padding: 10px;
      display: block;

      &:hover {
        background: #45a049; /* Hover color */
      }
    }

    &:hover > ul {
      display: block;
    }
  }

  /* Main menu items styling */
  > ul {
    display: flex;
    gap: 15px;

    li {
      position: relative;
      padding: 10px;

      &:hover {
        background: #388e3c; /* Hover color */
      }
    }
  }
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Menu toggled:", !isOpen);
  };

  return (
    <Nav>
      <LogoContainer>
        <img src="/logo1.jpg" alt="logo" />
        <h1>AFARMER</h1>
      </LogoContainer>
      <MenuContainer>
        <ToggleIcons onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </ToggleIcons>
        <DropdownMenu>
          <ul>
            <li>
              <a href="">How it works</a>
              <ul>
                <li>For Farmers</li>
                <li>For Buyers</li>
                <li>Agritourism</li>
              </ul>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Local Sourcing</a>
              <ul>
                <li>Wholesalers</li>
              </ul>
            </li>
            <li>
              <a href="">Seller's Guide</a>
            </li>
            <li>
              <a href="">About Us</a>
              <ul>
                <li>Our Story</li>
                <li>Our Values</li>
                <li>FAQ</li>
                <li>Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">Desktop Version of the App</a>
            </li>
          </ul>
        </DropdownMenu>
      </MenuContainer>
      <DropDownMenu isOpen={isOpen}></DropDownMenu>
    </Nav>
  );
}
