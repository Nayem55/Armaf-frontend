import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../../Contexts/ThemeContext";

const MobilePerfume = () => {
  const [linkOneHover, setLinkOneHover] = useState(false);
  const [subMenuHover, setSubMenuHover] = useState(false);
  const { setCategory, setBrand } = useContext(ThemeContext);

  return (
    <div className={`mobile-perfume transition-all ease-in-out duration-300`}>
      <button
        onClick={() => setLinkOneHover(!linkOneHover)}
        className={`mr-10 w-[85%] text-start relative ${
          linkOneHover ? "text-accent" : "text-secondary"
        } font-bold `}
      >
        PERFUME
        <FontAwesomeIcon
          className=" w-3 absolute right-0"
          icon={faChevronDown}
        ></FontAwesomeIcon>
      </button>

      {/* Perfume Hover Category  */}

      <div
        className={`mobile-menu-hover ${
          linkOneHover ? "grid-transition text-start px-4 py-4 " : ""
        } text-black `}
      >
        <div>
          <hr className=" w-full my-2 text-accent" />
          <Link
            onClick={() => {
              setCategory("perfume");
              localStorage.setItem("category", "perfume");
            }}
            to={`/category/Perfume`}
            className=" hover:text-accent"
          >
            All perfume
          </Link>

          <hr className=" w-full my-2 text-accent" />
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
                className=" w-3 absolute right-0"
                icon={faChevronDown}
              ></FontAwesomeIcon>
            </button>

            {/* Perfume Brands  */}
            <div
              className={`mobile-menu-hover ${
                subMenuHover ? "grid-transition text-start px-4 py-4 " : ""
              } text-black `}
            >
              <div>
                <hr className=" w-full text-white my-2" />
                <Link
                  onClick={() => {
                    setCategory("perfumeBrand");
                    localStorage.setItem("category", "perfumeBrand");
                    setBrand("armaf");
                    localStorage.setItem("brand", "armaf");
                  }}
                  to="category/armaf perfume"
                  className=" hover:text-accent text-[14px]"
                >
                  ALL BRANDS
                </Link>
                <hr className=" w-full text-white my-2" />
                <Link
                  onClick={() => {
                    setCategory("perfume");
                    localStorage.setItem("category", "perfume");
                  }}
                  to="/category/Perfume"
                  className=" hover:text-accent text-[14px]"
                >
                  ARMAF
                </Link>
                <hr className=" w-full text-white my-2" />
                <Link
                  onClick={() => {
                    setCategory("perfumeBrand");
                    localStorage.setItem("category", "perfumeBrand");
                    setBrand("estiara");
                    localStorage.setItem("brand", "estiara");
                  }}
                  to="category/Estiara Perfume"
                  className=" hover:text-accent text-[14px]"
                >
                  ESTIARA
                </Link>
                <hr className=" w-full text-white my-2" />
                <Link
                  onClick={() => {
                    setCategory("perfumeBrand");
                    localStorage.setItem("category", "perfumeBrand");
                    setBrand("flavia");
                    localStorage.setItem("brand", "flavia");
                  }}
                  to="category/Flavia Perfume"
                  className=" hover:text-accent text-[14px]"
                >
                  FLAVIA
                </Link>
              </div>
            </div>

          </div>
          <hr className=" w-full my-2 text-accent" />
          <Link
            onClick={() => {
              setCategory("purePerfumeOil");
              localStorage.setItem("category", "purePerfumeOil");
            }}
            to="/category/pure perfume oil"
            className=" hover:text-accent"
          >
            Pure Perfume Oil
          </Link>
          <hr className=" w-full my-2" />
          <Link
            onClick={() => {
              setCategory("perfumeMen");
              localStorage.setItem("category", "perfumeMen");
            }}
            to="/category/perfume for men"
            className=" hover:text-accent"
          >
            For Men
          </Link>
          <hr className=" w-full my-2" />
          <Link
            onClick={() => {
              setCategory("perfumeWomen");
              localStorage.setItem("category", "perfumeWomen");
            }}
            to="/category/perfume for women"
            className=" hover:text-accent"
          >
            For Women
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobilePerfume;
