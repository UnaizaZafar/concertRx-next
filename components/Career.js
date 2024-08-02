import React from "react";

const Career = () => {
  return (
    <>
      <div className="h-full px-80 py-24 flex flex-col gap-6">
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
        <div className="flex flex-col justify-center gap-3">
          <div className="rounded-xl border border-[#E4E4E7] bg-[#E4E4E7] py-4 px-6">
            <p>Do you love challenging the status quo, every day?</p>
          </div>
          <div className="rounded-xl border border-[#E4E4E7] bg-[#E4E4E7] py-4 px-6">
            <p>
              Interested in joining a team of smart, fun, and hardworking
              healthTechies?
            </p>
          </div>
          <div className="rounded-xl border border-[#E4E4E7] bg-[#E4E4E7] py-4 px-6">
            <p>
              Are you interested in using your super power to build better and
              efficient systems?
            </p>
          </div>
        </div>

       
      </div>
    </>
  );
};

export default Career;
