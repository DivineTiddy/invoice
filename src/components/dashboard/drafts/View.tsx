import Image from "next/image";

import React from "react";

const View = () => {
  return (
    <div className="bg-[#FDFDFD] rounded-lg p-4 space-y-6 drop-shadow-lg w-auto z-40 absolute right-10 transition-colors duration-200">
      <button className="flex items-center gap-2  cursor-pointer">
        <Image src="\icon\pencil.svg" alt="icon" width={20} height={20} />
        <p className="text-[#242424] font-normal text-base">Edit</p>
      </button>
      <button className="flex items-center gap-2  cursor-pointer">
        <Image src="\icon\delete.svg" alt="icon" width={20} height={20} />
        <p className="text-[#242424] font-normal text-base">Delete</p>
      </button>
    </div>
  );
};

export default View;
