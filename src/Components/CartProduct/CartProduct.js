import React, { useContext, useRef } from "react";
import "./CartProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { getStoredCart, removeFromDb } from "../../utilities/CartDb";

const CartProduct = ({ product }) => {
  const { cart, setCart } = useContext(ThemeContext);
  const quantityRef = useRef();

  const handleUpdate = (id) => {
    const storedCart = getStoredCart();
    const quantity = parseInt(quantityRef.current.innerText);

    if (storedCart[id]) {
      storedCart[id] = quantity;
    }

    //!setting Cart Data to UI
    setCart(
      cart.map((pd) => {
        if (pd.id === product.id) {
          pd.quantity = quantity;
          return pd;
        } else return pd;
      })
    );

    //?Setting Cart Data to Local Storage
    localStorage.setItem("shopping-cart", JSON.stringify(storedCart));
  };

  const handleDelete = (id) => {
    const rest = cart.filter((product) => product.id !== id);
    setCart(rest);
    removeFromDb(id);
    console.log(id);
  };

  return (
    <div className="flex items-center h-[200px]">
      <div className="flex w-[70%] sm:w-[80%]">
        <div className="cart-product-container">
          <div className="cart-img-container ">
            <img className="" src={product?.images[0].src} alt="" />
          </div>
          <div className="cart-product-details]">
            <p className="opacity-70">{product?.name}</p>
            <p>{product?.categories[0].name.toUpperCase()}</p>
            <p className="text-accent font-bold">${product?.price}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col  w-[30%] sm:w-[20%] gap-0 ">
        {/*--------------- Input Group  --------------*/}
        <div className="flex gap-6 items-center">
          <div className="w-[70%] relative">
            <span
              onClick={() =>
                (quantityRef.current.innerText =
                  parseInt(quantityRef.current.innerText) + 1)
              }
              className="cursor-pointer"
            >
              <FontAwesomeIcon
                className="upArrow text-secondary text-sm text-opacity-50"
                icon={faCaretUp}
              ></FontAwesomeIcon>
            </span>
            <div
              name="quantity"
              ref={quantityRef}
              className="px-2 pt-1 border w-full border-secondary quantity-input "
            >
              {product.quantity}
            </div>
            <span
              onClick={() => {
                if (parseInt(quantityRef.current.innerText) > 1) {
                  quantityRef.current.innerText =
                    parseInt(quantityRef.current.innerText) - 1;
                }
              }}
              className="cursor-pointer"
            >
              <FontAwesomeIcon
                className="downArrow text-sm text-secondary text-opacity-50"
                icon={faCaretDown}
              ></FontAwesomeIcon>
            </span>
          </div>

          <button
            onClick={() => {
              handleDelete(product.id);
              quantityRef.current.innerText = product.quantity;
            }}
          >
            <FontAwesomeIcon
              className="hover:text-accent"
              icon={faTrash}
            ></FontAwesomeIcon>
          </button>
        </div>
        <button
          onClick={() => {
            handleUpdate(product.id);
          }}
          className="text-xs flex justify-start hover:text-accent  font-bold mt-4"
        >
          Update Cart
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
