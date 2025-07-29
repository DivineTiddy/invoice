"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";
import DashboardSideNav from "./DashboardSideNav";

const MobileSideNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="cursor-pointer">
        <Image
          src="/icon/menu-burger.svg"
          alt="icon"
          width={24}
          height={24}
          className=""
        />
      </SheetTrigger>
      <SheetContent className="bg-transparent border-0 w-full p-0 px-0">
        <SheetHeader className="border-0">
          <SheetTitle className="w-full px-4 flex justify-between items-center bg-[#F9FFFD] drop-shadow-lg py-3">
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
            <SheetClose asChild>
              <button>
                <Image
                  src="/icon/closeIcon.svg"
                  alt="icon"
                  width={32}
                  height={32}
                />
              </button>
            </SheetClose>
          </SheetTitle>
          <SheetDescription className="w-[60%] h-full bg-[#FDFDFD] p-4">
            
            <DashboardSideNav className=" md:hidden h-screen" />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideNav;
