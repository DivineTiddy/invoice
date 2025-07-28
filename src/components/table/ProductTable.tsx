"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useEffect, useState } from "react";
import { Input } from "../input/Input";
import Image from "next/image";
import { InvoiceData, ProductRow } from "@/types/Types";

// Props definition for ProductTable component
type ProductTableProps = {
  invoiceType: "Product" | "Service";
  setInvioceData: React.Dispatch<React.SetStateAction<InvoiceData>>;
};

/**
 * ProductTable component manages dynamic line items for an invoice.
 * Handles product entry, calculations (tax, subtotal, balance), and updates the parent state.
 */
const ProductTable: React.FC<ProductTableProps> = ({
  setInvioceData,
  invoiceType,
}) => {
  // Line items state
  const [rows, setRows] = useState<ProductRow[]>([
    {
      id: Date.now(),
      product: "",
      qty: "1",
      rate: "",
      tax: "",
    },
  ]);

  const numberOfRows = rows.length;

  // Form-specific state fields
  const [discount, setDiscount] = useState<string>("");
  const [amountPaid, setAmountPaid] = useState<string>("");
  const [note, setNote] = useState<string>("");

  /**
   * Adds a new product line to the invoice.
   * Each line has a unique ID generated from Date.now().
   */
  const addNewLine = (): void => {
    setRows((prev) => [
      ...prev,
      {
        id: Date.now(),
        product: "",
        qty: "1",
        rate: "",
        tax: "",
      },
    ]);
  };

  /**
   * Deletes a product line by its unique ID.
   */
  const deleteLine = (id: number): void => {
    setRows((prev) => prev.filter((row) => row.id !== id));
  };

  /**
   * Handles change for any editable field in a product row.
   * Updates a single field (e.g., qty, rate, tax) for a row.
   */
  const handleChange = (
    id: number,
    field: keyof ProductRow,
    value: string
  ): void => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === id
          ? {
              ...row,
              [field]: value,
            }
          : row
      )
    );
  };

  /**
   * Computes the total amount for a single product row.
   * Formula: qty × rate × (1 + tax%)
   */
  const computeAmount = (row: ProductRow): string => {
    const qty = parseFloat(row.qty) || 0;
    const rate = parseFloat(row.rate) || 0;
    const tax = parseFloat(row.tax) || 0;
    const amount = qty * rate * (1 + tax / 100);
    return amount.toFixed(2);
  };

  /**
   * Calculates the subtotal of all product lines.
   */
  const computeSubtotal = (): number => {
    return rows.reduce((total, row) => {
      const qty = parseFloat(row.qty) || 0;
      const rate = parseFloat(row.rate) || 0;
      const tax = parseFloat(row.tax) || 0;
      const amount = qty * rate * (1 + tax / 100);
      return total + amount;
    }, 0);
  };

  /**
   * Converts the discount string into a number.
   */
  const computeDiscountValue = (): number => {
    return parseFloat(discount) || 0;
  };

  /**
   * Computes the final balance due.
   * Formula: Subtotal - Discount - Amount Paid
   */
  const computeBalanceDue = (): number => {
    const subtotal = computeSubtotal();
    const discountValue = computeDiscountValue();
    const paid = parseFloat(amountPaid) || 0;
    const due = subtotal - discountValue - paid;
    return due > 0 ? due : 0;
  };

  // Precomputed totals for render optimization
  const subtotal = computeSubtotal();
  const balance = computeBalanceDue();

  /**
   * Syncs local state (products, discount, payment, note) with parent invoice state.
   */
  useEffect(() => {
    setInvioceData((pre) => ({
      ...pre,
      amountPaid: amountPaid,
      productData: rows,
      discount: discount,
      subtotal: subtotal,
      balanceDue: balance,
      note: note,
    }));
  }, [amountPaid, rows, discount, subtotal, balance, note]);

  return (
    <>
      {/* <ScrollAreaHorizontalDemo/> */}

      {/* Main table for line items */}

      <div className="  w-full">
        <Table className="w-[1100px] md:w-full">
          <TableHeader>
            <TableRow className="border-0 bg-[#EEEEEE] text-[#444444] font-bold text-base py-3">
              <TableHead>
                {numberOfRows ? numberOfRows : "#"} {invoiceType}
              </TableHead>
              <TableHead>Qty</TableHead>
              <TableHead>Rate</TableHead>
              <TableHead>Tax</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                className="text-[#242424] font-normal text-base"
              >
                {/* Product name/description */}
                <TableCell className="w-[350px]">
                  <Input
                    className="w-[90%]"
                    placeholder="Full Website Design and development"
                    value={row.product}
                    onChange={(e) =>
                      handleChange(row.id, "product", e.target.value)
                    }
                  />
                </TableCell>

                {/* Quantity */}
                <TableCell>
                  <Input
                    className="w-[90%]"
                    type="number"
                    placeholder="1"
                    value={row.qty}
                    onChange={(e) =>
                      handleChange(row.id, "qty", e.target.value)
                    }
                  />
                </TableCell>

                {/* Rate per unit */}
                <TableCell>
                  <Input
                    className="w-[90%]"
                    type="number"
                    placeholder="0"
                    value={row.rate}
                    onChange={(e) =>
                      handleChange(row.id, "rate", e.target.value)
                    }
                  />
                </TableCell>

                {/* Tax percentage */}
                <TableCell>
                  <div className="flex items-center gap-3 w-[90%] outline-0 font-normal text-base text-[#242424] rounded-[8px] p-2.5 border-[1px] border-[#E4E4E4] focus-within:border-[#248567]">
                    <input
                      type="number"
                      className="w-[90%] h-full outline-0 border-0"
                      placeholder="0"
                      value={row.tax}
                      onChange={(e) =>
                        handleChange(row.id, "tax", e.target.value)
                      }
                    />
                    %
                  </div>
                </TableCell>

                {/* Computed amount */}
                <TableCell>
                  <Input
                    className="w-[90%] bg-gray-100 cursor-not-allowed"
                    value={`₦${computeAmount(row)}`}
                    disabled
                  />
                </TableCell>

                {/* Delete row button */}
                <TableCell>
                  <Image
                    src="/icon/delete.svg"
                    alt="delete"
                    width={44}
                    height={44}
                    className="cursor-pointer"
                    onClick={() => deleteLine(row.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Add new product row button */}
      <button
        onClick={addNewLine}
        className="mt-4 w-[170px] md:w-[243px] flex items-center outline-0 gap-2.5 text-[#248567] cursor-pointer font-bold text-sm border-[1px] border-[#EAEAEA] p-2.5 rounded-[8px]"
      >
        <Image src="/icon/plus.svg" alt="add" width={20} height={20} />
        Add New Line
      </button>

      {/* Invoice Summary Section */}
      <section className="mt-6 md:mt-[32px]">
        <div className="flex flex-col-reverse md:flex-row  md:items-start md:justify-between">
          {/* Notes or terms */}
          <div className="flex md:w-[30%] flex-col gap-5">
            <label className="text-[#444444] font-bold text-base">
              Note/Conditions
            </label>
            <textarea
              onChange={(e) => setNote(e.target.value)}
              placeholder="Leave a note..."
              className="bg-[#FDFDFD] rounded-[8px] h-[110px] py-2.5 outline-0 px-4 border-[1px] border-[#E4E4E4] focus:border-[#248567]"
            />
          </div>

          {/* Pricing Summary */}
          <div className="space-y-3.5 md:w-[30%]">
            <div className="flex items-center justify-between gap-3 ">
              <p className="text-[#767676] font-normal text-base">Subtotal</p>
              <Input
                placeholder="0.00"
                className="text-end md:text-start md:w-[60%] border-none"
                value={`₦${subtotal.toFixed(2)}`}
                disabled
              />
            </div>

            <div className="flex items-center justify-between gap-3">
              <p className="text-[#767676] font-normal text-base">Discount</p>
              <Input
                className=" w-[120px] md:w-[60%]"
                placeholder="0.00"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between gap-3">
              <p className="text-[#767676] font-normal text-base">
                Amount Paid
              </p>
              <Input
                className=" w-[120px] md:w-[60%]"
                placeholder="0.00"
                value={amountPaid}
                onChange={(e) => setAmountPaid(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between gap-3">
              <p className="text-[#767676] font-normal text-base">
                Balance Due
              </p>
              <Input
                className=" text-end md:text-start md:w-[60%] text-[#248567] font-semibold text-xl border-none"
                disabled
                value={`₦${balance.toFixed(2)}`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductTable;
