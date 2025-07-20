"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import { InvoiceData } from "@/types/Types";
type ProductTableProps = {
  setInvioceData: React.Dispatch<React.SetStateAction<InvoiceData>>;
};
export const DueDate: React.FC<ProductTableProps> = ({ setInvioceData }) => {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date>(new Date()); // ✅ Default to today
  const formattedDate = `${String(date.getDate()).padStart(2, "0")}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${date.getFullYear()}`;
  React.useEffect(() => {
    setInvioceData((pre) => ({
      ...pre,
      dueDate: formattedDate,
    }));
  }, [formattedDate]);
  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            id="date"
            className="cursor-pointer flex justify-between items-center w-[300px] outline-0 font-normal text-base text-[#A7A7A7] bg-[#FDFDFD] rounded-[8px] p-2.5 border-[1px] border-[#E4E4E4] focus:border-[#248567]"
          >
            {`${String(date.getDate()).padStart(2, "0")} - ${String(
              date.getMonth() + 1
            ).padStart(2, "0")} - ${date.getFullYear()}`}

            <Image src="/icon/calender.svg" alt="icon" width={24} height={24} />
          </button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="text-base text-[#A7A7A7] absolute bottom-1 left-24"
        >
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(selectedDate) => {
              if (selectedDate) {
                setDate(selectedDate);
                setOpen(false);
              }
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
