import React, { useContext, useEffect } from 'react';
import './MobileCategory.css'
import { Link, useLocation } from 'react-router-dom';
import MobilePerfume from './MobileCatefories/MobilePerfume';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import MobileDeo from './MobileCatefories/MobileDeo';
import MobileBodyBath from './MobileCatefories/MobileBodyBath';
import MobileBrands from './MobileCatefories/MobileBrands';
import MobileBestSeller from './MobileCatefories/MobileBestSeller';
import { ThemeContext } from '../../Contexts/ThemeContext';

const MobileCategory = ({menu,handleMenu}) => {
  const { setCategory } = useContext(ThemeContext);
  const location = useLocation();

  useEffect(()=>{
    handleMenu(false)
  },[location.pathname])



    return (
        <div className={`mobile-category-container ${menu ? '': 'mobile-category-container-left'}`}>
        {/*------------------------------------- All Navigation Category  ------------------------------------*/}

        <FontAwesomeIcon icon={faXmark} onClick={()=>handleMenu(false)} className={` block ml-auto w-[24px] h-[24px] m-4 text-accent`}/>
        <div className="mobile-category">

        <MobilePerfume/>
        <br />

          {/*------------------ Mist Category  ----------------*/}
          <Link
            className="hover:text-accent block font-bold"
            to={`/category/Body Mist`}
            onClick={() => {
              setCategory("mist");
              localStorage.setItem("category", "mist");
            }}
          >
            BODY MIST
          </Link>
          <br />

          <MobileDeo/>
          <br />
          <MobileBodyBath/>
          <br />
          <MobileBrands/>
          <br />
          <MobileBestSeller/>
          <br />


          {/*----------------- Gift Set  --------------------*/}
          <Link
            className="mr-10 block hover:text-accent font-bold"
            to={`/category/Gift Set`}
            onClick={() => {
              setCategory("gift set");
              localStorage.setItem("category", "gift set");
            }}
          >
            GIFT SET
          </Link>
          <br />

          {/*-------------- Online Exclusive  ----------------*/}
          <Link
            to={`/category/Online Exclusive`}
            onClick={() => {
              setCategory("online exclusive");
              localStorage.setItem("category", "online exclusive");
            }}
            className="hover:text-accent block  font-bold"
          >
            ONLINE EXCLUSIVE
          </Link>
        </div>
      </div>
    );
};

export default MobileCategory;