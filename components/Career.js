import React from "react";

const Career = () => {
  return (
    <>
      <div className="h-full flex flex-col items-center justify-center gap-6">
        <h1 className=" font-bold text-5xl text-center text-[#27272A]">
          Join our team!
        </h1>
        <p className="font-normal text-xl text-center text-[#52525B]">
          All of us at ConcertRx are on the same mission:
        </p>
        <p className="font-medium italic text-xl text-center">
          “To help pharmacies build efficient internal processes, powerful
          patient communication and a robust patient safety posture”
        </p>
        <div className="flex flex-col justify-center gap-3 w-fit ">
          <p className="rounded-xl border border-[#E4E4E7] bg-[#FAFAFA] py-4 px-6">
            Do you love challenging the status quo, every day?
          </p>

          <p className="rounded-xl border border-[#E4E4E7] bg-[#FAFAFA] py-4 px-6">
            Interested in joining a team of smart, fun, and hardworking
            healthTechies?
          </p>

          <p className="rounded-xl border border-[#E4E4E7] bg-[#FAFAFA] py-4 px-6">
            Are you interested in using your super power to build better and
            efficient systems?
          </p>
        </div>
      </div>
    </>
  );
};

export default Career;
