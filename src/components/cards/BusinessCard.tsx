import React from "react";
import { RocketIcon } from "../ui/customizeIcon";

const BusinessCard = () => {
  return (
    <div className="flex flex-col items-center border-[1px] border-[#D5D5D5] rounded-[16px] p-[32px]">
      <div className="p-4 rounded-[8px] border-[1px] border-[#A5EDD6]  bg-[#248567]">
        <RocketIcon />
      </div>
      <h2 className="mt-[24px] text-[#242424] font-bold text-xl text-center">
        Simple and Fast
      </h2>
      <p className="mt-5 text-[#777777] font-normal text-base text-center w-[70%]">
        No complicated steps, generate your invoice in minutes
      </p>
    </div>
  );
};

export default BusinessCard;
