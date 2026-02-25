import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #b3e5fc; /* Green background */
  color: #427719; /* Dark text for contrast */
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
  }

  h1 {
    font-size: 1.5rem;
    margin: 0;
  }
`;

const MenuContainer = styled.div``;

const ToggleIcons = styled.div`
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    background: white;
    margin: 3px 0;
    border-radius: 5px;
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
    background: #4caf50; /* Same background color */
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
  return (
    <Nav>
      <LogoContainer>
        <img src="/src/assets/logo1.jpg" alt="logo" />
        <h1>FARMFRESH</h1>
      </LogoContainer>
      <MenuContainer>
        <ToggleIcons>
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
    </Nav>
  );
}
