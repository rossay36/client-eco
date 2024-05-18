import "./SingleProduct.css";
import Navbar from "../../components/navbar/Navbar";
import Anoucement from "../../components/anoucement/Anoucement";
import Footer from "../../components/footer/Footer";
import NewsLetter from "../../components/newsLetter/NewsLetter";
import { IoMdRemove } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";

const SingleProduct = () => {
  return (
    <div className="SingleProduct">
      <Navbar />
      <Anoucement />
      <div className="singleProduct__wrap">
        <div className="singleProduct__container-img">
          <img
            className="singleProduct__img"
            src="../../../src/assets/jacket.jpg"
            alt="Jacke for sale"
          />
        </div>
        <div className="singleProduct__container-info">
          <h1 className="singleProduct__info-title">sunt, explicabo.</h1>
          <p className="singleProduct__info-desc">
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
            sit, aspernatur aut
          </p>
          <span className="singleProduct__info-price">Price: $20</span>
          <div className="singleProduct__filter-container">
            <div className="singleProduct__filters">
              <span className="singleProduct__filters-title">Color</span>
              <div className="singleProduct__filters-colors" />
              <div className="singleProduct__filters-colors" />
              <div className="singleProduct__filters-colors" />
            </div>
            <div className="singleProduct__filters">
              <span className="singleProduct__filters-title">Size</span>
              <select className="singleProduct__filters-select">
                <option className="singleProduct__filters-option">XS</option>
                <option className="singleProduct__filters-option">S</option>
                <option className="singleProduct__filters-option">M</option>
                <option className="singleProduct__filters-option">L</option>
                <option className="singleProduct__filters-option">XS</option>
              </select>
            </div>
          </div>
          <div className="singleProduct__add-container">
            <div className="singleProduct__add-amount">
              <button className="singleProduct__add-btnAmount">
                <IoMdRemove className="singleProduct__add-icon" />
              </button>
              <div className="singleProduct__add-amountCounts">
                <span className="singleProduct__add-amountCount">1</span>
              </div>
              <button className="singleProduct__add-btnAmount">
                <IoMdAdd className="singleProduct__add-icon" />
              </button>
            </div>
            <button className="singleProduct__add-btn">ADD TO CART</button>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default SingleProduct;
