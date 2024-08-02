import React from "react";
import Image from "next/image";
import screen from "../images/screen.svg";
import patient from '../images/personal_injury_black_24dp 1.svg'
const PatientJourney = () => {
  return (
    <>
      <div className="h-full flex flex-row-reverse justify-center items-center">
        <Image src={screen} className=""></Image>
        <div className="flex flex-col gap-2 bg-[#FAFAFA] py-48 pl-32 pr-24 ">
          <div className="flex gap-2 items-center">
            <Image src={patient}></Image>
            <p>Manage Pharmacies</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-5xl">Patient’s Journey Management</h1>
            <p>
              ConcertRx modernizes how pharmacies manage workflow, medication
              waiting lists and patient journeys by efficiently triggering SMS
              notifications by dragging a card on a visual interface or
              autonomously based on rules.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientJourney;
