import styled from "styled-components";

function DropDownMenu({ isOpen, toggleMenu }) {
  console.log("DropDownMenu rendered with isOpen:", isOpen);

  return (
    <DropDown isopen={isOpen}>
      <li>
        <h4>How it works</h4>
        <SubDrop>
          <li onClick={() => toggleMenu("/forfarms")}>For Farmers</li>
          <li onClick={() => toggleMenu("/for farmersmarket")}>For Buyers</li>
          <li onClick={() => toggleMenu("/agritourism")}>Agritourism</li>
        </SubDrop>
      </li>
      <li>
        <h4 onClick={() => toggleMenu("/pricing")}>Pricing</h4>
      </li>
      <li>
        <h4>Local Sourcing</h4>
        <SubDrop>
          <li>Wholesalers</li>
        </SubDrop>
      </li>
      <li>
        <h4>Seller's Guide</h4>
      </li>
      <li>
        <h4>About Us</h4>
        <SubDrop>
          <li>Our Story</li>
          <li>Our Values</li>
          <li>FAQ</li>
          <li>Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </SubDrop>
      </li>
      <li>
        <h4>Shop</h4>
      </li>
      <li>
        <h4>Desktop Version of the App</h4>
      </li>
    </DropDown>
  );
}

export default DropDownMenu;

const DropDown = styled.ul`
  list-style: none;
  padding: 10px;
  margin: 0;
  position: absolute;
  top: 80%;
  right: 30px;
  left: 35px;
  background-color: #e5f4ff;
  color: #000000;
  border: 1px solid #ccc;
  border-top: 2px solid #5c9132;
  opacity: ${({ isopen }) => (isopen ? "1" : "0")};

  li {
    padding: 8px 12px;
    cursor: pointer;
    text-decoration: none;
    list-style: none;

    h4 {
      font-size: 18px;
      color: #000000;
      font-weight: 600;
      width: 100%;
      padding: 8px 12px;
      border-radius: 4px;
      margin: 0;

      &:hover {
        /* background-color: #dde8f0; */
        color: #777777;
      }
    }
  }
`;

const SubDrop = styled.ul`
  list-style: none;
  li {
    padding: 8px 12px;
    cursor: pointer;
    text-decoration: none;
    list-style: none;

    &:hover {
      background-color: #dde8f0;
      color: #777777;
    }
  }
`;
