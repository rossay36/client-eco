import "./ProductList.css";
import Navbar from "../../components/navbar/Navbar";
import Anoucement from "../../components/anoucement/Anoucement";
import Products from "../../components/product/Products";
import NewsLetter from "../../components/newsLetter/NewsLetter";
import Footer from "../../components/footer/Footer";

const ProductList = () => {
  return (
    <div className="productList">
      <Navbar />
      <Anoucement />
      <h1 className="productList__title">Dresses</h1>
      <div className="productList__filter-container">
        <div className="productList__filter">
          <span className="productList__filter-text">Filter Products</span>
          <select className="productList__filter-select">
            <option className="productList__filter-option" disabled selected>
              Color
            </option>
            <option className="productList__filter-option ">White</option>
            <option className="productList__filter-option ">Black</option>
            <option className="productList__filter-option ">Red</option>
            <option className="productList__filter-option ">Blue</option>
            <option className="productList__filter-option ">Yellow</option>
            <option className="productList__filter-option ">Green</option>
          </select>
          <select className="productList__filter-select">
            <option className="productList__filter-option" disabled selected>
              Size
            </option>
            <option className="productList__filter-option ">XS</option>
            <option className="productList__filter-option ">S</option>
            <option className="productList__filter-option ">M</option>
            <option className="productList__filter-option ">L</option>
            <option className="productList__filter-option ">XL</option>
          </select>
        </div>
        <div className="productList__filter">
          <span className="productList__filter-text">Sort Products</span>
          <select className="productList__filter-select">
            <option className="productList__filter-option" selected>
              Newest
            </option>
            <option className="productList__filter-option ">Price (asc)</option>
            <option className="productList__filter-option ">
              Price (desc)
            </option>
          </select>
        </div>
      </div>
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductList;
