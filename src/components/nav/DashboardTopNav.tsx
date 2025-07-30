import Image from "next/image";
import React from "react";
import MobileSideNav from "./MobileSideNav";

const DashboardTopNav = () => {
  return (
    <div className=" bg-[#F9FFFD] md:bg-[#FDFDFD] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.25)] py-[14px] px-[24px] rounded-[32px] flex items-center justify-between">
      <div className="flex gap-[10px] items-center">
        <Image
          src="/image/logo.svg"
          alt="image"
          className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
          width={0}
          height={0}
        />
        <h2 className="font-bold text-lg md:text-2xl text-[#248567] font-sans">
          JUSTINVOICE
        </h2>
      </div>
      <div className="flex items-center gap-[20px] md:gap-[48px]">
        <Image
          src="/icon/bellIcon.svg"
          alt="icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <div className="flex items-center gap-4 cursor-pointer">
          <Image src="/image/image-11.svg" alt="image" width={42} height={42} />
          <div className=" md:hidden">
            <MobileSideNav />
          </div>
          <p className="hidden md:flex font-normal text-xs text-[#242424]">
            Chinedu O.
          </p>
          <Image
            src="/icon/chevron-down.svg"
            alt="icon"
            width={20}
            height={20}
            className="hidden md:flex"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardTopNav;
