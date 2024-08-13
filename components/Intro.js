import React from "react";
import Footer from "./Footer";
import Link from "next/link";
import TopBar from "./TopBar";
import star from "../images/Star 1.svg";
import arrowUpwards from "../images/Group 39874.svg";
import arrowDownwards from "../images/Group 39876.svg";
import arrow from "../images/Arrow 2.svg";
import Image from "next/image";
import VideoScreen from "../images/Group 2.svg";
import thumbsup from "../images/thumbsup.svg";
import Stocks from "./Stocks";
import WorkFlow from "./WorkFlow";
import bolt from "../images/bolt_black_24dp 1.svg";
import PatientJourney from "./PatientJourney";
import arrowBack from "../images/keyboard_arrow_down_black_24dp 2.svg";
import arrowForward from "../images/keyboard_arrow_down_black_24dp 1.svg";

const Intro = () => {
  return (
    <>
      <div className="flex flex-col gap-24">
        <div className="bg-[#48B64908] h-screen flex flex-col">
          <TopBar />
          <div className=" h-full gap-4 flex flex-col justify-center items-center">
            <div className="flex gap-2">
              <Image alt='' src={star}></Image>
              <p>Trusted by over 1,000 customers</p>
            </div>
            <div className="flex flex-col gap-4 w-full max-w-[624px] text-center">
              <h1 className="font-bold text-[64px] leading-[70px] text-[#27272A]">
                Powerful Patient{" "}
                <span className="text-[#48B649]"> Experience.</span>
              </h1>
              <p className="font-normal text-lg">
                ConcertRx modernizes how pharmacies manage workflow, medication
                waiting lists, and patient journeys by efficiently triggering
                SMS notifications by dragging a card on a visual interface or
                autonomously based on rules.
              </p>
            </div>
            <div className="flex gap-2">
              <Link
                className="font-bold text-base flex justify-center items-center bg-[#48b649] rounded-3xl py-4 px-8 text-white"
                href=""
              >
                Try ConcertRx now
              </Link>
              <Link
                className="font-bold text-base flex items-center justify-center border border-[#48b649] rounded-3xl py-4 px-8 text-[#48b649]"
                href=""
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
        <div className="h-full px-24">
          <div className=" gap-10 flex flex-col h-full">
            <div className="flex justify-center">
              <Image alt='' src={thumbsup}></Image>
              <p>It’s Simple</p>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-[#27272A] font-bold text-5xl text-center">
                Easy to get started
              </h1>
              <p className="text-[#52525B] font-normal text-lg text-center">
                We made ConcertRx easy to use. Like, really easy.
              </p>
            </div>
            <div className="flex items-center  gap-5">
              <div className="flex flex-col  items-center">
                <Image alt='' src={arrowUpwards}></Image>
                <h1 className="font-medium text-sm text-center">
                  Smart Workflow
                </h1>
                <p className="font-normal text-xs text-center">
                  Adding column of your choice makes it easier to manage the
                  work.
                </p>
              </div>
              <Image alt='' src={VideoScreen}></Image>
              <div className="flex flex-col items-center">
                <h1 className="font-medium text-sm text-center">
                  Smart waiting list
                </h1>
                <p className="font-normal text-xs text-center">
                  Sending text notifications to customers saves a lot of time.{" "}
                </p>
                <Image alt='' src={arrowDownwards}></Image>
              </div>
            </div>
            <div className="flex flex-col self-center items-center">
              <Image alt='' src={arrow}></Image>
              <h1 className="font-medium text-sm text-center">
                Smart patient journeys
              </h1>
              <p className="font-normal text-xs text-center">
                Walk-in patients get notified by receiving text messages on each
                and every step.
              </p>
            </div>
          </div>
        </div>
        <div className="h-full px-28 ">
          <WorkFlow />
        </div>
        <div className="h-full px-28 ">
          <PatientJourney />
        </div>
        <div className="h-full px-28 ">
          <Stocks />
        </div>
        <div className="h-full  ">
          <div className="flex flex-col gap-2">
            <div className="flex justify-center gap-2">
              <Image alt='' src={star}></Image>
              <p className="font-medium text-sm text-center">
                Trusted by over 1,000 customers
              </p>
            </div>
            <h1 className="font-bold text-5xl text-center mb-10">
              But don't take it from us…
            </h1>
            <div className="bg-[#fafafa] text-center py-12 px-20 flex flex-col gap-7">
              <p className="text-lg font-normal">
                “Their system for getting rapid antigen tests was easy to
                register and for pickng was hassle free. I appriciate that they
                sell australian made test as well.”
              </p>
              <div>
                <h3 className="text-sm font-bold">Teowai Rathai</h3>
                <p className="text-sm font-normal">
                  Kohler, Hegmann and Littel
                </p>
              </div>
              <div className="flex self-center">
                <Link href="">
                  {" "}
                  <Image alt='' src={arrowBack}></Image>
                </Link>
                <Link href="">
                  {" "}
                  <Image alt='' src={arrowForward}></Image>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full">
          <div className="flex-grow flex flex-col gap-2  w-full max-w-[630px] mx-auto text-center items-center">
            <div className="flex justify-center gap-2">
              <Image alt='' src={bolt}></Image>
              <p className="font-medium text-sm text-center">Lets Connect</p>
            </div>
            <h1 className="font-bold text-5xl text-center flex ">
              Ready to Make Music?
            </h1>
            <p className="text-lg font-normal text-center">
              Your success in this new era of pharmacy will be defined by your
              ability to challenge outdated business processes and ask what
              really works. You can either use a pen and paper to manage an
              Ozempic waiting list or you can use ConcertRx and save time, money
              and hair!.
            </p>
            <Link
              href=""
              className=" bg-[#48B649] w-36 flex self-center py-4 px-8 text-white rounded-3xl text-center"
            >
              <p className="font-medium text-sm ">Start for free</p>
            </Link>
            <p className="font-normal text-xs text-center">
              Get 50 credits now.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
