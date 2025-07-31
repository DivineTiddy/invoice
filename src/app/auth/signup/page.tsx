import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#F2F2F2]">
      <div className="space-y-6 bg-[#FDFDFD] drop-shadow-lg py-10 px-8 rounded-2xl">
        <h1 className="font-bold text-center text-2xl text-[#242424]">
          Sign-up
        </h1>
        <button className="flex w-full cursor-pointer items-center justify-center gap-2.5 px-12 py-2.5 rounded-lg border-1 border-[#E3E3E3]">
          <Image src="/icon/google.svg" alt="icon" width={24} height={24} />
          <p className="text-[#242424] font-normal text-base">
            Sign up with Google{" "}
          </p>
        </button>
        <Link
          href="/auth/signup/create-account"
          className="flex w-full cursor-pointer items-center gap-2.5 justify-center px-12 py-2.5 rounded-lg border-1 border-[#E3E3E3]"
        >
          <Image src="/icon/emailIcon.svg" alt="icon" width={24} height={24} />
          <p className="text-[#242424] font-normal text-base">
            Sign up with Email{" "}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default page;
