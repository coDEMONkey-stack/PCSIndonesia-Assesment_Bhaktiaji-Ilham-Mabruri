"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const newsData = [
  {
    id: 1,
    name: "Ana Riswati",
    date: "Senin, 30 Mei 2022",
    messages: [
      "Kalimat 1 - Lorem ipsum dolor sit amet consec",
      "Kalimat 2 - Lorem ipsum dolor sit amet consec",
      "Kalimat 3 - Lorem ipsum dolor sit amet consec",
      "Kalimat 4 - Lorem ipsum dolor sit amet consec",
    ],
  },
  {
    id: 2,
    name: "John Doe",
    date: "Selasa, 31 Mei 2022",
    messages: [
      "Kalimat 1 - Lorem ipsum dolor sit amet consec",
      "Kalimat 2 - Lorem ipsum dolor sit amet consec",
      "Kalimat 3 - Lorem ipsum dolor sit amet consec",
      "Kalimat 4 - Lorem ipsum dolor sit amet consec",
    ],
  },
  {
    id: 3,
    name: "Bhaktiaji Ilham",
    date: "Selasa, 1 Juni 2022",
    messages: [
      "Kalimat 1 - Lorem ipsum dolor sit amet consec",
      "Kalimat 2 - Lorem ipsum dolor sit amet consec",
      "Kalimat 3 - Lorem ipsum dolor sit amet consec",
      "Kalimat 4 - Lorem ipsum dolor sit amet consec",
    ],
  },
];

const PCSNewsCarousel = () => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold">PCS News</h3>
      <Swiper
       effect={'coverflow'}
       grabCursor={true}
       centeredSlides={true}
       slidesPerView={'1.3'}
       coverflowEffect={{
         rotate: 50,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows: true,
       }}
       pagination={{ clickable: true, dynamicBullets: true}}
       modules={[EffectCoverflow, Pagination]}
       className="h-[241px] overflow-visible"
      >
        {newsData.map((news) => (
           <SwiperSlide key={news.id}>
            <div className="relative bg-white shadow-lg rounded-lg p-4 h-[208.12px]">
              <div className="flex items-center space-x-3 pl-2">
                <div className="w-10 h-10 bg-red-500 rounded-full"></div>
                <h4 className="font-bold text-red-600">{news.name}</h4>
              </div>

              <p className="absolute top-4 right-9 text-right text-xs text-gray-500">
                {news.date.split(",")[0]} <br /> {news.date.split(",")[1]}
              </p>

              <div className="mt-1 px-2 tracking-wide">
                {news.messages.map((msg, index) => (
                  <p key={index} className="text-gray-600 text-sm">
                    {msg}
                  </p>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 14px;
          height: 14px;
          background: red;
        }
        .swiper-pagination-bullet-active {
          background: darkred;
          transform: scale(1.3);
        }
         .swiper-pagination {
          bottom: -25px !important;
        }
      `}</style>
    </div>
  );
};

export default PCSNewsCarousel;
