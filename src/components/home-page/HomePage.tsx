import React from "react";
import HomeDesktopNav from "../nav/HomeDesktopNav";
import Image from "next/image";
import BusinessCard from "../cards/BusinessCard";
import {
  DataIcon,
  DownLoadIcon,
  OutlineIcon,
  PaymentIcon,
  RocketIcon,
  TaxIcon,
} from "../ui/customizeIcon";

const bussinessContent = [
  {
    title: "Simple and Fast",
    description: "No complicated steps, generate your invoice in minutes",
    icon: (
      <RocketIcon className="text-[#F2F2F2] group-hover:text-[#248567] transition-colors duration-300" />
    ),
  },
  {
    title: "Local & International Payment",
    description: "Invoice clients in Naira, Dollars, Euro, Pounds and more.",
    icon: (
      <PaymentIcon className="text-[#F2F2F2] group-hover:text-[#248567] transition-colors duration-300" />
    ),
  },
  {
    title: "Custom Branding",
    description:
      "Add your logo, business details and personalize our invoices.",
    icon: (
      <OutlineIcon className="text-[#F2F2F2] group-hover:text-[#248567] transition-colors duration-300" />
    ),
  },
  {
    title: "Tax Support",
    description: "Handle VAT and other tax deductions with ease.",
    icon: (
      <TaxIcon className="text-[#F2F2F2] group-hover:text-[#248567] transition-colors duration-300" />
    ),
  },
  {
    title: "Instant PDF Download",
    description:
      "Download print or share your invoice directly with your client.",
    icon: (
      <DownLoadIcon className="text-[#F2F2F2] group-hover:text-[#248567] transition-colors duration-300" />
    ),
  },
  {
    title: "Safe & Secure",
    description: "Your data is protected with top level security",
    icon: (
      <DataIcon className="text-[#F2F2F2] group-hover:text-[#248567] transition-colors duration-300" />
    ),
  },
];
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
      <main className="">
        <section className="bg-[#FDFDFD] w-full  p-[120px]">
          <h1 className="text-[42px] font-bold text-center text-[#242424] leading-12">
            Built For Every <br /> Business and Services
          </h1>
          <div className="mt-[73px] grid grid-cols-3 gap-[28px]">
            {bussinessContent.map((item, index) => (
              <BusinessCard
                key={index + 1}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </section>
        <section className="w-full h-[500px]">
          <div className="bg-[#248567] w-[50%] p-[112px]">
            <h1 className="text-[#EFEFEF] font-bold text-5xl leading-18">
              Works for All Types of <br /> Business.{" "}
            </h1>
            <p className="text-[#DFDFDF] font-normal text-base mt-[24px]">
              Whatever business or services you provide, you <br/>can invoice your
              client like a pro
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
