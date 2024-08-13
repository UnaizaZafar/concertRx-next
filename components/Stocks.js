import React from "react";
import Image from "next/image";
import screen from "../images/screen.svg";

import msgs from "../images/account_tree_black_24dp 1 (1).svg";
const Stocks = () => {
  return (
    <>
      <div className="h-full flex  justify-center items-center">
        <Image alt='' src={screen} className=""></Image>
        <div className="flex flex-col gap-2 bg-[#FAFAFA] py-48 pl-32 pr-24 ">
          <div className="flex gap-2 items-center">
            <Image alt='' src={msgs}></Image>
            <p>SMS. An easy, effective channel.</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-5xl">Out of stocks?</h1>
            <p>
              SMS. An easy, effective channel. With ConcertRx, you can
              effortlessly embed SMS notifications into your workflow, keeping
              your customers in the loop, happy and returning.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stocks;
