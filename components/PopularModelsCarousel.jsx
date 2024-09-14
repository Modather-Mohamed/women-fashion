"use client";

import Style from "./Style";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper style
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

const PopularModelsCarousel = ({ popularProducts }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        960: { slidesPerView: 3 },
        1440: { slidesPerView: 4 },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className=" popular-women-style mb-8"
    >
      {popularProducts.map((item) => {
        return (
          <SwiperSlide key={item._id}>
            <Style item={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PopularModelsCarousel;
