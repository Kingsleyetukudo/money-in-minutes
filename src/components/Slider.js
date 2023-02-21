import pic from "../images/lady.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper";

export default function Slider() {
  SwiperCore.use([Autoplay]);
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        Autoplay={{ delay: 5000 }}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container">
        <SwiperSlide>
          <img src={pic} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic} alt="" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <i className=" material-icons">chevron_left</i>
          </div>
          <div className="swiper-button-next slider-arrow">
            <i className="material-icons">chevron_right</i>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
