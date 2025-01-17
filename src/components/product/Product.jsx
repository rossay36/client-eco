import "./Product.css";
import { IoMdCart } from "react-icons/io";
import { MdOutlineSearch } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const Product = ({ item }) => {
  return (
    <div className="product">
      <div className="product__circle"></div>
      <img
        className="product__img"
        src={item.img}
        alt="please check network connetion"
      />
      <div className="product__info">
        <div className="product__icons">
          <IoMdCart className="product__icon" />
        </div>
        <div className="product__icons">
          <MdOutlineSearch className="product__icon" />
        </div>
        <div className="product__icons">
          <FaRegHeart className="product__icon" />
        </div>
      </div>
    </div>
  );
};

export default Product;
