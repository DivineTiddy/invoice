import Image from "next/image";
import React from "react";

const DashboardSideNav = () => {
  return (
    <div className="bg-[#FDFDFD] flex flex-col gap-1.5 py-10 px-4 rounded-[16px] w-[270px] h-[700px] text-base font-semibold">
      <button className="flex items-center gap-3 bg-[#D9FBF1] w-full p-4 rounded-[8px] text-start cursor-pointer">
        <Image src="\icon\tabler.svg" alt="icon" width={24} height={24} />
        Invoice
      </button>
      <button className="flex items-center gap-3 w-full p-4 rounded-[8px] text-start cursor-pointer">
        <Image src="\icon\history.svg" alt="icon" width={24} height={24} />
        History
      </button>
      <button className="flex items-center gap-3 w-full p-4 rounded-[8px] text-start cursor-pointer">
        <Image src="\icon\draft.svg" alt="icon" width={24} height={24} />
        Draft
      </button>
      <button className="flex items-center gap-3 w-full p-4 rounded-[8px] text-start cursor-pointer">
        <Image src="\icon\bell-2.svg" alt="icon" width={24} height={24} />
        Notification
      </button>
      <button className="flex items-center gap-3 w-full p-4 rounded-[8px] text-start cursor-pointer">
        <Image src="\icon\settings.svg" alt="icon" width={24} height={24} />
        Settings
      </button>
    </div>
  );
};

export default DashboardSideNav;
