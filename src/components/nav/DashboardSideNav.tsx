"use client"; // Required to use hooks in Next.js app directory

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardSideNav = () => {
  const pathname = usePathname();

  // Helper to apply active class
  const isActive = (route:string) =>
    pathname === route ? "bg-[#D9FBF1] text-[#073B2B]" : "hover:bg-gray-100";

  return (
    <div className="bg-[#FDFDFD] flex flex-col gap-1.5 py-10 px-4 rounded-[16px] w-[270px] h-[700px] text-base font-semibold">
      <Link
        href="/dashboard"
        className={`flex items-center gap-3 w-full p-4 rounded-[8px] text-start cursor-pointer ${isActive("/dashboard")}`}
      >
        <Image src="/icon/tabler.svg" alt="icon" width={24} height={24} />
        Invoice
      </Link>
      <Link
        href="/dashboard/history"
        className={`flex items-center gap-3 w-full p-4 rounded-[8px] text-start cursor-pointer ${isActive("/dashboard/history")}`}
      >
        <Image src="/icon/history.svg" alt="icon" width={24} height={24} />
        History
      </Link>
      <button className="flex items-center gap-3 w-full p-4 rounded-[8px] text-start cursor-pointer hover:bg-gray-100">
        <Image src="/icon/draft.svg" alt="icon" width={24} height={24} />
        Draft
      </button>
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
