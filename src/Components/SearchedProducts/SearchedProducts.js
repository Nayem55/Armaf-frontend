import React, { useContext } from "react";
import "./SearchedProducts.css";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../Contexts/ThemeContext";

const SearchedProducts = ({ searchedProducts, highPriorityProducts, focus, handleSearch }) => {
  const navigate = useNavigate()
  const {setCategory} = useContext(ThemeContext)

  let searchedArray = [];

  if(highPriorityProducts.length>0){
    searchedArray = highPriorityProducts;
  }else{
    searchedArray = searchedProducts
  }


  return (
    <div className={`searchedProducts  ${focus?"block":"hidden"}`}>
      <p className="text-xs font-bold">POPULAR PRODUCTS</p>
      <hr className="my-2"/>
      <div className="searchedProduct cursor-pointer">
        {searchedArray.slice(0, 3)?.map((product) => (
          <div onClick={()=>{
            navigate(`/product/${product.id}`)
            window.innerWidth < 640 && handleSearch(false)
            }} className="flex flex-col items-center">
            <img src={product.images[0].src} alt="" />
            <div className="searchedProductDetails">
              <p title={product.name}>{product.name.length<40?product.name:product.name.slice(0,40)+"....."}</p>
              <p className="text-accent font-bold">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      {
        searchedProducts.length>1&&
        <div>
        <hr className="my-2" />
        <Link onClick={()=>{
          setCategory('searchProduct')
          localStorage.setItem('category','searchProduct')
        }} to='/category/search results'>
          <p onClick={()=>window.innerWidth < 640 && handleSearch(false)} className="text-center text-secondary text-opacity-50 mt-2 text-xs font-bold hover:text-accent pointer">
            SEE ALL RESULTS ( {searchedProducts.length} )
          </p>
        </Link>
      </div>
      }
      
    </div>
  );
};

export default SearchedProducts;
