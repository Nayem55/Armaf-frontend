import banner2 from '../../Images/perfumeBanner2.jpg'
import banner1 from "../../Images/perfumeBanner.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, EffectFade, Navigation, Pagination} from "swiper";

import './Banner.css'
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";




const Banner = () => {
  return (
    <div className="h-[35vh] sm:h-[90vh]">
       <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={window.innerWidth < 640?false:true}
     
        autoplay={{
          delay: 10000 ,
          disableOnInteraction: false,
        }}
        pagination={window.innerWidth < 640 ? {dynamicBullets: true} : false }
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-full h-[30vh] sm:h-[90vh]" src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[30vh] sm:h-[90vh]" src={banner2} alt="" />
        </SwiperSlide>

      </Swiper>
      
    </div>
  );
};

export default Banner;
