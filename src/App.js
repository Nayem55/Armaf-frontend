import "./App.css";
import { ThemeContext } from "./Contexts/ThemeContext";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import router from "./Routes/Routes";
import useProduct from "./Hooks/useProduct";
import { useEffect, useState } from "react";
import useCart from "./Hooks/useCart";
import useOrder from "./Hooks/useOrder";
import useScroll from "./Hooks/useScroll";
import useCustomer from "./Hooks/useCustomer";
import useShippingInfo from "./Hooks/useShippingInfo";

function App() {
  const [products, loading] = useProduct();
  const [category, setCategory] = useState("");
  const [productType, setProductType] = useState("");
  const [brand, setBrand] = useState("");
  const [cart, setCart] = useCart(products);
  const [searchText, setSearchText] = useState("");
  const [orderList, setOrderList] = useOrder();
  const [customerList] = useCustomer();
  const [scrollPosition] = useScroll();
  const [freeProduct, setFreeProduct] = useState([]);
  const [shippingInDhaka,,shippingOutDhaka] = useShippingInfo();

  useEffect(() => {
    const initialCategory = localStorage.getItem("category");
    const initialBrand = localStorage.getItem("brand");
    const initialProductType = localStorage.getItem("productType");
    setCategory(initialCategory);
    setBrand(initialBrand);
    setProductType(initialProductType);
  }, []);
  let categoryProducts = [];
  
    categoryProducts = products?.filter(
      (product) =>
        product?.categories[0].name
          .toLowerCase()
          .includes(category?.toLowerCase()) 
    );

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <ThemeContext.Provider
      value={{
        categoryProducts,
        setCategory,
        setBrand,
        setProductType,
        products,
        loading,
        cart,
        setCart,
        orderList,
        setOrderList,
        searchText,
        setSearchText,
        freeProduct,
        setFreeProduct,
        customerList,
        shippingInDhaka,
        shippingOutDhaka
      }}
    >
      <RouterProvider router={router}></RouterProvider>

      <svg
        title="Back To Top"
        className={`transition-all cursor-pointer w-10 h-10  duration-300 ease-in-out fixed bottom-20 right-20 ${
          scrollPosition > 1000
            ? "opacity-0 sm:opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => goToTop()}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        id="up-button"
      >
        <path d="M65.4 44.6c.8.8.8 2 0 2.8-.4.4-.9.6-1.4.6s-1-.2-1.4-.6L52 36.8V68c0 1.1-.9 2-2 2s-2-.9-2-2V36.8L37.4 47.4c-.4.4-.9.6-1.4.6s-1-.2-1.4-.6c-.8-.8-.8-2 0-2.8l14-14 .3-.3c.1 0 .1-.1.2-.1s.1-.1.2-.1.1 0 .2-.1h1c.1 0 .1 0 .2.1.1 0 .1 0 .2.1.1 0 .1.1.2.1 0 0 .1 0 .1.1l.3.3 13.9 13.9zM95 15v70c0 5.5-4.5 10-10 10H15C9.5 95 5 90.5 5 85V15C5 9.5 9.5 5 15 5h70c5.5 0 10 4.5 10 10zm-4 0c0-3.3-2.7-6-6-6H15c-3.3 0-6 2.7-6 6v70c0 3.3 2.7 6 6 6h70c3.3 0 6-2.7 6-6V15z"></path>
      </svg>

      <Toaster />
    </ThemeContext.Provider>
  );
}

export default App;
