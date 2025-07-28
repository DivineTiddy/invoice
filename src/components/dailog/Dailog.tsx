import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export function PreviewDailog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-[#248567] cursor-pointer py-4 px-4 md:px-6 rounded-[8px] text-[#EFFFFA] font-semibold text-base">
          Generate Invoice
        </button>
      </DialogTrigger>
      <DialogContent className="md:w-[50%] text-[#444444] h-[700px] px-1 md:px-[63px] py-[43px] overflow-auto">
        <div className="mt-[20px]">
          <section className="w-full flex justify-between item-center">
            <div>
              <Image
                src="\image\image-13.svg"
                alt="image"
                width={80}
                height={80}
                className="rounded-full"
              />
              <p className="mt-[16px]  font-bold text-lg md:text-[20px]">
                JustOcean Design Agency
              </p>
              <Text>justoceanbiz@gmail.com</Text>
              <Text>4 Ikeja City Mall, Lagos, Nigeria.</Text>
              <Text>+234-7067476896</Text>
            </div>
            <div className="spayce-y-6 ">
              <DialogTitle className="text-[#248567] font-bold text-2xl">
                INVOICE
              </DialogTitle>
              <span className="flex items-center justify-start gap-1 md:gap-4">
                <Text>Invoice No. :</Text>
                <p className=" font-semibold  text-base">01</p>
              </span>
              <span className="flex items-center justify-start gap-1 md:gap-4">
                <Text>Issued Date :</Text>
                <p className=" font-semibold text-base">02 - 06 - 2025</p>
              </span>
              <span className="flex items-center justify-start gap-1 md:gap-8">
                <Text>Due Date :</Text>
                <p className=" font-semibold text-base">02 - 06 - 2025</p>
              </span>
            </div>
          </section>
          <section className="mt-[60px]">
            <p className="font-normal text-base text-[#767676]">Subject</p>
            <p className="font-semibold text-base ">Design Job</p>
            <p className="mt-[38px] font-normal text-base text-[#767676]">
              Bill to
            </p>
            <p className="font-semibold text-base ">Michael Jones</p>
            <Text>4 Kenz Street, Lagos.</Text>
            <Text>wrt@gmail.com</Text>
            <Text>+234-7067476896</Text>
          </section>
          <section className="mt-[60px]">
            <Table>
              <TableHeader className="">
                <TableRow className="bg-[#248567]  px-2 py-4  font-bold text-base ">
                  <TableHead className=" text-[#EAEAEA]"># Product</TableHead>
                  <TableHead className="text-right text-[#EAEAEA]">
                    Qty
                  </TableHead>
                  <TableHead className="text-right text-[#EAEAEA]">
                    Rate
                  </TableHead>
                  <TableHead className="text-right text-[#EAEAEA]">
                    Tax
                  </TableHead>
                  <TableHead className="text-right text-[#EAEAEA]">
                    Amount
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="mt-[20px] px-2 py-4  font-normal text-base ">
                  <TableCell>
                    {" "}
                    <p className="w-[130px] overflow-x-auto">
                      Full Website Design and prototype
                    </p>
                  </TableCell>
                  <TableCell className="text-right">1</TableCell>
                  <TableCell className="text-right">100</TableCell>
                  <TableCell className="text-right">0</TableCell>
                  <TableCell className="text-right">100</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>
          <section className="mt-[65px] flex justify-between items-start">
            <div>
              <Text>Note/Conditions</Text>
              <p className=" font-normal text-base w-[130px]">
                Work commences immediately after payment
              </p>
            </div>
            <div className="space-y-5">
              <span className="flex items-center gap-6 justify-between">
                <Text>Subtotal</Text>
                <p className="text-[#282828] font-normal text-base">N1000.00</p>
              </span>
              <span className="flex items-center gap-6 justify-between">
                <Text>Discount</Text>
                <p className="text-[#282828] font-normal text-base">0.00</p>
              </span>
              <span className="flex items-center gap-6 justify-between">
                <Text>Amount Paid</Text>
                <p className="text-[#282828] font-normal text-base">0.00</p>
              </span>
              <span className="bg-[#248567] text-[#EAEAEA] p-2 flex items-center gap-6 justify-between ">
                <p className=" font-bold text-base">Balance Due</p>
                <p className="font-bold text-lg">N1000.00</p>
              </span>
            </div>
          </section>
          <section className="w-full flex gap-5 items-center mt-[52px] justify-end">
            <p className="font-normal text-base text-[#767676]">Refresh</p>
            <Image
              src="\icon\refresh.svg"
              alt="icon"
              width={40}
              height={40}
              className="cursor-pointer"
            />
            <button className="bg-[#EFEFEF] cursor-pointer px-4 py-4 md:px-6 rounded-[8px]  font-semibold text-base">
              Send as Email
            </button>
            <button className="bg-[#248567] cursor-pointer px-4 py-4 md:px-6 rounded-[8px] text-[#EFFFFA] font-semibold text-base">
              Download as PDF
            </button>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const Text = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-[#767676] font-normal text-base">{children}</p>;
};
