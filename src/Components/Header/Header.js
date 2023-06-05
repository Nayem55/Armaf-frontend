import  {useState } from "react";
import Category from "../Category/Category";
import Navbar from '../../Pages/Shared/Navbar/Navbar'

const Header = () => {
      const [popCart, setPopCart] = useState(false);
     const handlePopCart=(boolean) => {
      setPopCart(boolean);
      }
    return (
        <>
                  
      <Navbar popCart={popCart}  handlePopCart={handlePopCart}></Navbar>
      <Category handlePopCart={handlePopCart} popCart={popCart}></Category>
        </>
    );
};

export default Header;