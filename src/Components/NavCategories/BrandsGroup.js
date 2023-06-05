import { ThemeContext } from "../../Contexts/ThemeContext";
import useScroll from "../../Hooks/useScroll";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const BrandsGroup = () => {
  const [linkFourHover, setLinkFourHover] = useState(false);
  const [scrollPosition] = useScroll();
  const { setCategory, setBrand } = useContext(ThemeContext);

    return (
      
        <div
          onMouseEnter={() => setLinkFourHover(true)}
          onMouseLeave={() => setLinkFourHover(false)}
          className={`dropdown h-full ${
            scrollPosition > 80 ? "dropdown-scrolled" : ""
          }`}
        >
          <Link
            to={`/category/Brands`}
            onClick={() => {
              setCategory("all");
              localStorage.setItem("category", "all");
            }}
            className="mr-10 hover:text-accent font-bold "
          >
            BRANDS
            <FontAwesomeIcon
              className="w-3 ms-2"
              icon={faChevronDown}
            ></FontAwesomeIcon>
          </Link>
          <div
            className={`menu-hover ${
              linkFourHover ? "block  text-start" : "hidden relative"
            } ${
              scrollPosition > 80 ? "menu-scrolled" : ""
            } px-4  pb-4 w-[200px] text-black `}
          >
            <hr className=" w-full text-white mb-2" />
            <Link onClick={()=>{
              setCategory("brand")
              localStorage.setItem('category','brand')
              setBrand("armaf")
              localStorage.setItem('brand','armaf')
            }}
            to="/category/armaf"
            className=" hover:text-accent">ARMAF</Link>

            <hr className=" w-full text-white my-2" />
            <Link onClick={()=>{
              setCategory("brand")
              localStorage.setItem('category','brand')
              setBrand("armaf enchanted")
              localStorage.setItem('brand','armaf enchanted')
            }}
            to="/category/armaf enchanted" className=" hover:text-accent">ARMAF ENCHANTED</Link>

            <hr className=" w-full text-white my-2" />
            <Link onClick={()=>{
              setCategory("brand")
              localStorage.setItem('category','brand')
              setBrand("bioluxe")
              localStorage.setItem('brand','bioluxe')
            }}
            to="/category/bioluxe" className=" hover:text-accent">BIOLUXE</Link>

            <hr className=" w-full text-white my-2" />
            <Link onClick={()=>{
              setCategory("brand")
              localStorage.setItem('category','brand')
              setBrand("estiara")
              localStorage.setItem('brand','estiara')
            }}
            to="/category/estiara" className=" hover:text-accent">ESTIARA</Link>

            <hr className=" w-full text-white my-2" />
            <Link onClick={()=>{
              setCategory("brand")
              localStorage.setItem('category','brand')
              setBrand("flavia")
              localStorage.setItem('brand','flavia')
            }}
            to="/category/flavia" className=" hover:text-accent">FLAVIA</Link>

            <hr className=" w-full text-white my-2" />
            <Link onClick={()=>{
              setCategory("brand")
              localStorage.setItem('category','brand')
              setBrand("paris")
              localStorage.setItem('brand','paris')
            }}
            to="/category/paris" className=" hover:text-accent">PARIS</Link>

          </div>
        </div>

    );
};

export default BrandsGroup;