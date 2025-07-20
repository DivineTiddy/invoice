"use client"


import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

export function SelectDropdown() {
  const [value, setValue] = React.useState("Naira");

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className=" cursor-pointer flex justify-between items-center w-[300px] outline-0 font-normal text-base text-[#A7A7A7] bg-[#FDFDFD] rounded-[8px] p-4.5 border-[1px] border-[#E4E4E4] focus:border-[#248567]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className=" -bottom-20 left-24 font-normal text-base text-[#A7A7A7] bg-[#FDFDFD] ">
        <SelectGroup>
          <SelectItem  value="Naira">
            {" "}
            <Image
              src="\image\image-12.svg"
              alt="image"
              width={24}
              height={24}
            />{" "}
            Naira
          </SelectItem>
          <SelectItem value="USD">USD</SelectItem>
          <SelectItem value="Cedis">Cedis</SelectItem>
          <SelectItem value="Euro">Euro</SelectItem>
          <SelectItem value="Pounds">Pounds</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
