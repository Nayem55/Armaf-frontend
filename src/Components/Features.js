import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faStar,
  faCartShopping,
  faBurst,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Features = () => {
  return (
    <div>
      <div className=" justify-center py-6 hidden sm:flex 2xl:w-[65%] md:w-[75%] mx-auto text-[12px] 2xl:text-[14px]">
        <p className="font-bold mr-12">
          <FontAwesomeIcon icon={faBurst}></FontAwesomeIcon> EXCLUSIVE IMPORTER{" "}
        </p>
        <p className="font-bold mr-12">
          <FontAwesomeIcon icon={faTruck}></FontAwesomeIcon> SHIPPING ACCROSS
          BANGLADESH{" "}
        </p>
        <p className="font-bold mr-12">
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> GENUINE PRODUCT
          GUARANTEE{" "}
        </p>
        <p className="font-bold mr-12">
          <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> FREE
          DELIVERY ABOVE 999 TK.{" "}
        </p>
      </div>
      
      <div className="block text-center flex items-center h-[50px] sm:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          navigation={false}
          pagination={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <p className="font-bold">
              <FontAwesomeIcon icon={faBurst}></FontAwesomeIcon> EXCLUSIVE
              IMPORTER{" "}
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="font-bold ">
              <FontAwesomeIcon icon={faTruck}></FontAwesomeIcon> SHIPPING
              ACCROSS BANGLADESH{" "}
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="font-bold ">
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> GENUINE PRODUCT
              GUARANTEE{" "}
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="font-bold ">
              <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> FREE
              DELIVERY ABOVE 999 TK.{" "}
            </p>
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  );
};

export default Features;
