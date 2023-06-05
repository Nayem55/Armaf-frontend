import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

import Features from "../Components/Features";
import Header from "../Components/Header/Header";



const Main = () => {

  const {pathname} = useLocation() 

  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname])


  return (
    <div>
      <Header></Header>
      <Features></Features>      
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;