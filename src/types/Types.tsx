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
