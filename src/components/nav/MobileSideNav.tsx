"use client";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
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

const MobileSideNav = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleNavigate = (href: string) => {
    router.push(href); // Navigate
    setOpen(false); // Close sheet
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="cursor-pointer">
        <Image src="/icon/menu-burger.svg" alt="icon" width={24} height={24} />
      </SheetTrigger>
      <SheetContent className="bg-transparent border-0 w-full p-0 px-0 md:hidden">
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
          <SheetDescription className="w-[60%] h-[700px] bg-[#FDFDFD] p-4 -mt-1.5">
            <RouteLink
              href="/dashboard"
              src="/icon/tabler.svg"
              onClick={handleNavigate}
            >
              Invoice
            </RouteLink>
            <RouteLink
              href="/dashboard/history"
              src="/icon/history.svg"
              onClick={handleNavigate}
            >
              History
            </RouteLink>
            <RouteLink
              href="/dashboard/draft"
              src="/icon/draft.svg"
              onClick={handleNavigate}
            >
              Draft
            </RouteLink>
            <RouteLink
              href="/dashboard/notification"
              src="/icon/bell-2.svg"
              onClick={handleNavigate}
            >
              Notification
            </RouteLink>
            <RouteLink
              href="/dashboard/settings"
              src="/icon/settings.svg"
              onClick={handleNavigate}
            >
              Settings
            </RouteLink>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideNav;

const RouteLink = ({
  href,
  children,
  src,
  onClick,
}: {
  src: string;
  href: string;
  children: React.ReactNode;
  onClick: (href: string) => void;
}) => {
  const pathname = usePathname();
  const isActive = (route: string) =>
    pathname === route
      ? "bg-[#D9FBF1] text-[#073B2B]"
      : "hover:bg-gray-100 text-[#767676]";

  return (
    <button
      onClick={() => onClick(href)}
      className={`flex items-center font-normal text-base gap-3 w-full p-4 rounded-[8px] text-start cursor-pointer ${isActive(
        href
      )}`}
    >
      <Image src={src} alt="icon" width={24} height={24} />
      {children}
    </button>
  );
};
