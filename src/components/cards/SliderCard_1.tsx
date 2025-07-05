import { for_who_data } from "@/data/data";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderCard_1() {
  const settings: Settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5, // ✅ Show 4 cards at once
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-[83px] overflow-hidden">
      <Slider {...settings}>
        {for_who_data.map((item) => (
          <div key={item.id} className="p-2">
            <div className="group w-full h-[590px] cursor-pointer  rounded-[32px] hover:bg-[#248567] bg-[#F0F0F0] border border-[#E0E0E0] transition-colors duration-300">
              <Image
                src={item.url}
                alt={item.title}
                width={400}
                height={300}
                className="rounded-t-[32px] w-full object-cover"
              />
              <div className="px-5 py-5">
                <h1 className="font-bold text-2xl text-[#242424] group-hover:text-[#EEEEEE] transition-colors duration-300">
                  {item.title}
                </h1>
                <p className="text-base  group-hover:text-[#DEDEDE] text-[#777777] mt-1 transition-colors duration-300">
                  {item.note}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
