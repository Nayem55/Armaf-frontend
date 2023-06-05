import { ThemeContext } from "../../Contexts/ThemeContext";
import useScroll from "../../Hooks/useScroll";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const DeoGroup = () => {
  const { setCategory, setBrand } = useContext(ThemeContext);
  const [scrollPosition] = useScroll();


    return (
     
        <div
          className={`dropdown h-full ${
            scrollPosition > 80 ? "dropdown-scrolled" : ""
          }`}
        >
          <Link
            to={`/category/Deodorant`}
            onClick={() => {
              setCategory("deodorant");
              localStorage.setItem("category", "deodorant");
            }}
            className="mr-10 hover:text-accent font-bold "
          >
            DEODORANT

          </Link>

        </div>
    );
};

export default DeoGroup;