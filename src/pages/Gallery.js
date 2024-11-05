import React, { useState } from "react";
import { ChevronLeft, X } from "lucide-react";
import image1 from '../img/haircutImages/2021-11-22_2712658976930319807.jpg'
import image2 from '../img/haircutImages/2021-11-22_2712658976947126088.jpg'
import image3 from '../img/haircutImages/2021-11-22_2712658976955596741.jpg'
import image4 from '../img/haircutImages/2021-11-23_2713366256835391228.jpg'
import image5 from '../img/haircutImages/2021-11-23_2713366256852224394.jpg'
import image6 from '../img/haircutImages/2021-12-16_2730020911959088755.jpg'
import image7 from '../img/haircutImages/2021-12-16_2730020911967519278.jpg'
import image8 from "../img/haircutImages/2021-12-20_2732960820990712997.jpg";
import image9 from '../img/haircutImages/2021-12-20_2732960821007463885.jpg'
import image10 from '../img/haircutImages/2021-12-22_2734380927868567864.jpg'
import image11 from '../img/haircutImages/2021-12-22_2734381495467029231.jpg'
import image12 from '../img/haircutImages/2021-12-23_2734913661644875987.jpg'
import image13 from '../img/haircutImages/2021-12-23_2734913661653302227.jpg'
import image14 from '../img/haircutImages/2021-12-28_2738528386626670150.jpg'
import image15 from '../img/haircutImages/2021-12-28_2738528386643539407.jpg'
import image16 from '../img/haircutImages/2022-01-02_2742382459985658918.jpg'
import image17 from '../img/haircutImages/2022-01-02_2742382460002409364.jpg'
import image18 from "../img/haircutImages/2022-01-02_2742498518013061329.jpg";
import image19 from '../img/haircutImages/2022-01-02_2742498518029956088.jpg'
import image20 from '../img/haircutImages/2022-01-02_2742498518164301738.jpg'
import image21 from '../img/haircutImages/2022-01-03_2743205808731276953.jpg'
import image22 from '../img/haircutImages/2022-01-03_2743205808739672120.jpg'
import image23 from '../img/haircutImages/2022-01-17_2753317795737711621.jpg'
import image24 from '../img/haircutImages/2022-01-17_2753317795754587178.jpg'
import image25 from '../img/haircutImages/2022-01-17_2753317795771313534.jpg'
import image26 from '../img/haircutImages/2022-01-18_2753912186605057737.jpg'
import image27 from '../img/haircutImages/2022-01-18_2753912186772723302.jpg'
import image28 from "../img/haircutImages/2022-01-25_2759096650620494396.jpg";
import image29 from '../img/haircutImages/2022-02-03_2765579583131740697.jpg'
import image30 from '../img/haircutImages/2022-02-03_2765579583148380672.jpg'
import image31 from '../img/haircutImages/2022-02-15_2774237440896339289.jpg'
import image32 from '../img/haircutImages/2022-06-27_2869888173157343211.jpg'
import image33 from '../img/haircutImages/2022-06-27_2869926334990276971.jpg'
import image34 from '../img/haircutImages/2022-06-27_2869926334998723311.jpg'
import image35 from '../img/haircutImages/2022-07-22_2887986376511360684.jpg'
import image36 from '../img/haircutImages/2022-07-22_2887986376511480262.jpg'
import image37 from '../img/haircutImages/2022-07-22_2887986376511511911.jpg'
import image38 from "../img/haircutImages/2022-07-26_2891077273173082056.jpg";
import image39 from "../img/haircutImages/mainImage/2021-11-23_2713474556633741730.jpg";
import image40 from "../img/haircutImages/mainImage/2021-11-23_2713474556784774385.jpg";
import image41 from "../img/haircutImages/mainImage/2021-12-22_2734380927860286891.jpg";
import image42 from "../img/haircutImages/mainImage/2021-11-23_2713474556633741730.jpg";
import image43 from "../img/haircutImages/mainImage/2021-11-23_2713474556784774385.jpg";
import image44 from "../img/haircutImages/mainImage/2021-12-22_2734380927860286891.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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

    // "https://picsum.photos/seed/barber1/400/300",
    // "https://picsum.photos/seed/barber2/400/300",
    // "https://picsum.photos/seed/barber3/400/300",
    // "https://picsum.photos/seed/barber4/400/300",
    // "https://picsum.photos/seed/barber5/400/300",
    // "https://picsum.photos/seed/barber6/400/300",
    // "https://picsum.photos/seed/barber7/400/300",
    // "https://picsum.photos/seed/barber8/400/300",
    // "https://picsum.photos/seed/barber9/400/300",
  ];

  return (
    <div className="w-full min-h-screen mx-auto px-4 md:px-8 py-12 max-w-7xl bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="mb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
          גלריה
        </h1>
        <p className="text-xl text-gray-600 font-medium px-6 py-3 rounded-full bg-white shadow-md inline-block">
          הצצה לעבודות שלנו
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 aspect-square cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <img
              src={src}
              alt={`תמונה ${index + 1}`}
              className="w-full h-full object-cover transition duration-500 ease-out transform group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h2 className="text-xl font-semibold text-white">
                תמונה {index + 1}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-xl mb-4">אהבת את מה שראית?</p>
        <a
          href="/contact"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 inline-block"
        >
          קבע תור עכשיו
        </a>
      </div>
    </div>
  );
};

export default Gallery;
