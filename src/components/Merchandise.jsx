import styled from "styled-components";
import Navbar from "./Navbar";
import FooterContainer from "./Footer";
import { useState } from "react";

function Merchandise() {
  const [review, setReview] = useState({
    name: "",
    email: "",
    rating: 0,
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle review submission logic (e.g., send to API)
    console.log("Review submitted:", review);
    // Reset form
    setReview({ name: "", email: "", rating: 0, comment: "" });
  };
  return (
    <>
      <Navbar></Navbar>
      <ShopContainer>
        <ShopTitle>Home / Accesories / Item name</ShopTitle>
        <ShopContent>
          <div>
            <img loading="lazy" src="/shop/hat.jpg" alt="Hat" />
            <h4>Afarmer Combo Hat</h4>
            <Price>Kes 599</Price>
          </div>
          <ProductDetails>
            <div>
              <label>Color:</label>
              <select id="color" name="color">
                <option value="">Choose an option</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
              </select>
            </div>
            <div>
              <label>Size:</label>
              <select id="size" name="size">
                <option value="">Choose an option</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="xl">XL</option>
              </select>
            </div>
            <div>
              <a href="#">Size Guide</a>
              <div>
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" id="quantity" name="quantity" min="1" />
                <button type="submit">Add to Cart</button>
              </div>
            </div>
          </ProductDetails>
        </ShopContent>
        <div>Divider</div>
        <p>
          SKU: N/A Category: <span>Acessories</span>
        </p>
        <div>
          <p>Description</p>
          <p> Additonal Information</p>
          <p>Reviews</p>
          <div>
            <div>
              <h4>Description</h4>
              <p>
                This is a high-quality Afarmer Combo Hat, perfect for any
                occasion.
              </p>
            </div>
            <div>
              <h4>Customer Reviews</h4>
              <p>
                There are no reviews yet. Be the first to review “Yard Fresh &
                Local T-shirt” Your email address will not be published.
                Required fields are marked *
              </p>

              <ReviewForm onSubmit={handleSubmit}>
                <label htmlFor="rating">Your rating *</label>
                <div className="rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <label key={star}>
                      <input
                        type="radio"
                        name="rating"
                        value={star}
                        onChange={handleChange}
                        checked={review.rating === star}
                      />
                      {star}
                    </label>
                  ))}
                </div>

                <label htmlFor="comment">Your review *</label>
                <textarea
                  id="comment"
                  name="comment"
                  rows="4"
                  value={review.comment}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={review.name}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={review.email}
                  onChange={handleChange}
                  required
                />

                <div className="save-info">
                  <input type="checkbox" id="save-info" />
                  <label htmlFor="save-info">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>

                <button type="submit">Submit Review</button>
              </ReviewForm>
            </div>
            <div>
              <h4>Additional Information</h4>
              <p>Weight: 0.5kg</p>
              <p>Dimensions: 20cm x 15cm x 10cm</p>
              <p>Material: 100% Cotton</p>
            </div>
          </div>
        </div>
      </ShopContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}

export default Merchandise;

const ShopContainer = styled.div`
  padding: 40px;
`;

const ShopTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  text-align: start;
  margin-bottom: 40px;
`;

const ShopContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid #8f8f8f; */
    border-radius: 10px;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.05);
      /* border: 1px solid #000000; */
    }

    img {
      max-width: 100%;
      max-height: 400px;
      height: auto;
      min-height: 150px;
      object-fit: cover;
      padding-bottom: 20px;
    }

    h4 {
      font-size: 34px;
      font-weight: 700;
      margin: 10px 0 0 0;
      text-align: start;
      width: 100%;
    }
  }
`;

const Price = styled.p`
  width: 100%;
  text-align: start;
  font-size: 24px;
  color: #ffb300;
  font-weight: 600;
  margin: 10px 0 0 0;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  .rating {
    display: flex;
    gap: 10px;
  }

  label {
    font-weight: 600;
  }

  textarea,
  input[type="text"],
  input[type="email"],
  input[type="number"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    resize: vertical;
  }

  .save-info {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  button {
    width: 150px;
    padding: 10px;
    background-color: #5c9132;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: #4a6f24;
    }
  }

  @media (max-width: 600px) {
    button {
      width: 100%;
    }
  }
`;
