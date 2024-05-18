import Anoucement from "../../components/anoucement/Anoucement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Cart.css";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

const Cart = () => {
  return (
    <div className="cart">
      <Navbar />
      <Anoucement />
      <div className="cart__wrap">
        <h1 className="cart__title">YOUR BAG</h1>
        <div className="cart__top">
          <button className="cart__top-btn">CONTINUE SHOPPING</button>
          <div className="cart__top-texts">
            <p className="cart__top-text">Shopping Bag(2)</p>
            <p className="cart__top-text ">Your Wishlist</p>
          </div>
          <button className="cart__top-btn color-btn">CHECKOUT NOW</button>
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-info">
            <div className="cart__info-produt">
              <div className="cart__info-produt-details">
                <div className="cart__info-produt-img">
                  <img
                    className="cart__info-produt-image"
                    src="../../../src/assets/shoe1.jpg"
                    alt=""
                  />
                </div>
                <div className="cart__info-produt-detail">
                  <p className="cart__info-produt-name">
                    <b>Product: </b>NIKE THUNDER SHOES
                  </p>
                  <p className="cart__info-produt-userId">
                    <b>ID: </b>384752846
                  </p>
                  <div className="cart__info-produt-color" />
                  <p className="cart__info-produt-size">
                    <b>Size: </b>37.5
                  </p>
                </div>
              </div>
              <div className="cart__info-produt-price">
                <div className="cart__price-container">
                  <IoMdAdd className="cart__price-icon" />
                  <p className="cart__price-amount">2</p>
                  <IoMdRemove className="cart__price-icon" />
                </div>
                <p className="cart__price-prices">Price: $30</p>
              </div>
            </div>

            <hr className="hr" />

            <div className="cart__info-produt">
              <div className="cart__info-produt-details">
                <div className="cart__info-produt-img">
                  <img
                    className="cart__info-produt-image"
                    src="../../../src/assets/nike.jpg"
                    alt=""
                  />
                </div>
                <div className="cart__info-produt-detail">
                  <p className="cart__info-produt-name">
                    <b>Product: </b>NIKE NICE TSHIRT
                  </p>
                  <p className="cart__info-produt-userId">
                    <b>ID: </b>384743267
                  </p>
                  <div className="cart__info-produt-color nextColor" />
                  <p className="cart__info-produt-size">
                    <b>Size: </b>M
                  </p>
                </div>
              </div>
              <div className="cart__info-produt-price">
                <div className="cart__price-container">
                  <IoMdAdd className="cart__price-icon" />
                  <p className="cart__price-amount">2</p>
                  <IoMdRemove className="cart__price-icon" />
                </div>
                <p className="cart__price-prices">Price: $50</p>
              </div>
            </div>
          </div>
          <div className="cart__bottom-summary">
            <h1 className="cart__summary-title">ORDER SUMMARY</h1>
            <div className="cart__summary-items">
              <span className="cart__summary-text">Subtotal</span>
              <span className="cart__summary-price">$ 80</span>
            </div>
            <div className="cart__summary-items">
              <span className="cart__summary-text">Estimated Shipping</span>
              <span className="cart__summary-price">$ 5.90</span>
            </div>
            <div className="cart__summary-items">
              <span className="cart__summary-text">Shipping Discount</span>
              <span className="cart__summary-price">$ -5.90</span>
            </div>
            <div className="cart__summary-items total">
              <span className="cart__summary-text ">Total</span>
              <span className="cart__summary-price">$ 80</span>
            </div>
            <button className="cart__summary-btn">CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
