import Career from "@/components/Career";
import TopBar from "@/components/TopBar";
import React from "react";

const Index = () => {
  return (
    <>
      <div className='flex flex-col gap-14'>
      <TopBar />
      <Career />
      <div className="h-full flex flex-col gap-16 items-center bg-[#FAFAFA] p-20 ">
        <div className=" flex flex-col  max-w-[624px] self-center">
          <h1 className="font-bold text-4xl text-center text-[#27272A]">
            Create amazing things with us!
          </h1>
          <p className="font-normal text-lg text-center">
            We’re always eager to meet fresh talent, so send us a brief message
            introducing your super power!
          </p>
        </div>
        <div className="flex flex-col gap-4 justify-center ">
          <form action="" className='flex flex-col gap-4 w-fit'>
            <div className="flex justify-between gap-4 mobile:flex-col">
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-lg border border-[#E4E4E7] py-4 px-5"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="rounded-lg border border-[#E4E4E7] py-4 px-5"
              />
            </div>
            <div className="flex flex-col gap-4 items-end">
              <textarea
                type="text"
                placeholder="Your Message..."
                className="rounded-lg border border-[#E4E4E7] w-full h-32 py-4 px-5"
              />
              <button className="bg-[#48B649] py-3 px-6 rounded-full w-fit text-white text-base font-medium mobile:w-full">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default Index;
