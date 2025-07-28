import React from "react";
type HistoryCardProps = {
  date: string;
  subject: string;
  client: string;
};
const HistoryCard = ({ date, subject, client }: HistoryCardProps) => {
  return (
    <div className="border-[#D8D8D8] border-[1px] cursor-pointer rounded-[16px] p-4 space-y-2.5 hover:shadow-lg transition-shadow duration-200">
      <p className="font-normal text-xs text-[#767676]">{date}</p>
      <p className="font-semibold text-base">{subject}</p>
      <p className="text-[#767676] font-normal text-sm">{client}</p>
    </div>
  );
};

export default HistoryCard;
