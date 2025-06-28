import React from "react";
import HomeDesktopNav from "../nav/HomeDesktopNav";
import Image from "next/image";
import BusinessCard from "../cards/BusinessCard";

const HomePage = () => {
  return (
    <>
      <header className="w-full h-auto px-6 py-9.5 bg-[linear-gradient(185deg,_rgba(244,255,252,1)_71%,_rgba(57,188,147,0.84)_100%)]">
        <HomeDesktopNav />
        <section className="flex items-center flex-col  mt-[75px]">
          <div className="w-auto border-[1px] border-[#DDDDDD] rounded-[32px] p-2 flex items-center justify-center gap-1.5">
            <Image
              src="\icon\lightning.svg"
              alt="icon"
              width={20}
              height={20}
            />
            <p className="text-[#767676] font-normal text-xs">Fast and free</p>
          </div>
          <h1 className="text-[#242424] mt-2 font-semibold text-[60px] text-center leading-14">
            Generate Free <br /> Instant Pro Invoice
          </h1>
          <p className="text-[#5E5E5E] font-normal mt-5 text-center text-base w-[23%]">
            Clean invoice and receipt that represent your brand, with your logo
            and signature
          </p>
          <div className="mt-[42px] flex items-center gap-[42px]">
            <button className=" text-[#EFFFFA] cursor-pointer font-semibold text-base bg-[#248567] rounded-[8px] py-4 px-6 drop-shadow-sm drop-shadow-black/10">
              Generate Invoice
            </button>
            <button className="w-[170px] text-[#248567] cursor-pointer font-semibold py-4 px-6 text-base border-[#248567] border-[1px] rounded-[8px] drop-shadow-sm drop-shadow-[#00140E1A]/10">
              Sign Up
            </button>
          </div>
          <div className="mt-[36px]">
            <Image
              src="\image\section-avatar.svg"
              alt="image"
              width={500}
              height={400}
            />
          </div>
        </section>
      </header>
      <main className="bg-[#FDFDFD] w-full h-[700px] p-[120px]">
        <h1 className="text-[42px] font-bold text-center text-[#242424] leading-12">
          Built For Every <br /> Business and Services
        </h1>
        <div className="mt-[73px] grid grid-cols-3 gap-[28px]">
          <BusinessCard />
          <BusinessCard />
          <BusinessCard />
        </div>
      </main>
    </>
  );
};

export default HomePage;
