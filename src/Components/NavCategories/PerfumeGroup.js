import { ThemeContext } from "../../Contexts/ThemeContext";
import useScroll from "../../Hooks/useScroll";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const PerfumeGroup = () => {
  const { setCategory, setBrand } = useContext(ThemeContext);

  return (
    <div>
      <Link
        onClick={() => {
          setCategory("perfume");
          localStorage.setItem("category", "perfume");
        }}
        to={`/category/Perfume`}
        className="mr-10 block hover:text-accent font-bold "
      >
        PERFUME
      </Link>

      
    </div>
  );
};

export default PerfumeGroup;
