import { Link } from "react-router-dom";

import useScroll from "../../Hooks/useScroll";
import logo from "../../Images/logo2.png";

import PerfumeGroup from "../NavCategories/PerfumeGroup";
import DeoGroup from "../NavCategories/DeoGroup";
import BathGroup from "../NavCategories/BathGroup";
import BrandsGroup from "../NavCategories/BrandsGroup";
import BestSeller from "../NavCategories/BestSeller";
import PopCart from "../PopCart/PopCart";

const LargeCategory = ({setProductType,setBrand,popCart,handlePopCart,setCategory}) => {
  
  const [scrollPosition] = useScroll();

  return (
   
      <div
        className={`nav-menu relative hidden sm:flex transition-all ease-in-out duration-300 text-center  text-white  ${
          scrollPosition > 80 ? "nav-menu-scrolled" : "p-0"
        }`}
      >
        <PopCart handlePopCart={handlePopCart} popCart={popCart}></PopCart>

        {/*----------- Nav Scrolled Logo  -----------------*/}

        {scrollPosition > 80 ? (
          <Link>
            <img className="ms-10 short-logo" src={logo} alt="" />
          </Link>
        ) : (
          ""
        )}

        {/*------------------------------------- All Navigation Category  ------------------------------------*/}

        <div className="all-menu">
          <PerfumeGroup />

          {/*------------------ Mist Category  ----------------*/}
          <Link
            className="mr-10 hover:text-accent font-bold"
            to={`/category/Body Mist`}
            onClick={() => {
              setCategory("BODY SPRAY");
              localStorage.setItem("category", "BODY SPRAY");
            }}
          >
            BODY MIST
          </Link>

          <DeoGroup />

          {/*----------------- Gift Set  --------------------*/}
          <Link
            className="mr-10 hover:text-accent font-bold"
            to={`/category/Gift Set`}
            onClick={() => {
              setCategory("gift set");
              localStorage.setItem("category", "gift set");
            }}
          >
            GIFT SET
          </Link>
        </div>
      </div>
    
  );
};

export default LargeCategory;
