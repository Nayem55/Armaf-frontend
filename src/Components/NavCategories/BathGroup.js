import { ThemeContext } from "../../Contexts/ThemeContext";
import useScroll from "../../Hooks/useScroll";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const BathGroup = () => {
  const [linkThreeHover, setLinkThreeHover] = useState(false);
  const { setCategory, setProductType } = useContext(ThemeContext);
  const [scrollPosition] = useScroll();

  return (
    <div
      onMouseEnter={() => setLinkThreeHover(true)}
      onMouseLeave={() => setLinkThreeHover(false)}
      className={`dropdown h-full ${
        scrollPosition > 80 ? "dropdown-scrolled" : ""
      }`}
    >
      <Link
        to={`/category/Body & bath`}
        onClick={() => {
          setCategory("bath");
          localStorage.setItem("category", "bath");
        }}
        className="mr-10 hover:text-accent font-bold "
      >
        BODY & BATH
        <FontAwesomeIcon
          className="w-3 ms-2"
          icon={faChevronDown}
        ></FontAwesomeIcon>
      </Link>
      <div
        className={`menu-hover ${
          linkThreeHover ? "block  text-start" : "hidden relative"
        } ${
          scrollPosition > 80 ? "menu-scrolled" : ""
        } px-4  pb-4 w-[200px] text-black `}
      >
        <hr className=" w-full text-white mb-2" />
        <Link
          onClick={() => {
            setCategory("bath");
            localStorage.setItem("category", "bath");
            setProductType("body lotion");
            localStorage.setItem("productType", "body lotion");
          }}
          to="/category/body lotion"
          className=" hover:text-accent"
        >
          Body Lotion
        </Link>

        <hr className=" w-full text-white my-2" />
        <Link
          onClick={() => {
            setCategory("bath");
            localStorage.setItem("category", "bath");
            setProductType("Conditioner");
            localStorage.setItem("productType", "Conditioner");
          }}
          to="/category/Conditioner"
          className=" hover:text-accent"
        >
          Conditionerr
        </Link>

        <hr className=" w-full text-white my-2" />
        <Link
          onClick={() => {
            setCategory("bath");
            localStorage.setItem("category", "bath");
            setProductType("face wash");
            localStorage.setItem("productType", "face wash");
          }}
          to="/category/face wash"
          className=" hover:text-accent"
        >
          Face Wash
        </Link>

        <hr className=" w-full text-white my-2" />
        <Link
          onClick={() => {
            setCategory("bath");
            localStorage.setItem("category", "bath");
            setProductType("hair oil");
            localStorage.setItem("productType", "hair oil");
          }}
          to="/category/hair oil"
          className=" hover:text-accent"
        >
          Hair Oil
        </Link>

        <hr className=" w-full text-white my-2" />
        <Link
          onClick={() => {
            setCategory("bath");
            localStorage.setItem("category", "bath");
            setProductType("shampoo");
            localStorage.setItem("productType", "shampoo");
          }}
          to="/category/shampoo"
          className=" hover:text-accent"
        >
          Shampoo
        </Link>

        <hr className=" w-full text-white my-2" />
        <Link
          onClick={() => {
            setCategory("bath");
            localStorage.setItem("category", "bath");
            setProductType("shower gel");
            localStorage.setItem("productType", "shower gel");
          }}
          to="/category/shower gel"
          className=" hover:text-accent"
        >
          Shower Gel
        </Link>
      </div>
    </div>
  );
};

export default BathGroup;
