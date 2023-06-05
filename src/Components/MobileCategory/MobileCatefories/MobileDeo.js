import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../Contexts/ThemeContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const MobileDeo = () => {
  const [linkTwoHover, setLinkTwoHover] = useState(false);
  const [subMenuHover, setSubMenuHover] = useState(false);
  const { setCategory, setBrand } = useContext(ThemeContext);
  return (
    <div className={`mobile-perfume transition-all ease-in-out duration-300`}>
      <button
        to={`/category/Deodorant`}
        onClick={() => {
          setLinkTwoHover(!linkTwoHover);
        }}
        className={`mr-10 w-[85%] text-start relative ${
          linkTwoHover ? "text-accent" : "text-secondary"
        } font-bold `}
      >
        DEODORANT
        <FontAwesomeIcon
          className="w-3 absolute right-0"
          icon={faChevronDown}
        ></FontAwesomeIcon>
      </button>
      <div
        className={`mobile-menu-hover ${
          linkTwoHover ? "grid-transition text-start px-4 py-4 " : ""
        } text-black `}
      >
        <div>
          <hr className=" w-full text-white mb-2" />
          <div className="relative">
            <button
              onClick={() => {
                setSubMenuHover(!subMenuHover);
              }}
              className={`mr-10 w-[85%] text-start relative ${
                subMenuHover ? "text-accent" : "text-secondary"
              } font-bold `}
            >
              Brands
              <FontAwesomeIcon
                className="w-3 absolute right-0"
                icon={faChevronDown}
              ></FontAwesomeIcon>
            </button>
            <div
              className={`mobile-menu-hover ${
                subMenuHover ? "grid-transition text-start px-4 py-4 " : ""
              } text-black `}
            >
              <div>
                <hr className=" w-full text-white my-2" />
                <Link
                  onClick={() => {
                    setCategory("deodorant");
                    localStorage.setItem("category", "deodorant");
                  }}
                  to="/category/deodorant"
                  className=" hover:text-accent text-[14px]"
                >
                  ALL BRANDS
                </Link>
                <hr className=" w-full text-white my-2" />
                <Link
                  onClick={() => {
                    setCategory("deoBrand");
                    localStorage.setItem("category", "deoBrand");
                    setBrand("armaf");
                    localStorage.setItem("brand", "armaf");
                  }}
                  to="/category/armaf deodorant"
                  className=" hover:text-accent text-[14px]"
                >
                  ARMAF
                </Link>
                <hr className=" w-full text-white my-2" />
                <Link
                  onClick={() => {
                    setCategory("deoBrand");
                    localStorage.setItem("category", "deoBrand");
                    setBrand("armaf enchanted");
                    localStorage.setItem("brand", "armaf enchanted");
                  }}
                  to="/category/armaf enchanted deodorant"
                  className=" hover:text-accent text-[14px]"
                >
                  ARMAF ENCHANTED
                </Link>

                <hr className=" w-full text-white my-2" />
                <Link
                  onClick={() => {
                    setCategory("deoBrand");
                    localStorage.setItem("category", "deoBrand");
                    setBrand("estiara");
                    localStorage.setItem("brand", "estiara");
                  }}
                  to="/category/estiara deodorant"
                  className=" hover:text-accent text-[14px]"
                >
                  ESTIARA
                </Link>

                <hr className=" w-full text-white my-2" />
                <Link
                  onClick={() => {
                    setCategory("deoBrand");
                    localStorage.setItem("category", "deoBrand");
                    setBrand("flavia");
                    localStorage.setItem("brand", "flavia");
                  }}
                  to="/category/flavia deodorant"
                  className=" hover:text-accent text-[14px]"
                >
                  FLAVIA
                </Link>

                <hr className=" w-full text-white my-2" />
                <Link
                  onClick={() => {
                    setCategory("deoBrand");
                    localStorage.setItem("category", "deoBrand");
                    setBrand("paris");
                    localStorage.setItem("brand", "paris");
                  }}
                  to="/category/paris deodorant"
                  className=" hover:text-accent text-[14px]"
                >
                  PARIS
                </Link>
              </div>
            </div>
          </div>
          <hr className=" w-full text-white my-2" />
          <Link onClick={()=>{
            setCategory("deoMen");
            localStorage.setItem("category", "deoMen");
          }}
          to="category/deodorant for men"
          className=" hover:text-accent">For Men</Link>
          <hr className=" w-full text-white my-2" />
          <Link onClick={()=>{
            setCategory("deoWomen");
            localStorage.setItem("category", "deoWomen");
          }}
          to="category/deodorant for women" className=" hover:text-accent">For Women</Link>
        </div>
      </div>
    </div>
  );
};

export default MobileDeo;
