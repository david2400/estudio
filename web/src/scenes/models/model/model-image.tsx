/** @format */

import Image from "next/image";
import { useCallback, useState } from "react";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export type ProductImageProps = {
  images: Array<any>;
  className?: string;
};

export function ImageModel({ images, className }: ProductImageProps) {
  return (
    <Swiper
      pagination={{
        type: "progressbar",
      }}
      modules={[Navigation, Pagination]}
      navigation={true}
      slidesPerView={1}>
      {images.map((image) => (
        <SwiperSlide>
          <img src={image}></img>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
