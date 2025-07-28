import type { ReactElement } from "react";

export type BussinessContentTypes = {
  title: string;
  description: string;
  icon: ReactElement;
};

export type FaqTypes = {
  id: string;
  question: string;
  answer: string;
  openItem: string | null;
  setOpenItem: (value: string | null) => void;
};

export type ForWho = {
  id: number;
  url: string;
  title: string;
  note: string;
};

export type UserPreview = {
  id: number;
  name: string;
  title: string;
  url: string;
  note: string;
  description: string;
};

export type InputType = {
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  className: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type ProductRow = {
  id: number;
  product: string;
  qty: string;
  rate: string;
  tax: string;
};

export type InvoiceData = {
  photo: string;
  subject: string;
  invoiceNo: string;
  billfrom: string;
  emailAddress: string;
  yourPhoneNumber: number | string;
  yourAddress: string;
  billTo: string;
  clientAddress: string;
  customerPhoneNumber: number | string;
  customerEmailAddress: string;
  issuedDate: string;
  dueDate: string;
  currency: string;
  productData: ProductRow[];
  paymentNote: string;
  note: string;
  subtotal: number;
  discount: string;
  amountPaid: string;
  balanceDue: number;
};
