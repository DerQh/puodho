import styled from "styled-components";

function DropDownMenu({ isOpen }) {
  console.log("DropDownMenu rendered with isOpen:", isOpen);
  return (
    <DropDown isOpen={isOpen}>
      <li>
        <a href="">How it works</a>
        <SubDrop>
          <li>For Farmers</li>
          <li>For Buyers</li>
          <li>Agritourism</li>
        </SubDrop>
      </li>
      <li>
        <a href="">Pricing</a>
      </li>
      <li>
        <a href="">Local Sourcing</a>
        <SubDrop>
          <li>Wholesalers</li>
        </SubDrop>
      </li>
      <li>
        <a href="">Seller's Guide</a>
      </li>
      <li>
        <a href="">About Us</a>
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
        <a href="">Shop</a>
      </li>
      <li>
        <a href="">Desktop Version of the App</a>
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
  /* display: none; */
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};

  li {
    padding: 8px 12px;
    cursor: pointer;
    text-decoration: none;
    list-style: none;

    a {
      font-size: 18px;
      color: #000000;
      font-weight: 600;
      width: 100%;
      padding: 8px 12px;
      border-radius: 4px;

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
