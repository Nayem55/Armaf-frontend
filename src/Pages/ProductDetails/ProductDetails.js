import React, { useContext, useState } from "react";
import "./ProductDetails.css";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";
import { addToDb } from "../../utilities/CartDb";

const ProductDetails = () => {
  const { products } = useContext(ThemeContext);
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { cart, setCart } = useContext(ThemeContext);

  const product = products?.find((product) => product.id == id);

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

  const handlePurchase = (item) => {
    let newCart = [];
    item.quantity = quantity;
    newCart = [item];
    let shoppingCart = {};
    shoppingCart[id] = quantity;

    setCart(newCart);
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  };

  return (
    <div className="flex flex-col sm:flex-row 2xl:w-[65%] md:w-[75%] mx-auto">
      <div className=" flex items-center w-[100%] sm:w-[100%] overflow-hidden">
        <img className="h-full details-img pr-10" src={product?.images[0].src} alt="" />
      </div>

      <div className="w-[100%] mx-auto px-10 sm:px-0 py-10">
        <p className="text-3xl my-3">{product?.name}</p>
        <div className="text-[#f3c621]">
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        </div>
        <p className="text-sm text-secondary text-opacity-70">
          {product?.brand?.toUpperCase()}
        </p>
        <p>Availablity : In Stock</p>
        <p>Product Type : {product?.productType?.toUpperCase()}</p>
        <p className="my-10 text-secondary text-opacity-70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          eius dignissimos maiores necessitatibus? Reprehenderit, minima
          deserunt. Distinctio, sequi aliquam cumque ab placeat explicabo,
          delectus est, soluta unde mollitia impedit totam.
        </p>
        <p className="text-accent text-3xl font-bold my-8">
          {" "}
          $ {product?.price}{" "}
        </p>
        <p>Quantity</p>
        <div className="flex items-center">
          <FontAwesomeIcon
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            className="text-secondary cursor-pointer text-xs p-[6px] border border-secondary"
            icon={faMinus}
          ></FontAwesomeIcon>
          <input
            type="text"
            Value={quantity}
            className="border-secondary border w-[90px] my-2 text-center"
          />
          <FontAwesomeIcon
            onClick={() => setQuantity(quantity + 1)}
            className="text-secondary bg-primary cursor-pointer text-xs p-[6px] border border-secondary"
            icon={faPlus}
          ></FontAwesomeIcon>
        </div>
        <p className="my-2 font-bold">Subtotal: ${product?.price * quantity}</p>
        <button
          onClick={() => handleAddToCart(product)}
          className="btn bg-secondary hover:bg-secondary text-primary w-[60%] font-bold mb-2 rounded"
        >
          Add to cart
        </button>
        <Link
          to={quantity < 2 ? "/shipping" : "/cart"}
          onClick={() => handlePurchase(product)}
          className="btn bg-primary hover:text-primary hover:bg-secondary text-secondary w-[60%] font-bold rounded"
        >
          Buy it now
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
