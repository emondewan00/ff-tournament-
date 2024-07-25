"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          type: "bullets",
        }}
        navigation={true}
        modules={[Pagination]}
        className="mb-4"
      >
        <SwiperSlide>
          <img
            src="https://placehold.co/400x200"
            alt="Game Banner"
            className="w-full rounded-lg "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://placehold.co/400x200"
            alt="Game Banner"
            className="w-full rounded-lg "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://placehold.co/400x200"
            alt="Game Banner"
            className="w-full rounded-lg "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://placehold.co/400x200"
            alt="Game Banner"
            className="w-full rounded-lg "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://placehold.co/400x200"
            alt="Game Banner"
            className="w-full rounded-lg "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://placehold.co/400x200"
            alt="Game Banner"
            className="w-full rounded-lg "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://placehold.co/400x200"
            alt="Game Banner"
            className="w-full rounded-lg "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://placehold.co/400x200"
            alt="Game Banner"
            className="w-full rounded-lg "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://placehold.co/400x200"
            alt="Game Banner"
            className="w-full rounded-lg "
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
