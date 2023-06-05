import { ThemeContext } from "../../Contexts/ThemeContext";
import useScroll from "../../Hooks/useScroll";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const BestSeller = () => {
    const [linkFiveHover, setLinkFiveHover] = useState(false);
    const [scrollPosition] = useScroll();
    const { setCategory, setBrand } = useContext(ThemeContext);
  
    return (

        <div
          onMouseEnter={() => setLinkFiveHover(true)}
          onMouseLeave={() => setLinkFiveHover(false)}
          className={`dropdown h-full ${
            scrollPosition > 80 ? "dropdown-scrolled" : ""
          }`}
        >
          <Link
            to={`/category/Best Sellers`}
            onClick={() => {
              setCategory("bestsellerAll");
              localStorage.setItem("category", "bestsellerAll");
            }}
            className="mr-10 hover:text-accent font-bold "
          >
            BESTSELLERS
            <FontAwesomeIcon
              className="w-3 ms-2"
              icon={faChevronDown}
            ></FontAwesomeIcon>
          </Link>
          <div
            className={`menu-hover ${
              linkFiveHover ? "block  text-start" : "hidden relative"
            } ${
              scrollPosition > 80 ? "menu-scrolled" : ""
            } px-4  pb-4 w-[200px] text-black `}
          >
            <hr className=" w-full text-white mb-2" />
            <Link onClick={()=>{
              setCategory('bestseller')
              localStorage.setItem('category','bestseller')
              setBrand('perfume')
              localStorage.setItem('brand','perfume')
            }} 
            to='/category/top 10 perfume'
            className=" hover:text-accent">PERFUME</Link>

            <hr className=" w-full text-white my-2" />
            <Link  onClick={()=>{
              setCategory("bestseller")
              localStorage.setItem('category','bestseller')
              setBrand("mist")
              localStorage.setItem('brand','mist')
            }}  to='/category/top 10 mist' className=" hover:text-accent">MIST</Link>
            
            <hr className=" w-full text-white my-2" />
            <Link  onClick={()=>{
              setCategory("bestseller")
              localStorage.setItem('category','bestseller')
              setBrand("deodorant")
              localStorage.setItem('brand','deodorant')
            }} 
            to='/category/top 10 deodorant'
            className=" hover:text-accent">DEO</Link>
          </div>
        </div>
    );
};

export default BestSeller;