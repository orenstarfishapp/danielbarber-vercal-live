import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../img/haircutImages/2021-11-22_2712658976930319807.jpg";
import image2 from "../img/haircutImages/2021-11-22_2712658976947126088.jpg";
import image3 from "../img/haircutImages/2021-11-22_2712658976955596741.jpg";
import image4 from "../img/haircutImages/2021-11-23_2713366256835391228.jpg";
import image5 from "../img/haircutImages/2021-11-23_2713366256852224394.jpg";
import image6 from "../img/haircutImages/2021-12-16_2730020911959088755.jpg";
import image7 from "../img/haircutImages/2021-12-16_2730020911967519278.jpg";
import image8 from "../img/haircutImages/2021-12-20_2732960820990712997.jpg";
import image9 from "../img/haircutImages/2021-12-20_2732960821007463885.jpg";
import image10 from "../img/haircutImages/2021-12-22_2734380927868567864.jpg";
import image11 from "../img/haircutImages/2021-12-22_2734381495467029231.jpg";
import image12 from "../img/haircutImages/2021-12-23_2734913661644875987.jpg";
import image13 from "../img/haircutImages/2021-12-23_2734913661653302227.jpg";
import image14 from "../img/haircutImages/2021-12-28_2738528386626670150.jpg";
import image15 from "../img/haircutImages/2021-12-28_2738528386643539407.jpg";
import image16 from "../img/haircutImages/2022-01-02_2742382459985658918.jpg";
import image17 from "../img/haircutImages/2022-01-02_2742382460002409364.jpg";
import image18 from "../img/haircutImages/2022-01-02_2742498518013061329.jpg";
import image19 from "../img/haircutImages/2022-01-02_2742498518029956088.jpg";
import image20 from "../img/haircutImages/2022-01-02_2742498518164301738.jpg";
import image21 from "../img/haircutImages/2022-01-03_2743205808731276953.jpg";
import image22 from "../img/haircutImages/2022-01-03_2743205808739672120.jpg";
import image23 from "../img/haircutImages/2022-01-17_2753317795737711621.jpg";
import image24 from "../img/haircutImages/2022-01-17_2753317795754587178.jpg";
import image25 from "../img/haircutImages/2022-01-17_2753317795771313534.jpg";
import image26 from "../img/haircutImages/2022-01-18_2753912186605057737.jpg";
import image27 from "../img/haircutImages/2022-01-18_2753912186772723302.jpg";
import image28 from "../img/haircutImages/2022-01-25_2759096650620494396.jpg";
import image29 from "../img/haircutImages/2022-02-03_2765579583131740697.jpg";
import image30 from "../img/haircutImages/2022-02-03_2765579583148380672.jpg";
import image31 from "../img/haircutImages/2022-02-15_2774237440896339289.jpg";
import image32 from "../img/haircutImages/2022-06-27_2869888173157343211.jpg";
import image33 from "../img/haircutImages/2022-06-27_2869926334990276971.jpg";
import image34 from "../img/haircutImages/2022-06-27_2869926334998723311.jpg";
import image35 from "../img/haircutImages/2022-07-22_2887986376511360684.jpg";
import image36 from "../img/haircutImages/2022-07-22_2887986376511480262.jpg";
import image37 from "../img/haircutImages/2022-07-22_2887986376511511911.jpg";
import image38 from "../img/haircutImages/2022-07-26_2891077273173082056.jpg";
import image39 from "../img/haircutImages/mainImage/2021-11-23_2713474556633741730.jpg";
import image40 from "../img/haircutImages/mainImage/2021-11-23_2713474556784774385.jpg";
import image41 from "../img/haircutImages/mainImage/2021-12-22_2734380927860286891.jpg";
import image42 from "../img/haircutImages/mainImage/2021-11-23_2713474556633741730.jpg";
import image43 from "../img/haircutImages/mainImage/2021-11-23_2713474556784774385.jpg";
import image44 from "../img/haircutImages/mainImage/2021-12-22_2734380927860286891.jpg";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Carousel = () => {
const images = [
  image40,
  image41,
  image42,
  image43,
  image44,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image32,
  image33,
  image34,
  image35,
  image36,
  image37,
  image38,
  image39,
];
    return (
      <>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={5}
          navigation
          autoplay
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2, // 2 slides for small/medium screens (md)
            },
            1024: {
              slidesPerView: 5, // 5 slides for large screens (lg)
            },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <SwiperSlide>
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-md"
                >
                  <img
                    src={src}
                    // src={"haircutImages/2021-11-22_2712658976930319807.jpg"}
                    alt={`תמונה ${index + 1}`}
                    className="w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-110"
                  />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </>
    );
}
