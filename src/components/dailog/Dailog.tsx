import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogClose,
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
        <button className="bg-[#248567] cursor-pointer py-4 px-3 rounded-[8px] text-[#EFFFFA] font-semibold text-base">
          Generate Invoice
        </button>
      </DialogTrigger>
      <DialogContent className=" md:w-[50%] text-[#444444] h-[700px] px-5 md:px-[63px] py-[23px] overflow-auto">
        <div className="w-full flex justify-end border-b-1 border-gray-300 py-3 ">
          <DialogClose className="cursor-pointer">
            <Image
              src="/icon/closeIcon.svg"
              alt="icon"
              width={24}
              height={24}
            />
          </DialogClose>
        </div>
        <div className="mt-[5px]">
          <section className="w-full flex justify-between gap-10 md:gap-0 item-center">
            <div>
              <Image
                src="\image\image-13.svg"
                alt="image"
                width={0}
                height={0}
                className="rounded-full w-[40px] h-[40px] md:w-[80px] md:h-[80px]"
              />
              <p className="mt-2.5 md:mt-[16px] mb-2 md:mb-0 font-bold text-base md:text-[20px]">
                JustOcean Design Agency
              </p>
              <Text>justoceanbiz@gmail.com</Text>
              <Text>4 Ikeja City Mall, Lagos, Nigeria.</Text>
              <Text>+234-7067476896</Text>
            </div>
            <div className="spayce-y-6 ">
              <DialogTitle className="text-[#248567] font-bold text-lg md:text-2xl">
                INVOICE
              </DialogTitle>
              <span className="flex items-center justify-start gap-1 md:gap-4">
                <Text>Invoice No. :</Text>
                <p className=" font-semibold text-sm md:text-base">01</p>
              </span>
              <span className="flex items-center justify-start gap-1 md:gap-4">
                <Text>Issued Date :</Text>
                <p className=" font-semibold text-sm md:text-base">
                  02 - 06 - 2025
                </p>
              </span>
              <span className="flex items-center justify-start gap-1 md:gap-8">
                <Text>Due Date :</Text>
                <p className=" font-semibold text-sm md:text-base">
                  02 - 06 - 2025
                </p>
              </span>
            </div>
          </section>
          <section className="mt-5 md:mt-[60px]">
            <p className="font-normal text-base text-[#767676]">Subject</p>
            <p className="font-semibold text-base ">Design Job</p>
            <p className="mt-5 md:mt-[38px] font-normal text-base text-[#767676]">
              Bill to
            </p>
            <p className="font-semibold text-base ">Michael Jones</p>
            <Text>4 Kenz Street, Lagos.</Text>
            <Text>wrt@gmail.com</Text>
            <Text>+234-7067476896</Text>
          </section>
          <section className="mt-10 md:mt-[60px] py-3 border-b-1 border-[#E5E5E5]">
            <Table>
              <TableHeader className="">
                <TableRow className="bg-[#248567]  px-2 py-4  font-bold text-sm md:text-base ">
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
                <TableRow className="mt-[20px] px-2 py-4  font-normal text-sm md:text-base ">
                  <TableCell>
                    {" "}
                    <p className=" py-2 md:w-auto overflow-x-auto">
                      Full Website Design and prototype
                    </p>
                  </TableCell>
                  <TableCell className="text-right py-2">1</TableCell>
                  <TableCell className="text-right py-2">100</TableCell>
                  <TableCell className="text-right py-2">0</TableCell>
                  <TableCell className="text-right py-2">100</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>
          <section className="mt-10 md:mt-[65px] flex justify-between items-start">
            <div className="space-y-7">
              <div>
                <Text>Payment Account Details</Text>
                <p className="mt-2 font-normal text-sm md:text-base w-[130px] md:w-auto">
                  9020538305 <br /> Opay <br /> Chinedu Joseph Ozulu
                </p>
              </div>
              <div>
                <Text>Note/Conditions</Text>
                <p className=" mt-2 font-normal text-sm md:text-base w-[130px] md:w-auto">
                  Work commences immediately after payment
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <span className="flex items-center gap-6 justify-between">
                <Text>Subtotal</Text>
                <p className="text-[#282828] font-normal  text-sm md:text-base">
                  N1000.00
                </p>
              </span>
              <span className="flex items-center gap-6 justify-between">
                <Text>Discount</Text>
                <p className="text-[#282828] font-normal  text-sm md:text-base">
                  0.00
                </p>
              </span>
              <span className="flex items-center gap-6 justify-between">
                <Text>Amount Paid</Text>
                <p className="text-[#282828] font-normal  text-sm md:text-base">
                  0.00
                </p>
              </span>
              <span className="bg-[#248567] text-[#EAEAEA] p-2 flex items-center gap-6 justify-between ">
                <p className=" font-bold text-sm md:text-base">Balance Due</p>
                <p className="font-bold  text-sm md:text-base">N1000.00</p>
              </span>
            </div>
          </section>
          <section className="w-full flex gap-5 items-center mt-[52px] justify-end">
            <p className="font-normal text-base text-[#767676] hidden md:block">
              Refresh
            </p>
            <Image
              src="\icon\refresh.svg"
              alt="icon"
              width={40}
              height={40}
              className="cursor-pointer hidden md:block"
            />
            <button className="bg-[#EFEFEF] cursor-pointer py-4 px-4 rounded-[8px]  font-semibold text-[15px]">
              Send as Email
            </button>
            <button className="bg-[#248567] cursor-pointer py-4 px-4 rounded-[8px] text-[#EFFFFA] font-semibold text-[15px]">
              Download as PDF
            </button>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const Text = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-[#767676] font-normal text-sm md:text-base">
      {children}
    </p>
  );
};
