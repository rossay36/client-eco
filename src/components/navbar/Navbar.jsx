import "./Navbar.css";
import { FiSearch } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="nav">
      <div className="nav__wrap">
        <div className="nav__left">
          <span className="nav__left-languages">EN</span>
          <div className="nav__left-searchContainer">
            <input className="nav__left-input" placeholder="Search" />
            <FiSearch className="nav__left-icon" />
          </div>
        </div>
        <div className="nav__center">
          <h1 className="nav__center-logo">ROSS</h1>
        </div>
        <div className="nav__right ">
          <button
            className="nav__hamburger"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? <FaTimes /> : <GiHamburgerMenu />}
          </button>
          <div
            className={toggle ? "nav__right-list active" : "nav__right-list"}
          >
            <div className="nav__right-menuItem">REGISTER</div>
            <div className="nav__right-menuItem">SIGN IN</div>
          </div>
          <div className="nav__right-badgeContainer">
            <MdOutlineShoppingCart className="nav-right-icon" />
            <span className="nav__right-badge">4</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
