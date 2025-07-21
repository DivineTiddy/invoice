"use client"; // Required to use hooks in Next.js app directory

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardSideNav = () => {
  return (
    <div className=" hidden lg:flex bg-[#FDFDFD]  flex-col gap-1.5 py-10 px-4 rounded-[16px] w-[270px] h-[700px] text-base font-semibold">
      <RouteLink href="/dashboard" src="/icon/tabler.svg">
        Invoice
      </RouteLink>
      <RouteLink href="/dashboard/history" src="/icon/history.svg">
        History
      </RouteLink>
      <RouteLink href="/dashboard/draft" src="/icon/draft.svg">
        Draft
      </RouteLink>
      <button className="flex items-center gap-3 w-full p-4 rounded-[8px] text-start cursor-pointer hover:bg-gray-100">
        <Image src="/icon/bell-2.svg" alt="icon" width={24} height={24} />
        Notification
      </button>
      <button className="flex items-center gap-3 w-full p-4 rounded-[8px] text-start cursor-pointer hover:bg-gray-100">
        <Image src="/icon/settings.svg" alt="icon" width={24} height={24} />
        Settings
      </button>
    </div>
  );
};

export default DashboardSideNav;

const RouteLink = ({
  href,
  children,
  src,
}: {
  src: string;
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  // Helper to apply active class
  const isActive = (route: string) =>
    pathname === route ? "bg-[#D9FBF1] text-[#073B2B]" : "hover:bg-gray-100";
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 w-full p-4 rounded-[8px] text-start cursor-pointer ${isActive(
        href
      )}`}
    >
      <Image src={src} alt="icon" width={24} height={24} />
      {children}
    </Link>
  );
};
