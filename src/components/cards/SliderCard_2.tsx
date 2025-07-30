"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { user_preview } from "@/data/data";

export default function PreviousNextMethods() {
  const sliderRef = useRef<Slider | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 4;

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    dots: false, // We handle our own custom pagination
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider
        {...settings}
        ref={(slider) => {
          sliderRef.current = slider;
        }}
      >
        {user_preview.map((item, index) => (
          <div key={item.id} className="w-full  px-[14px]">
            <div
              className={`flex flex-col justify-between w-full mt-[102px] h-[430px] py-[50px] px-[14px] rounded-[32px] border-[1px] ${
                index === activeSlide
                  ? "border-[#248567] bg-[#248567] text-[#EEEEEE]"
                  : "border-[#E9E9E9] bg-[#EBEBEB] text-[#777777]"
              }`}
            >
              <div>
                <p className="font-bold text-[18px]">{item.note}</p>
                <p className="font-normal text-base mt-[24px]">
                  {item.description}
                </p>
              </div>
              <div className=" flex items-center gap-5">
                <Image src={`${item.url}`} alt="image" width={40} height={40} />
                <div>
                  <p
                    className={`${
                      index === activeSlide ? "text-white" : "text-[#242424]"
                    } font-bold text-lg`}
                  >
                    {item.name}
                  </p>
                  <p className="font-normal text-sm">{item.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Navigation */}
      <div className="mt-[40px] flex justify-center items-center gap-6">
        <button
          className="button cursor-pointer text-[#BDBDBD] hover:text-[#248567]"
          onClick={previous}
        >
          Previous
        </button>

        {/* Dots with numbers */}
        <div className="flex gap-3">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <div
              key={i}
              className={`p-2.5 flex items-center justify-center rounded-[8px] text-sm font-medium cursor-pointer ${
                i === activeSlide
                  ? "bg-[#248567] text-white"
                  : " text-black border-[1px] border-[#CECECE]"
              }`}
              onClick={() => sliderRef.current?.slickGoTo(i)}
            >
              {i + 1}
            </div>
          ))}
        </div>

        <button
          className="button cursor-pointer text-[#BDBDBD] hover:text-[#248567]"
          onClick={next}
        >
          Next
        </button>
      </div>
    </div>
  );
}
