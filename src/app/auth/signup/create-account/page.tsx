import { Input } from "@/components/input/Input";
import BackButton from "@/shared/BackButton";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full h-screen lg:h-auto px-3 md:px-0 py-10 md:py-20 flex justify-center  items-center bg-[#F2F2F2]">
      <section className="w-full md:w-3/5 lg:w-2/5">
    <BackButton/>
        <div className="w-full md:mt-5 md:w-auto space-y-6 bg-[#FDFDFD] drop-shadow-lg py-10 px-4 md:px-8 rounded-2xl">
          <h1 className="text-[#242424] text-center font-bold text-2xl">
            Create Account
          </h1>
          {/* First And Last Name */}
          <div className="flex   md:items-center flex-col md:flex-row md:justify-between md:gap-5">
            <div className="flex flex-col gap-3">
              <Lable title="First Name" />
              <Input placeholder="Chinedu" className="w-full" />
            </div>
            <div className="flex flex-col gap-3">
              <Lable title="Last Name" />
              <Input placeholder="Ozulu" className="w-full" />
            </div>
          </div>
          {/* Email field */}
          <div className="flex flex-col gap-3 w-full">
            <Lable title="Email Address" />
            <Input placeholder="abc@mail.com" className="w-full" />
          </div>
          {/* Create password */}
          <div className="flex flex-col gap-3 w-full">
            <Lable title="Create password" />
            <Input placeholder="xxxxxxxx" className="w-full" />
          </div>
          {/* Confirm password*/}
          <div className="flex flex-col gap-3 w-full">
            <Lable title="Confirm password" />
            <Input placeholder="xxxxxxxx" className="w-full" />
          </div>
          <button className="w-full cursor-pointer py-4 bg-[#248567] drop-shadow-lg rounded-lg text-[#EFFFFA] font-semibold text-base">
            Create Account
          </button>
          <div className="w-full flex justify-center items-center gap-2 text-[#242424] font-normal text-base ">
            <p>Already have an account?</p>
            <Link href="/auth/login" className="font-bold">
              Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;

const Lable = ({ title }: { title: string }) => {
  return (
    <label className="text-[#242424] font-normal text-base">{title}</label>
  );
};
