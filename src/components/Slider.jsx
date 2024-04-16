import slider1 from "../assets/banner/slider_1.jpg";
import slider2 from "../assets/banner/slider_2.jpg";
import slider3 from "../assets/banner/slider_3.jpg";
import slider4 from "../assets/banner/slider_4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <main>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <img className="w-full  h-[600px] bg-cover relative" src={slider1} alt="" />
          <div className="absolute z-10 top-2/4 right-[240px]">
          <p className="font-extrabold text-8xl text-[#d90429] font-jersey">Your Next Deal Starts Here.</p>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img className="w-full h-[600px]  bg-cover" src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img className="w-full h-[600px]  bg-cover" src={slider3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full  h-[600px] bg-cover" src={slider4} alt="" />
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default Slider;
