// app/dashboard/layout.tsx
import DashboardSideNav from "@/components/nav/DashboardSideNav";
import DashboardTopNav from "@/components/nav/DashboardTopNav";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ zoom: 0.9 }} className=" md:px-[20px] xl:px-[150px] py-[20px] bg-[#F2F2F2] min-h-screen">
      <div className="fixed top-0 left-0 right-0  md:px-[20px]  xl:px-[150px] z-50">
        <DashboardTopNav />
      </div>
      <div className="flex gap-3 w-full h-full mt-[70px] md:mt-[90px]">
        <DashboardSideNav className="hidden lg:flex h-[700px] py-10 px-4" />
        <div className="flex-1 overflow-x-auto">{children}</div>
      </div>
    </div>
  );
}
