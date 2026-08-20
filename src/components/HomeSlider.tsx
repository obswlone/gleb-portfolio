"use client";

import { Children } from "react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/home-slider.css";

export function HomeSlider({
  label,
  perView = 1,
  children,
}: {
  label: string;
  perView?: 1 | 3;
  children: React.ReactNode;
}) {
  const items = Children.toArray(children);

  if (items.length === 0) {
    return null;
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      spaceBetween={16}
      watchOverflow
      navigation
      pagination={{ clickable: true }}
      a11y={{ enabled: true }}
      breakpoints={
        perView === 3
          ? {
              640: { slidesPerView: 3 },
            }
          : undefined
      }
      aria-label={label}
      className="home-swiper w-full"
    >
      {items.map((child, i) => (
        <SwiperSlide key={i}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
