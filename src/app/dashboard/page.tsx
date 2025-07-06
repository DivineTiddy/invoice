import Index from "@/components/dashboard/Index";
import DashboardSideNav from "@/components/nav/DashboardSideNav";
import DashboardTopNav from "@/components/nav/DashboardTopNav";
import React from "react";

const page = () => {
  return (
    <div className="px-[64px] py-[20px] bg-[#F2F2F2] h-[100%]">
      <DashboardTopNav />
      <div className="flex gap-3 w-full  h-full mt-[20px]">
        <DashboardSideNav />
        <Index />
      </div>
    </div>
  );
};

export default page;
