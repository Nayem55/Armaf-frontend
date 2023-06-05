import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../../Contexts/ThemeContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const MobileBodyBath = () => {
    const [linkThreeHover, setLinkThreeHover] = useState(false);
    const { setCategory, setProductType } = useContext(ThemeContext);
    return (
        <div
        className={`mobile-perfume transition-all ease-in-out duration-300`}
    >
      <button
        to={`/category/Body & bath`}
        onClick={() => {
          setLinkThreeHover(!linkThreeHover)
        }}
        className={`mr-10 w-[85%] text-start relative ${linkThreeHover?"text-accent":"text-secondary"} font-bold `}
      >
        BODY & BATH
        <FontAwesomeIcon
          className="w-3 absolute right-0"
          icon={faChevronDown}
        ></FontAwesomeIcon>
      </button>

      <div className={`mobile-menu-hover ${
            linkThreeHover ? "grid-transition text-start px-4 py-4 " : ""
          } text-black `}>

      <div>
        <hr className=" w-full text-white mb-2" />
        <Link
          onClick={() => {
            setCategory("body");
            localStorage.setItem("category", "body");
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
            setCategory("body");
            localStorage.setItem("category", "body");
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
            setCategory("body");
            localStorage.setItem("category", "body");
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
            setCategory("body");
            localStorage.setItem("category", "body");
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
            setCategory("body");
            localStorage.setItem("category", "body");
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
            setCategory("body");
            localStorage.setItem("category", "body");
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
    </div>
    );
};

export default MobileBodyBath;