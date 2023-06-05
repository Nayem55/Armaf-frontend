import React, { useContext, useState } from "react";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { addToDb } from "../../utilities/CartDb";
import { toast } from "react-hot-toast";

const Modal = ({ product, dialogueRef, handleBlurClose }) => {
  const { cart, setCart } = useContext(ThemeContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (item) => {
    let newCart = [];
    const exists = cart.find((product) => product?.id == item.id);
    if (!exists) {
      item.quantity = quantity;
      newCart = [...cart, item];
    } else {
      item.quantity = exists.quantity + quantity;
      const rest = cart.filter((product) => product?.id !== item.id);
      newCart = [...rest, item];
    }
    setCart(newCart);
    addToDb(item.id, quantity);

    toast.success("ADDED TO CART");
  };

  return (
    <dialog ref={dialogueRef} className={"dialogue"} >
      <div className="flex gap-6  relative items-center" >
        <FontAwesomeIcon
          className="absolute cursor-pointer top-[0px] right-[0px] text-4xl"
          icon={faXmark} onClick={handleBlurClose}
        ></FontAwesomeIcon>
        <div className="w-[50%]">
          <img className=" modal-img" src={product?.images[0]?.src} alt="" />
        </div>

        <div className="w-[50%] py-10 text-left">
          <p className="text-3xl my-3">{product?.name}</p>
          <div className="text-[#f3c621]">
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          </div>
          <p className="text-sm text-secondary text-opacity-70">
            {product?.categories[0].name?.toUpperCase()}
          </p>
          <p>Availablity : In Stock</p>
          <p>Product Type : {product?.productType?.toUpperCase()}</p>
          <p className="my-10 text-secondary text-opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, soluta? Vero, ullam? Autem, ea unde libero voluptatibus fugiat commodi suscipit quasi corrupti totam pariatur eum animi aliquam laboriosam in nisi!
          </p>
          <p className="text-accent text-3xl font-bold my-8">
            {" "}
            $ {product?.price}{" "}
          </p>
          <p>Quantity</p>
          <div className="flex items-center">
            <FontAwesomeIcon
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              className="text-secondary text-xs p-[6px] border border-secondary"
              icon={faMinus}
            ></FontAwesomeIcon>
            <input
              type="text"
              disabled
              Value={quantity}
              className="border-secondary border w-[90px] my-2 text-center"
            />
            <FontAwesomeIcon
              onClick={() => setQuantity(quantity + 1)}
              className="text-secondary bg-primary text-xs p-[6px] border border-secondary"
              icon={faPlus}
            ></FontAwesomeIcon>
          </div>
          <p className="my-2 font-bold">
            Subtotal: ${product?.price * quantity}
          </p>
          <button
            onClick={() => handleAddToCart(product)}
            className="btn bg-secondary hover:bg-secondary text-primary w-[60%] font-bold mb-2 rounded"
          >
            Add to cart
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
