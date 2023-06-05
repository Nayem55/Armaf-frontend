import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket, faSquarePhoneFlip, faTableColumns, faUser } from "@fortawesome/free-solid-svg-icons";
import useScroll from "../../../Hooks/useScroll";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import { ThemeContext } from "../../../Contexts/ThemeContext";
import SearchedProducts from "../../../Components/SearchedProducts/SearchedProducts";
import Cart from "../../../Components/Cart/Cart";

const Navbar = ({ popCart,handlePopCart }) => {
  const [user] = useAuthState(auth);
  const { products } = useContext(ThemeContext);
  const [focus,setFocus] = useState(false)
  const {searchText,setSearchText} = useContext(ThemeContext);
  const {setCategory} = useContext(ThemeContext);




  let highPriorityProducts = [];
  let searchedProducts = [];


  if (searchText.length > 2) {
     searchedProducts = products?.filter((product) =>
      product.name.toLowerCase().includes(searchText?.toLowerCase())
    );
     highPriorityProducts = searchedProducts?.filter(
      (product) => product?.tags[0]?.name?.toLowerCase() === "high priority"
    );
  }

  return (
    <div className="w-full hidden sm:block z-10">
      <div className="flex justify-end px-10 pt-2">
        <p className="font-bold mr-16">
          <FontAwesomeIcon
            icon={faSquarePhoneFlip}
            className="mr-2"
          ></FontAwesomeIcon>
          Call Us on 90764 05205
        </p>
        <p className="font-bold flex">
          <FontAwesomeIcon
            icon={faUser}
            className="mr-2 mt-[2px]"
          ></FontAwesomeIcon>
          {user ? (
            <Link
              className="hover:text-accent"
              to="/login"
              onClick={() => signOut(auth)}
            >
              Log Out
            </Link>
          ) : (
            <div className="flex gap-2">
              <Link to="login" className="hover:text-accent">
                Sign in
              </Link>
              or
              <Link to="signup" className="hover:text-accent">
                Create an account
              </Link>
            </div>
          )}
        </p>
      </div>
      <div className="navbar px-0 lg:px-10 flex justify-between bg-white">
        {/* logo */}
        <div className="cursor-pointer">
          <Link to="/">
            <img src={logo} className="w-full h-[60px]" alt="" />
          </Link>
        </div>
        {/*.......... search bar............. */}
        <div className="form-control text-black 2xl:w-[30%] md:w-[40%] relative">
          <div className="input-group">
            <input
              type="text"
              className="border border-black w-[100%] px-4"
              placeholder="Search for a product..."
              onFocus={()=>setFocus(true)}
              onBlur={()=>{
                setTimeout(()=>setFocus(false),200)
              }}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Link onClick={() => {
                setCategory("searchProduct");
                localStorage.setItem("category", "searchProduct");
              }}
              to="/category/search results" className="btn btn-square bg-secondary hover:bg-accent border border-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Link>
          </div>

          {/*......... Search result............ */}
          <div>
            <SearchedProducts
              highPriorityProducts={highPriorityProducts}
              searchedProducts={searchedProducts}
              focus={focus}
            />
          </div>
        </div>
              <Cart popCart={popCart} handlePopCart={handlePopCart}></Cart>
      </div>
    </div>
  );
};

export default Navbar;
