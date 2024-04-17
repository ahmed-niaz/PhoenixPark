import slider1 from "../assets/banner/slider_1.jpg";
import slider2 from "../assets/banner/slider_2.jpg";
import support from "../assets/banner/support.jpeg";
import slider4 from "../assets/banner/slider_4.jpg";
import location from "../assets/banner/location.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Pagination } from "swiper/modules";
import "animate.css";
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
          <img
            className="w-full z-0 h-[600px] bg-cover relative rounded-xl"
            src={slider4}
            alt=""
          />
          <div className="absolute  top-2/4 right-[240px]">
            <p className="font-extrabold text-8xl text-[#d90429] font-jersey animate__animated animate__backInDown">
              Your Next Deal Starts Here.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="w-full h-[600px]  bg-cover relative rounded-xl"
            src={slider2}
            alt=""
          />
          <div className="absolute top-0">
            <div className="py-32 mx-32 flex justify-between gap-64">
              <div className="flex items-start flex-col justify-center space-y-4">
                <h2 className="font-bold text-4xl">Customer Support</h2>
                <p className="font-bold ">
                  Our Team is Always Available to Help
                </p>
                <button className="btn glass bg-[#d90429] text-white  hover:text-[#d90429] border-none">
                  Contact Now
                </button>
              </div>
              <div>
                <img className="w-[600px] rounded-lg" src={support} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="w-full h-[600px]  bg-cover relative rounded-xl"
            src={slider1}
            alt=""
          />
          <div className="absolute top-0">
            <div className="py-32 mx-32 flex justify-between gap-64">
              <div className="flex items-start flex-col justify-center space-y-4">
                <h2 className="font-extrabold text-6xl text-[#d90429]">
                  Find us
                </h2>
                <p className="font-bold text-[#d90429]">
                  Access all the information and close the right deal
                </p>
                <button className="btn glass bg-[#d90429] text-white  hover:text-[#d90429] border-none">
                  Find Out More
                </button>
              </div>
              <div>
                <img className="w-[600px] rounded-lg" src={location} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default Slider;
