"use client"

import { InputType } from "@/types/Types";
import { InputHTMLAttributes } from "react";

type ExtendedInputProps = InputType & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  placeholder,
  className,
  value,
  onChange,
  type,
  disabled,
  ...rest
}: ExtendedInputProps) => {
  return (
    <input
      disabled={disabled}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...rest}
      className={`${className} outline-0 font-normal text-base text-[#242424] bg-[#FDFDFD] rounded-[8px] p-2.5 border-[1px] border-[#E4E4E4] focus:border-[#248567] `}
    />
  );
};
