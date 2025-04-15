import React from "react";
import Image from "next/image";
import LogoSystem from "../../../public/image/Logo_System.svg";

const HeaderTitle = () => {
  return (
    <div className="w-full h-auto px-4 pt-8 pb-6">
    {/* <div className="flex flex-col items-center relative self-center w-full h-auto p-4 bg-slate-50 rounded-[16px] justify-center">
        <Image
          className="relative w-[24px] h-[24px] gap-[1px]"
          alt="Header images 1"
          src={require("../../../public/logos/schoolbus-system-logo.jpg")}
        />
        <p className="text-xs font-semibold">SchoolBus Systems</p>
      </div> */}
      <h1 className="font-semibold text-[#1E3A8A] text-center font-inter text-2xl leading-9 w-full"> {/* Change width to full */}
        Ứng dụng hỗ trợ phát hiện Ung thư da
      </h1>
    </div>
  );
};

export default HeaderTitle;
