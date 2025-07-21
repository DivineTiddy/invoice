"use client";

import HistoryCard from "@/components/cards/HistoryCard";
import { HistorySortBy } from "@/components/select/HistorySortBy";
import Image from "next/image";
import React, { useState } from "react";

type HistoryCardProps = {
  date: string;
  subject: string;
  client: string;
};
const historyData: HistoryCardProps[] = [
  {
    date: "2 days ago  |  Invoice No. 01",
    subject: "Invoice for web development services",
    client: "John Doe",
  },
  {
    date: "2 days ago  |  Invoice No. 02",
    subject: "Invoice for design services",
    client: "Jane Smith",
  },
  {
    date: "3 days ago  |  Invoice No. 03",
    subject: "Invoice for consulting",
    client: "Acme Corp",
  },
  {
    date: "4 days ago  |  Invoice No. 04",
    subject: "Invoice for SEO audit",
    client: "Rocket LLC",
  },
  {
    date: "5 days ago  |  Invoice No. 05",
    subject: "Invoice for mobile app design",
    client: "BigTech",
  },
  {
    date: "6 days ago  |  Invoice No. 06",
    subject: "Invoice for maintenance",
    client: "Alpha Inc",
  },
];

const ITEMS_PER_PAGE = 4;

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(historyData.length / ITEMS_PER_PAGE);

  const paginatedData = historyData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <div className="text-[#444444] p-[32px] bg-[#FDFDFD] rounded-[16px]">
        <h1 className="font-bold text-xl">Invoice History</h1>
        <section className="mt-[50px] flex items-center justify-between">
          <div className="flex items-center gap-3 py-3  bg-white border-[1px] border-[#CFCFCF] w-[400px] rounded-full  px-4">
            <Image
              src="\icon\searchIcon.svg"
              alt="icon"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <input
              placeholder="Search by subject, name etc"
              className="w-full h-full font-normal text-base text-[#B2B2B2] outline-0"
            />
          </div>
          <div className="flex items-center gap-2 border-[#E8E8E8] border-[1px] rounded-[32px] px-4">
            <p className="text-[#767676] px-3 py-2 font-normal text-base border-r-[1px] border-[#DEDEDE]">
              Sort by
            </p>
            <HistorySortBy />
          </div>
        </section>
        <section className="mt-[42px] space-y-3.5">
          {paginatedData.map((item, index) => (
            <HistoryCard
              key={index}
              date={item.date}
              subject={item.subject}
              client={item.client}
            />
          ))}
        </section>
      </div>
      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-2 py-1">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Index;
