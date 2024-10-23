import React from "react";
import video1 from "../src/img/haircutImages/2024-09-15_3457615361206128524.mp4";
import video2 from "../src/img/haircutImages/2024-08-13_3433807094822880278.mp4";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import {
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

export const VideoComponent = () => {
  const videos = [video1, video2];

  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-12 flex">
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <div>
          {videos.map((videoSrc, index) => (
            <SwiperSlide key={index}>
              <div>
                <video
                  className="h-[36rem] w-full mb-4 rounded-lg"
                  autoPlay
                  muted
                  controls={false}
                  loop
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};
