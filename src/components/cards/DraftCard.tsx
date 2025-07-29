import Image from "next/image";
import React from "react";
import View from "../dashboard/drafts/View";
type HistoryCardProps = {
  date: string;
  subject: string;
  client: string;
  index?: number;
  showViewIndex: number | null;
  setShowViewIndex: (index: number | null) => void;
};
const DraftCard = ({
  date,
  subject,
  client,
  index,
  showViewIndex,
  setShowViewIndex,
}: HistoryCardProps) => {
  const toggleView = () => {
    if (index === showViewIndex) {
      setShowViewIndex(null); // close if already open
    } else {
      setShowViewIndex(index ?? null); // open this one
    }
  };

  return (
    <div className="flex items-start justify-between border-[#D8D8D8] border-[1px]  rounded-[16px] p-4  hover:shadow-lg transition-shadow duration-200">
      <div className="space-y-2.5">
        <p className="font-normal text-xs text-[#767676]">{date}</p>
        <p className="font-semibold text-base">{subject}</p>
        <p className="text-[#767676] font-normal text-sm">{client}</p>
      </div>
      <div className=" md:hidden">
        <button onClick={toggleView}>
          <Image
            src="/icon/dot.svg"
            alt="icon"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </button>
        {showViewIndex === index && <View />}
      </div>
      <div className=" hidden md:flex items-center gap-7">
        <button className="flex items-center gap-2  cursor-pointer">
          <Image src="/icon/pencil.svg" alt="icon" width={20} height={20} />
          <p className="text-[#242424] font-normal text-base">Edit</p>
        </button>
        <button className="flex items-center gap-2  cursor-pointer">
          <Image src="/icon/delete.svg" alt="icon" width={20} height={20} />
          <p className="text-[#242424] font-normal text-base">Delete</p>
        </button>
      </div>
    </div>
  );
};

export default DraftCard;
