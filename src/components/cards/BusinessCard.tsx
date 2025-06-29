import React from "react";
import { BussinessContentTypes } from "@/types/Types";

const BusinessCard = ({ title, description, icon  }: BussinessContentTypes) => {
  return (
    <div className="group cursor-pointer flex flex-col items-center border border-[#D5D5D5] rounded-[16px] p-[32px] hover:bg-[#248567] hover:border-none transition-all duration-300">
      <div className="bg-[#248567] group-hover:bg-[#F2FFFB] transition-all duration-300 p-4 rounded-[8px] border border-[#A5EDD6]">
        {icon}
      </div>
      <h2 className="mt-6 text-[#242424] font-bold text-xl text-center group-hover:text-[#EEEEEEEE] transition-all duration-300">
        {title}
      </h2>
      <p className="mt-5 text-[#777777] font-normal text-base text-center w-[70%] group-hover:text-[#EAEAEAEE] transition-all duration-300">
        {description}
      </p>
    </div>
  );
};

export default BusinessCard;
