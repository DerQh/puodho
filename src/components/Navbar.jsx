import "./App.css";

function Navbar() {
  return (
    <nav>
      <div>
        <img src="" alt="logo" />
        <h1>FARMFRESH</h1>
      </div>
      <div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <ul>
            <li>
              <a href="">How it works</a>
              <ul>
                <li>For Farmers</li>
                <li>For Buyers</li>
                <li>Agritourism</li>
              </ul>
            </li>
            <li>Pricing</li>
            <li>
              <a href="">Local Sourcing</a>
              <ul>
                <li>Wholesalers</li>
              </ul>
            </li>
            <li>Seller's Guide</li>
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
            <li>Shop</li>
            <li>Desktop Version</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
