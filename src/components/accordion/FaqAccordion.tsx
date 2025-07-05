"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqTypes } from "@/types/Types";
import { Minus, Plus } from "lucide-react";
const FaqAccordion = ({ id, question, answer, openItem, setOpenItem }: FaqTypes) => {
  const isOpen = openItem === id;

  const handleToggle = () => {
    setOpenItem(isOpen ? null : id); // close if already open, else open it
  };

  return (
    <Accordion
      type="single"
      collapsible
      value={isOpen ? id : ""}
      onValueChange={handleToggle}
      className="w-full space-y-6"
    >
      <AccordionItem
        value={id}
        className="data-[state=open]:bg-[#248567] px-[24px] mb-[24px] rounded-[16px] border border-[#DBDBDB]"
      >
        <AccordionTrigger
          className="flex justify-between items-center w-full data-[state=open]:text-[#EEEEEE] py-5 cursor-pointer text-[#777777] font-bold text-base"
        >
          {question}
          <span className="ml-4">
            {isOpen ? <Minus /> : <Plus />}
          </span>
        </AccordionTrigger>
        <AccordionContent className="text-base font-normal text-[#E5E5E5]">
          {answer}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FaqAccordion;

