import React, { useState } from "react";
import "./MobileNavMenu.css";
import logo from "../../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import PopCart from "../PopCart/PopCart";
import NavLogin from "../NavLogin/NavLogin";
import MobileSearch from "../MobileSearch/MobileSearch";
import MobileCategory from "../MobileCategory/MobileCategory";


const MobileNavMenu = ({ popCart, handlePopCart }) => {
  const [userLogin, setUserLogin] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleUserLogin = () => {
    setUserLogin(!userLogin);
    setShowSearch(false);
  };

  const handleSearch = (search) => {
    setShowSearch(search);
  };

  const handleMenu = (menu) => {
    setMenu(menu);
    setShowSearch(false)
    if (menu) {
      handlePopCart(false);
    }
  };

  if (popCart || userLogin || showSearch || menu) {
    if (window.innerWidth < 640) {
      document.body.style.overflow = "hidden";
    }
  } else {
    document.body.style.overflow = "visible";
  }

  return (
    <div
      className={`mobile-menu-container ${
        showSearch ? "searched-nav-menu" : ""
      }`}
    >
      <PopCart handlePopCart={handlePopCart} popCart={popCart}></PopCart>

      <div className="flex ">
        <FontAwesomeIcon
          className="text-primary mr-8 text-xl"
          icon={faBars}
          onClick={() => handleMenu(true)}
        ></FontAwesomeIcon>
        <MobileCategory menu={menu} handleMenu={handleMenu} />

        <FontAwesomeIcon
          onClick={() => handleSearch(!showSearch)}
          className="text-primary text-xl"
          icon={faMagnifyingGlass}
        ></FontAwesomeIcon>
        <MobileSearch
          showSearch={showSearch}
          handleSearch={handleSearch}
        ></MobileSearch>
      </div>

      <Link to="/">
        <img className="w-[75%] h-[35px] mx-auto px-4" src={logo} alt="" />
      </Link>

      <div className="ml-auto">
        <FontAwesomeIcon
          className="text-primary text-xl mr-14"
          icon={faUser}
          onClick={() => handleUserLogin()}
        ></FontAwesomeIcon>

        <NavLogin
          userLogin={userLogin}
          handleUserLogin={handleUserLogin}
        ></NavLogin>

        <Cart
          popCart={popCart}
          handlePopCart={handlePopCart}
          handleSearch={handleSearch}
        ></Cart>
      </div>
      <span
        className={`overlay ${
          showSearch ? "searched-overlay" : "not-searched-overlay"
        } ${userLogin ? "overlay-active" : ""} ${
          popCart || menu ? "overlay-active " : ""
        }`}
      ></span>
    </div>
  );
};

export default MobileNavMenu;
