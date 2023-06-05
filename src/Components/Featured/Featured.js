import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import "./Featured.css";
import { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { Link } from "react-router-dom";

const Featured = () => {
  const {setCategory , setBrand} = useContext(ThemeContext)
  return (
    <div className="featured">
 
        <Link>
          <img
            className=""
            src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/Armaf-Category-Banner-2_1_1024x1024_crop_center.jpg?v=1664175316"
            alt=""
          />
        </Link>

        <Link>
          <img
            className=""
            src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/Armaf-Category-Banner-1_1024x1024_crop_center.jpg?v=1664175317"
            alt=""
          />
        </Link>

        <Link>

          <img
            className="w-[400px]"
            src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/Armaf-Category-Banner-3_1_1024x1024_crop_center.jpg?v=1664175316"
            alt=""
          />

        </Link>

        <Link>
          <img
            className="w-[400px]"
            src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/Armaf-Category-Banner-4_1_1024x1024_crop_center.jpg?v=1664175316"
            alt=""
          />

        </Link>
         
    </div>
  );
};

export default Featured;
