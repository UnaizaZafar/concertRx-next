import React from "react";
import Link from "next/link";
const Cards = ({
  title,
  price,
  description,
  buttonTag,
  children,
  textColor = "text-[#D4d4d8]",
  bgColor = "bg-transparent",
}) => {
  return (
    <>
      <div className="p-11 flex flex-col gap-6 w-full max-w-[405px]  h-[516px]  rounded-lg border border-[#E4E4E7] bg-white bg-opacity-50 backdrop-blur">
        <div className="flex flex-col gap-2 ">
          <h3 className="font-medium text-2xl text-[#27272A]">{title}</h3>
          <p className="font-medium text-xs text-[#27272A]">{description}</p>
        </div>
        <h1 className="font-bold text-5xl text-[#27272a]">
          {price} <span className="font-bold text-base">/month</span>
        </h1>{" "}
        <div className="flex flex-col gap-6 font-normal text-sm">
          {children}
        </div>
       
        <Link
          href=""
          className={`flex items-center justify-center w-full h-10 rounded-3xl py-3 px-4 border ${bgColor} ${textColor} `}
        >
          {buttonTag}
        </Link>
      </div>
    </>
  );
};

export default Cards;
