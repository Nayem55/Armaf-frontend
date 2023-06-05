import React, { useContext } from 'react';
import {  useLocation } from "react-router-dom";
import useScroll from '../../Hooks/useScroll';
import { ThemeContext } from '../../Contexts/ThemeContext';
import "./Cart.css"


const Cart = ({handlePopCart,popCart,handleSearch}) => {
    const location = useLocation();
    const [scrollPosition] = useScroll();

    const { cart } = useContext(ThemeContext);
    
  let quantity = 0;
  cart?.forEach((product) => {
    quantity = quantity + product?.quantity;
  });

    return (
        <div className="flex-none">

        {/*----------------- Navbar Cart -----------------*/}
        <div
          className={` cart-icon mobile-cart-position ${
            scrollPosition > 10 ? " cart-scrolled-50" : "cart-not-scrolled"
          } ${
            scrollPosition > 80 ? "cart-scrolled-80" : "cart-scrolled-50"
          } `}
        >
          <div className="indicator">
            {/*-------------- cart icon -------------*/}

            {location.pathname.includes("/cart") || (
              <div>
                <svg
                  onClick={()=>{
                    handlePopCart(!popCart)
                    if(window.innerWidth<640)
                    handleSearch(false)
                  }
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition ease-in duration-200 ${
                    scrollPosition > 80
                      ? "text-primary h-6 w-6 cursor-pointer"
                      : "h-6 w-6 sm:h-7 sm:w-7 text-primary sm:text-secondary cursor-pointer"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>

                <span
                  className={`badge  bg-accent text-primary font-bold border-none ${
                    scrollPosition > 80
                      ? "sm:badge-sm text-xs sm:pt-1 pb-1 sm:pb-0"
                    : "sm:badge-md sm:text-md sm:pt-1 pb-1 sm:pb-0"
                  } badge-sm text-xs pt-1 indicator-item`}
                >
                  {quantity}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default Cart;