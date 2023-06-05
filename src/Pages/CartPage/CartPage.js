import React, { useContext, useEffect, useRef, useState } from "react";
import "./CartPage.css";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CartProduct from "../../Components/CartProduct/CartProduct";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import CartModal from "../../Components/CartModal/CartModal";
import { ThreeDots } from "react-loader-spinner";

const CartPage = () => {
  const { cart } = useContext(ThemeContext);
  const [user] = useAuthState(auth);
  const {orderList} = useContext(ThemeContext)
  const [newCustomer,setNewCustomer] = useState(false);
  const cartModalRef=useRef();
  const {loading} = useContext(ThemeContext)
  const previousCustomer = orderList?.find(list=>list?.billing.email === user?.email)

  useEffect(() => {
    if(previousCustomer){
      setNewCustomer(false)
    }else{
      setNewCustomer(true)
    }
  },[previousCustomer])

  const handleModalOpen=() => {
    cartModalRef.current.showModal()
    // document.documentElement.style.overflowY='hidden'

  }

  const handleModalClose=()=>{
    cartModalRef.current.close()
    // document.documentElement.style.overflowY='visible'

  }


  let price = 0;
  let quantity = 0;

  cart?.forEach((product) => {
    quantity = quantity + product.quantity;
    price = price + product.price * product.quantity;
  });
  
  return (
    <div className="2xl:w-[65%] md:w-[75%] w-[90%] mx-auto mb-10">
      <div className="my-10">
        <p className="text-[12px] font-semibold">
          Home
          <FontAwesomeIcon
            className="mx-2"
            icon={faCaretRight}
          ></FontAwesomeIcon>
          Shopping Cart
        </p>
        <div className="flex flex-col sm:flex-row justify-between">
          <p className="text-xl my-4 font-bold">My Cart</p>
          {/* {newCustomer ? <p>Get <span className="text-2xl font-bold text-accent">10%</span> Discount On First Purchase</p>:""} */}
          <Link to="/" className="flex items-center">
            <p className="mr-2">Continue Shopping</p>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </Link>
        </div>
      </div>

      <div className="cart-container flex flex-col sm:flex-row gap-[40px]">
        <div className="w-[100%] sm:w-[70%]">
          <div className="flex mb-4 justify-between bg-secondary bg-opacity-10 px-10 py-4">
            <p className="w-[85%]">Products</p>
            <p className="w-[15%]">Quantity</p>
          </div>
          {loading?  <div className="flex justify-center items-center ">
          <ThreeDots
            height="90"
            width="90"
            radius="9"
            color="#cb9815"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>:
            cart?.map((product) => (
            <CartProduct product={product}></CartProduct>
          ))}
        </div>

        <div className="subtotal flex flex-col items-center w-[100%] sm:w-[30%]">
            <p className="block bg-secondary px-4 py-4 bg-opacity-10 w-full text-center">Subtotal</p>
            <div className="flex items-center gap-4">
            <p className="text-3xl my-6 text-accent font-bold">$
              {
                price
              }
            </p>
            </div>
            <hr className="h-[2px] bg-secondary bg-opacity-20 w-full" />
            <label htmlFor="comments" className="text-left w-full my-3 text-xs"> Additional Comments</label>
            <textarea name="comments" rows='4' cols="20"  className="border border-secondary w-full border-opacity-30" />
            {
              quantity<2 ? <Link to="/shipping" className="btn bg-secondary w-full mt-[15px] text-white hover:bg-secondary border-none rounded"> Proceed To Checkout </Link> :
              <button onClick={()=>
                {
                  handleModalOpen()

                
                }} className="btn bg-secondary w-full mt-[15px] text-white hover:bg-secondary border-none rounded">{quantity===2?"Choose One Free Product":"Choose Two Free Products"}</button>
            }
            
        </div> 
        <CartModal handleModalClose={handleModalClose} cartModalRef={cartModalRef}></CartModal>

      </div>
    </div>
  );
};

export default CartPage;
