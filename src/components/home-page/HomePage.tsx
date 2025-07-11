"use client";

import React, { useState } from "react";
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
import FaqAccordion from "../accordion/FaqAccordion";
import { faq_data } from "@/data/data";
import SliderCard_1 from "../cards/SliderCard_1";
import SliderCard_2 from "../cards/SliderCard_2";

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
  const [openItem, setOpenItem] = useState<string | null>("1");

  return (
    <>
      <header className="w-full h-auto px-[120px] py-9.5 bg-[linear-gradient(185deg,_rgba(244,255,252,1)_71%,_rgba(57,188,147,0.84)_100%)]">
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
          <h1 className="text-[#242424] mt-2 font-bold text-[60px] text-center leading-14">
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
        <section className="flex items-start  w-full ">
          <div className="bg-[#248567] h-[740px] w-[50%] p-[112px]">
            <h1 className="text-[#EFEFEF] font-bold text-5xl leading-18">
              Works for All Types of <br /> Business.{" "}
            </h1>
            <p className="text-[#DFDFDF] font-normal text-base mt-[24px]">
              Whatever business or services you provide, you <br />
              can invoice your client like a pro
            </p>
            <ul className="mt-[39px] px-6 space-y-4 text-[#DFDFDF] font-normal text-base list-[disc] list-outside">
              <li>Freelancers</li>
              <li>Online seller</li>
              <li>Contractor</li>
              <li>Service provider</li>
              <li>Small business</li>
            </ul>
            <button className="text-[#248567] cursor-pointer shadow-[0_4px_6px_-1px_rgba(0,0,0,0.25)] font-semibold text-base bg-white py-4 px-6 rounded-[8px] mt-[67px]">
              Generate Invoice
            </button>
          </div>
          <div
            style={{
              backgroundImage: "url('/image/image-1.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-[50%] h-[740px] "
          ></div>
        </section>
        <section className="bg-[#FDFDFD] flex items-center justify-between px-[120px] py-[79px] ">
          <div className="bg-[#248567] relative rounded-[32px] h-[620px] w-[620px]">
            <Image
              src="\image\image-2.svg"
              alt="image"
              width={620}
              height={620}
              className="mt-[-23px] ml-[25px] absolute"
            />
          </div>
          <div>
            <h1 className="text-[#242424]  font-bold text-5xl leading-14">
              Trusted by <br /> Freelancers, SME’s <br /> and Businesses across{" "}
              Nigeria.
            </h1>
            <p className="font-normal text-base text-[#242424] leading-5 mt-5">
              JustInvoice caters for all services. You can <br /> generate as
              professional invoices and receipts for you clients in an instant.
            </p>
            <button className="text-[#EFFFFA] cursor-pointer shadow-[0_4px_6px_-1px_rgba(0,0,0,0.25)] font-semibold text-base bg-[#248567] py-4 px-6 rounded-[8px] mt-[67px]">
              Generate Invoice
            </button>
          </div>
        </section>
        <section className="bg-[#FDFDFD] w-full  pl-[120px] py-[120px]">
          <h1 className="font-bold text-[48px] text-[#242424] text-center">
            Who It Is For.
          </h1>
          <p className="font-normal text-base text-[#777777] text-center mt-4">
            JustInvoice is made for every hustle. Whether you&apos;re
            freelancing <br /> or running a store, we&apos;ve got you covered.
          </p>
          <SliderCard_1 />
        </section>
        <section className="flex justify-between h-[1060px] items-start bg-[#EBFFF9] mt-[40px]  ">
          <div className="bg-[#248567] pr-[80px] h-full pl-[120px] pt-[90px]">
            <h1 className="text-[#F0F0F0] font-bold text-5xl leading-16">
              Frequently <br /> Asked <br /> Questions{" "}
            </h1>
            <p className="text-[#E5E5E5] font-normal text-base leading-7 mt-5">
              We have answers to all your possible questions. <br /> If you have
              more questions not listed here, then <br /> reach out to us
              through the contact us page.
            </p>
            <button className="text-[#248567] bg-[#EFEFEF] cursor-pointer shadow-[0_4px_6px_-1px_rgba(0,0,0,0.25)] font-semibold text-base  py-4 px-6 rounded-[8px] mt-[67px]">
              View All
            </button>
          </div>
          <div className="w-[65%] pr-[120px] pt-[90px] pb-[50px] flex flex-col ">
            {faq_data.map((item) => (
              <FaqAccordion
                key={item.id}
                id={item.id}
                question={item.question}
                answer={item.answer}
                openItem={openItem}
                setOpenItem={setOpenItem}
              />
            ))}
          </div>
        </section>
        <section className="px-[120px] py-[90px] bg-[#FDFDFD]">
          <h1 className="text-[#242424] font-bold text-5xl text-center">
            What Our Users <br /> Are Saying
          </h1>
          <p className="font-normal mt-[16px] text-base text-[#777777] text-center">
            Read a couple of reviews from businesses and individuals who <br />{" "}
            have used and still using our invoice generator.{" "}
          </p>
          <SliderCard_2 />
        </section>
      </main>
      <footer className="w-full mt-[40px]">
        <section className="bg-[#043325] flex flex-col gap-3 items-center py-[70px]">
          <h1 className="text-[#EAEAEA] font-bold text-5xl">
            Get paid faster.
          </h1>
          <p className="text-[#EAEAEA] font-normal text-xl">
            Start invoicing today
          </p>
          <button className="cursor-pointer py-[16px] px-[24px] mt-4 rounded-[8px] bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.25)] text-[#248567]">
            Generate Invoice
          </button>
        </section>
        <section className="bg-[#0C0C0C] mt-[60px] p-[68px]">
          <div className="w-full flex items-start justify-between">
            <div>
              <div className="flex gap-[10px] items-center">
                <Image
                  src="\image\logo.svg"
                  alt="image"
                  width={50}
                  height={50}
                />
                <h2 className="font-bold text-2xl text-[#248567]">
                  JUSTINVOICE
                </h2>
              </div>
              <p className="text-[#7E7E7E] font-normal text-xl mt-[24px]">
                JustInvoice helps Nigerian freelancers and <br /> businesses
                generate simple, professional invoices <br /> fast and for free.
                No stress, no wahala. Just easy invoicing.
              </p>
              <div className="mt-7 flex items-center gap-3">
                <Image
                  src="\icon\facebook-icon.svg"
                  alt="icon"
                  width={42}
                  height={42}
                />
                <Image
                  src="\icon\instagram-icon.svg"
                  alt="icon"
                  width={42}
                  height={42}
                />
                <Image
                  src="\icon\twitter-icon.svg"
                  alt="icon"
                  width={42}
                  height={42}
                />
              </div>
            </div>
            <ul className="text-[#7D7D7D] space-y-4">
              <li className="text-[#EAEAEA] font-semibold text-xl border-b-[1px] border-[#2C2C2C] pb-2">
                Quicklinks
              </li>
              <li>Home</li>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Terms & Privacy</li>
            </ul>
            <ul className="text-[#7D7D7D] space-y-4">
              <li className="text-[#EAEAEA] font-semibold text-xl border-b-[1px] border-[#2C2C2C] pb-2">
                Features
              </li>
              <li>Free Invoice Generator</li>
              <li>Invoice History</li>
              <li>Custom Branding</li>
              <li>Download PDF</li>
            </ul>
            <ul className="text-[#7D7D7D] space-y-4">
              <li className="text-[#EAEAEA] font-semibold text-xl border-b-[1px] border-[#2C2C2C] pb-2">
                Contact
              </li>
              <li className="flex items-center gap-3">
                <Image
                  src="\icon\phone.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />{" "}
                +234 902 053 8305
              </li>
              <li className="flex items-center gap-3">
                {" "}
                <Image
                  src="\icon\mail.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />{" "}
                support@justinvoice.ng
              </li>
              <li className="flex items-center gap-3">
                {" "}
                <Image
                  src="\icon\location.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />{" "}
                Lagos, Nigeria
              </li>
            </ul>
          </div>
          <div className="border-[1px] border-[#2C2C2C] w-full mt-[60px]" />
          <p className="font-normal text-base text-[#EAEAEA] mt-10 text-center">
            © 2025 JustInvoice. All rights reserved.
          </p>
        </section>
      </footer>
    </>
  );
};

export default HomePage;
