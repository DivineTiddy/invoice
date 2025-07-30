import Image from "next/image";
import Link from "next/link";

const HomeDesktopNav = () => {
  return (
    <nav className="flex items-center justify-between w-full px-6 py-3.5 border-[#F4F4F4] border-[1px] rounded-[32px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.25)]">
      <div className="flex gap-[10px] items-center">
        <Image src="\image\logo.svg" alt="image" width={50} height={50} />
        <h2 className="font-bold text-2xl text-[#248567]">JUSTINVOICE</h2>
      </div>
      <div className="hidden md:flex items-center gap-7 text-[#242424] font-semibold text-lg">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">FAQ’s</p>
        <p className="cursor-pointer">About Us</p>
      </div>
      <div className="flex items-center gap-8">
        <p className="cursor-pointer text-[#242424] font-semibold text-lg">
          Login
        </p>
        <Link
          href="/dashboard"
          className="hidden md:block cursor-pointer py-4 px-6 bg-[#248567] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.25)] rounded-[8px] font-semibold text-lg text-[#EFFFFA]"
        >
          Generate Invoice
        </Link>
      </div>
    </nav>
  );
};

export default HomeDesktopNav;
