import slide_1 from "../images/slide-1.jpg";
import slide_2 from "../images/slide-2.jpg";
import slide_3 from "../images/slide-3.jpg";
import slide_4 from "../images/slide-4.jpg";
import slide_5 from "../images/slide-5.jpg";
import slide_6 from "../images/slide-6.jpg";
import slide_7 from "../images/slide-7.jpg";
import slide_8 from "../images/slide-8.jpg";
import slide_9 from "../images/slide-9.jpg";
import slide_10 from "../images/slide-10.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <div className="container_swiper">
      <p className="text-xl font-normal">Who we are</p>
      <h1 className="heading">
        We're inspired to give people and businesses the perfect experience and
        support for their journey.
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container">
        <SwiperSlide>
          <img src={slide_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_8} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_9} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_10} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler mt-10">
          {/* <div className="swiper-button-prev slider-arrow">
            <i className="material-icons">chevron_left</i>
          </div> */}
          {/* <div className="swiper-button-next slider-arrow">
            <i className="material-icons">chevron_right</i>
          </div> */}
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
