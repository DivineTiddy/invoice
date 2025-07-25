"use client";

import Image from "next/image";
import React, { useState } from "react";

// Custom components
import { DueDate } from "../calender/DueDate";
import { IssuedDate } from "../calender/IssuedDate";
import { SelectDropdown } from "../dropdown/Select";
import ProductTable from "../table/ProductTable";
import { Input } from "../input/Input";
import { InvoiceData } from "@/types/Types";
import { PreviewDailog } from "../dailog/Dailog";
import LogoUploader from "./LogoUpload";

/**
 * Main invoice entry component.
 * Handles all user inputs related to invoice creation, including sender and receiver information,
 * invoice dates, currency selection, and a list of invoice items.
 */
const Index = () => {
  const [invoiceType, setInvoiceType] = useState<"Product" | "Service">(
    "Product"
  );

  // Initialize invoice state with default values
  const [invioceData, setInvioceData] = useState<InvoiceData>({
    photo: "",
    subject: "",
    invoiceNo: "",
    billfrom: "",
    emailAddress: "",
    yourPhoneNumber: "",
    yourAddress: "",
    billTo: "",
    clientAddress: "",
    customerEmailAddress: "",
    customerPhoneNumber: "",
    issuedDate: "",
    dueDate: "",
    currency: "",
    productData: [],
    note: "",
    subtotal: 0,
    discount: "",
    amountPaid: "",
    balanceDue: 0,
  });

  // Handles form submission; currently logs invoice data to console
  // const handleSubmit = () => {
  //   console.log(invioceData);
  // };

  // Placeholder for refresh logic — could reset state or re-fetch data
  const handleRefresh = () => {};

  return (
    <div className="w-full bg-[#FDFDFD] py-6 md:py-10 px-[20px] lg:px-[52px] rounded-[16px] ">
      {/* Page Heading */}
      <h1 className="text-[#444444] font-bold text-xl">Invoice Details</h1>

      {/* Toggle for invoice type (Product or Services) */}
      <div className=" md:w-[500px] flex items-center rounded-[12px] gap-2 bg-[#EAEAEA] mt-6 p-1.5 font-normal text-base">
        <button
          onClick={() => setInvoiceType("Product")}
          className={`w-full text-[#777777] cursor-pointer outline-0 py-3 px-4 transition-all duration-300 ${
            invoiceType === "Product"
              ? "bg-[#FDFDFD] rounded-[6px] text-[#444444] "
              : "text-[#777777] "
          }`}
        >
          For Product
        </button>
        <button
          onClick={() => setInvoiceType("Service")}
          className={`w-full  cursor-pointer outline-0 py-3 px-4 transition-all duration-300 ${
            invoiceType === "Service"
              ? "bg-[#FDFDFD] rounded-[6px] text-[#444444] "
              : "text-[#777777] "
          }`}
        >
          For Services
        </button>
      </div>

      {/* Logo Upload Placeholder */}
      <div className=" mt-[30px] md:mt-[53px] ">
        <h1 className="text-[#444444] font-bold text-base">Company’s Logo</h1>
        <LogoUploader />

        {/* Invoice Header Info (Subject & Invoice Number) */}
        <section className=" flex flex-col-reverse md:flex-row md:items-center mt-6 md:mt-[36px] gap-6 md:gap-14">
          <div className="flex flex-col gap-2 md:gap-5">
            <Lable title="Subject" />
            <Input
              value={invioceData.subject}
              onChange={(e) =>
                setInvioceData((prev) => ({
                  ...prev,
                  subject: e.target.value,
                }))
              }
              className=" md:w-[400px]"
              placeholder="Design Job"
            />
          </div>
          <div className="flex flex-col gap-2 md:gap-5">
            <Lable title=" Invoice No." />
            <Input
              value={invioceData.invoiceNo}
              onChange={(e) =>
                setInvioceData((prev) => ({
                  ...prev,
                  invoiceNo: e.target.value,
                }))
              }
              className=" w-[100px] md:w-[220px]"
              placeholder="01"
            />
          </div>
        </section>

        {/* Billing Information: From + Your Address */}
        <section className=" flex flex-col md:flex-row md:items-center mt-6  md:mt-[36px] gap-6 md:gap-14">
          <Chip>
            <Lable title="Bill From" />
            <Input
              value={invioceData.billfrom}
              onChange={(e) =>
                setInvioceData((prev) => ({
                  ...prev,
                  billfrom: e.target.value,
                }))
              }
              className="md:w-[400px]"
              placeholder="Justocean design agency"
            />
          </Chip>
          <Chip>
            <Lable title="Your Address" />
            <Input
              value={invioceData.yourAddress}
              onChange={(e) =>
                setInvioceData((prev) => ({
                  ...prev,
                  yourAddress: e.target.value,
                }))
              }
              className="md:w-[400px]"
              placeholder="6 Obafemi Street, Doga, Lag..."
            />
          </Chip>
        </section>

        {/* Sender Contact Information */}
        <section className=" flex flex-col md:flex-row md:items-center mt-6 md:mt-[36px] gap-6 md:gap-14">
          <Chip>
            <Lable title="Email Address" />
            <Input
              value={invioceData.emailAddress}
              onChange={(e) =>
                setInvioceData((prev) => ({
                  ...prev,
                  emailAddress: e.target.value,
                }))
              }
              className="md:w-[400px]"
              placeholder="Business Email Address"
            />
          </Chip>
          <Chip>
            <Lable title="Phone Number" />
            <Input
              value={invioceData.yourPhoneNumber}
              onChange={(e) =>
                setInvioceData((prev) => ({
                  ...prev,
                  yourPhoneNumber: Number(e.target.value),
                }))
              }
              className="md:w-[400px]"
              placeholder="Business phone number"
            />
          </Chip>
        </section>

        {/* Customer Information */}
        <section className=" flex flex-col md:flex-row md:items-center mt-6 md:mt-[36px] gap-6 md:gap-14">
          <Chip>
            <Lable title="Bill to" />
            <Input
              value={invioceData.billTo}
              onChange={(e) =>
                setInvioceData((prev) => ({
                  ...prev,
                  billTo: e.target.value,
                }))
              }
              className="md:w-[400px]"
              placeholder="Micheal Jones"
            />
          </Chip>
          <Chip>
            <Lable title="Customer Address" />
            <Input
              value={invioceData.clientAddress}
              onChange={(e) =>
                setInvioceData((prev) => ({
                  ...prev,
                  clientAddress: e.target.value,
                }))
              }
              className="md:w-[400px]"
              placeholder="10 Doncan Street, Doga, New York"
            />
          </Chip>
        </section>

        {/* Customer Contact Details */}
        <section className=" flex flex-col md:flex-row md:items-center mt-6 md:mt-[36px] gap-6 md:gap-14">
          <Chip>
            <Lable title="Customer Email Address" />
            <Input
              value={invioceData.customerEmailAddress}
              onChange={(e) =>
                setInvioceData((prev) => ({
                  ...prev,
                  customerEmailAddress: e.target.value,
                }))
              }
              className="md:w-[400px]"
              placeholder="Customer Email Address"
            />
          </Chip>
          <Chip>
            <Lable title="Customer’s Phone Number" />
            <Input
              value={invioceData.customerPhoneNumber}
              onChange={(e) =>
                setInvioceData((prev) => ({
                  ...prev,
                  customerPhoneNumber: Number(e.target.value),
                }))
              }
              className="md:w-[400px]"
              placeholder="Customer’s Phone Number"
            />
          </Chip>
        </section>

        {/* Invoice Dates */}
        <section className="flex flex-col md:flex-row md:items-center mt-6 gap-6 md:mt-[36px] md:gap-[210px]">
          <Chip>
            <Lable title="Issued Date" />
            <IssuedDate setInvioceData={setInvioceData} />
          </Chip>
          <Chip>
            <Lable title="Due Date" />
            <DueDate setInvioceData={setInvioceData} />
          </Chip>
        </section>

        {/* Currency Dropdown */}
        <section className="flex items-center mt-6 md:mt-[36px] gap-[210px]">
          <Chip>
            <Lable title="Currency" />
            <SelectDropdown />
          </Chip>
        </section>
       

        {/* Product / Service Table Section */}
        <section className=" mt-6 md:mt-[32px] space-y-6 w-full">
          <ProductTable
            invoiceType={invoiceType}
            setInvioceData={setInvioceData}
          />
        </section>

        {/* Action Buttons */}
        <section className="w-full flex gap-5 items-center mt-[52px] justify-between md:justify-end">
          {/* Refresh invoice form */}
          <button
            onClick={handleRefresh}
            className="flex items-center gap-2 cursor-pointer"
          >
            <p className="font-normal text-base text-[#767676]">Refresh</p>
            <Image
              src="/icon/refresh.svg"
              alt="icon"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </button>

          {/* Save draft without submission */}
          <button className="bg-[#EFEFEF] cursor-pointer px-4 py-4 md:px-6 rounded-[8px] text-[#444444] font-semibold text-base">
            Save as draft
          </button>

          {/* Open preview modal/dialog */}
          <PreviewDailog />
        </section>
      </div>
    </div>
  );
};

export default Index;

/**
 * Label component for consistent labeling across the invoice form.
 * Abstracted to allow for future enhancement (e.g., tooltips or accessibility support).
 */
const Lable = ({ title }: { title: string }) => {
  return <label className="text-[#444444] font-bold text-base">{title}</label>;
};

const Chip = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-2 md:gap-5">{children}</div>;
};
