import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import prod from "../assets/Component 32.png";

export default function ProductSlider() {
  return (
    <div className="container">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        slidesPerView={3}
        spaceBetween={-30}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={prod}
            alt=""
            style={{ width: "100", height: "135", marginRight: "0px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={prod}
            alt=""
            style={{ width: "100", height: "135", marginRight: "10px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={prod}
            alt=""
            style={{ width: "100", height: "135", marginRight: "10px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={prod}
            alt=""
            style={{ width: "100", height: "135", marginRight: "10px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={prod}
            alt=""
            style={{ width: "100", height: "135", marginRight: "10px" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
