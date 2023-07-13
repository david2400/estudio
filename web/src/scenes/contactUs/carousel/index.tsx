/** @format */

import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export function CarouselContactUs() {
  return (
    <div className="w-full hidden lg:block">
      <Swiper
        spaceBetween={30}
        pagination={{
          type: 'progressbar',
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img className="w-full h-96"></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
