 import React, { useContext } from "react";
import "./CartModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../Contexts/ThemeContext";
import CartModalProduct from "../CartModalProduct";
import { Link } from "react-router-dom";

const CartModal = ({ handleModalClose, cartModalRef }) => {
  const { cart, setCart } = useContext(ThemeContext);
  const { products } = useContext(ThemeContext);
  const { freeProduct, setFreeProduct } = useContext(ThemeContext);

  let minPrice = parseInt(cart[0]?.price);

  cart?.forEach((product) => {
    if (minPrice >= parseInt(product?.price)) {
      minPrice = parseInt(product?.price);
    }
  });

  const freeProductList = products?.filter(
    (product) => product.price <= minPrice
  );

  let quantity = 0;

  cart?.forEach((product) => {
    quantity = quantity + product.quantity;
  });

  return (
    <dialog ref={cartModalRef} className="cart-dialogue relative lg:w-[50%] 2xl:w-[40%]">
      <div className="sticky top-0 py-4 w-full flex justify-between bg-primary z-[90000]">
        
      <p className="text-center font-bold my-2 ">Choose Free Products ({freeProduct.length}/{quantity===2?1:2})</p>
        <FontAwesomeIcon
          className=" cursor-pointer text-4xl"
          icon={faXmark}
          onClick={handleModalClose}
          ></FontAwesomeIcon>
        </div>
      
        <div className="pt-10 w-full">
          {freeProductList?.map((product, i) => (
            <CartModalProduct
              key={i}
              index={i}
              product={product}
              quantity={quantity}
            ></CartModalProduct>
          ))}
        </div>
    

      <div className={`sticky bottom-0 bg-primary py-3 `}>

      <Link
        to="/shipping"
        onClick={handleModalClose}
        className="btn bg-secondary w-[80%] lg:w-[30%] mx-auto flex justify-center mt-[15px] text-white hover:bg-secondary border-none rounded"
        >
        Proceed Checkout
      </Link>
        </div>
    </dialog>
  );
};

export default CartModal;
