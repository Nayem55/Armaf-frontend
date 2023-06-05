import "./PopCart.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import useScroll from "../../Hooks/useScroll";
import { removeFromDb } from "../../utilities/CartDb";

const PopCart = ({ popCart, handlePopCart }) => {
  const { cart, setCart } = useContext(ThemeContext);
  const [scrollPosition] = useScroll();

  let price = 0;
  let quantity = 0;

  cart?.forEach((product) => {
    quantity = quantity + product.quantity;
    price = price + product.price * product.quantity;
  });

  const handleDelete = (id) => {
    const rest = cart.filter((product) => product.id !== id);
    setCart(rest);
    removeFromDb(id);
  };

  return (
    <div
      className={`pop-cart-container  lg:w-[30%] 2xl:w-[22%] ${
        popCart ? "right-20 " : "right-1000 top-900"
      } ${scrollPosition > 80 ? "  sm:top-[66px]" : "sm:top-[160px]"}`}
    >
      <div
        className="close-button absolute right-4 top-4"
        onClick={() => handlePopCart(false)}
      >
        <FontAwesomeIcon icon={faXmark} className="inline mr-2 text-md " />
        <p className="inline text-md">Close</p>
      </div>
      <h2 className={"mt-10 ml-4 pb-4 my-cart sm:hidden"}>MY CART:</h2>
      <div className="pop-cart-products pr-4 max-h-[550px] overflow-y-scroll">
        {cart?.map((product) => (
          <div
            key={product.id}
            className="pop-product mb-4 gap-4 flex h-[30%] items-center"
          >
            <div className="pop-img w-[20%] h-[70px]">
              <img
                src={product.images[0].src}
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="pop-details 2xl:w-[65%] md:w-[75%] mr-2">
              <h3 className="">{product.name}</h3>
              <p>
                ${product.price}X{product.quantity}
              </p>
            </div>
            <FontAwesomeIcon
              className="text-secondary hover:text-accent cursor-pointer"
              onClick={() => {
                handleDelete(product.id);
              }}
              icon={faTrash}
            ></FontAwesomeIcon>
          </div>
        ))}
      </div>

      <div className="hidden sm:block">
        <div className=" flex justify-between py-4 mobile-price">
          <p>Total:</p>
          <p>${price}</p>
        </div>
        <Link
          className="view-cart hidden"
          to={"/cart"}
          onClick={() => handlePopCart(false)}
        >
          VIEW CART
        </Link>
      </div>

      <div className=" sm:hidden w-full bottom-20 px-2 py-2  pr-4">
        <div className="w-full flex justify-between mb-4">
          <p>Total:</p>
          <p>${price}</p>
        </div>
        <Link
          className="view-cart"
          to={"/cart"}
          onClick={() => handlePopCart(false)}
        >
          OR VIEW CART
        </Link>
      </div>
    </div>
  );
};

export default PopCart;
