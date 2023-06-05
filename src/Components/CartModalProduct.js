import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

const CartModalProduct = ({ product, index, quantity }) => {
  const { freeProduct, setFreeProduct } = useContext(ThemeContext);
  const { products } = useContext(ThemeContext);
  const [checked, setChcecked] = useState(false);

  useEffect(()=>{
    localStorage.setItem("freeProducts",JSON.stringify(freeProduct))
  },[freeProduct])

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      const newProduct = products.find((product) => product?.id == value);
      newProduct.price = 0;
      newProduct.quantity = 1;
      setFreeProduct([...freeProduct, newProduct]);
    } else {
      const rest = freeProduct.filter((product) => product?.id != value);
      setFreeProduct(rest);
    }
  };


  return (
    <div
      className={`${
        freeProduct.length >= (quantity === 2 ? 1 : 2) && !checked
          ? "pointer-events-none"
          : ""
      } `}
    >
      <div className="cartModalProductContainer flex items-center">
        <span className={`cart-overlay ${freeProduct.length >= (quantity === 2 ? 1 : 2) && !checked} ?"opacity-1":"" `}> </span>

        <input
          onChange={handleChange}
          id={`check-${index}`}
          value={product?.id}
          type="checkbox"
          onClick={() => setChcecked(!checked)}
          className="cursor-pointer"
        />

        <label htmlFor={`check-${index}`} className="cartModalProduct">
          <img src={product?.images[0]?.src} alt="" />
          <div className="cartModalProductDetails">
            <p>{product.name}</p>
            <p>
              Price : <span className="text-[#339933]">Free</span>
            </p>
          </div>
        </label>
      </div>
    </div>
  );
};

export default CartModalProduct;
