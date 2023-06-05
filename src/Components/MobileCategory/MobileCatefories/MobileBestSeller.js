import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../../Contexts/ThemeContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const MobileBestSeller = () => {
    const [linkFiveHover, setLinkFiveHover] = useState(false);
    const { setCategory, setBrand } = useContext(ThemeContext);
    return (
        <div
          className={`mobile-perfume transition-all ease-in-out duration-300`}
        >
          <button
            to={`/category/Best Sellers`}
            onClick={() => {
              setLinkFiveHover(!linkFiveHover)
            }}
            className={`mr-10 w-[85%] text-start relative ${linkFiveHover?"text-accent":"text-secondary"} font-bold `}
          >
            BESTSELLERS
            <FontAwesomeIcon
              className=" w-3 absolute right-0"
              icon={faChevronDown}
            ></FontAwesomeIcon>
          </button>

          <div className={`mobile-menu-hover ${
            linkFiveHover ? "grid-transition text-start px-4 py-4 " : ""
          } text-black `}>

          <div>
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
        </div>
    );
};

export default MobileBestSeller;