import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../Contexts/ThemeContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const MobileBrands = () => {
  const [linkFourHover, setLinkFourHover] = useState(false);
  const { setCategory, setBrand } = useContext(ThemeContext);
  return (
    <div
      className={`mobile-perfume transition-all ease-in-out duration-300`}
    >
      <button
        onClick={() => setLinkFourHover(!linkFourHover)}
        className={`mr-10 w-[85%] text-start relative ${
          linkFourHover ? "text-accent" : "text-secondary"
        } font-bold `}
      >
        BRANDS
        <FontAwesomeIcon
          className=" w-3 absolute right-0"
          icon={faChevronDown}
        ></FontAwesomeIcon>
      </button>

      <div
        className={`mobile-menu-hover ${
          linkFourHover ? "grid-transition text-start px-4 py-4 " : ""
        } text-black `}
      >
        <div>
          <hr className=" w-full text-white mb-2" />
          <Link
            onClick={() => {
              setCategory("all");
              localStorage.setItem("category", "all");
            }}
            to={`/category/Brands`}
            className=" hover:text-accent"
          >
            ALL BRANDS
          </Link>

          <hr className=" w-full text-white my-2" />
          <Link
            onClick={() => {
              setCategory("brand");
              localStorage.setItem("category", "brand");
              setBrand("armaf");
              localStorage.setItem("brand", "armaf");
            }}
            to="/category/armaf"
            className=" hover:text-accent"
          >
            ARMAF
          </Link>

          <hr className=" w-full text-white my-2" />
          <Link
            onClick={() => {
              setCategory("brand");
              localStorage.setItem("category", "brand");
              setBrand("armaf enchanted");
              localStorage.setItem("brand", "armaf enchanted");
            }}
            to="/category/armaf enchanted"
            className=" hover:text-accent"
          >
            ARMAF ENCHANTED
          </Link>

          <hr className=" w-full text-white my-2" />
          <Link
            onClick={() => {
              setCategory("brand");
              localStorage.setItem("category", "brand");
              setBrand("bioluxe");
              localStorage.setItem("brand", "bioluxe");
            }}
            to="/category/bioluxe"
            className=" hover:text-accent"
          >
            BIOLUXE
          </Link>

          <hr className=" w-full text-white my-2" />
          <Link
            onClick={() => {
              setCategory("brand");
              localStorage.setItem("category", "brand");
              setBrand("estiara");
              localStorage.setItem("brand", "estiara");
            }}
            to="/category/estiara"
            className=" hover:text-accent"
          >
            ESTIARA
          </Link>

          <hr className=" w-full text-white my-2" />
          <Link
            onClick={() => {
              setCategory("brand");
              localStorage.setItem("category", "brand");
              setBrand("flavia");
              localStorage.setItem("brand", "flavia");
            }}
            to="/category/flavia"
            className=" hover:text-accent"
          >
            FLAVIA
          </Link>

          <hr className=" w-full text-white my-2" />
          <Link
            onClick={() => {
              setCategory("brand");
              localStorage.setItem("category", "brand");
              setBrand("paris");
              localStorage.setItem("brand", "paris");
            }}
            to="/category/paris"
            className=" hover:text-accent"
          >
            PARIS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileBrands;
