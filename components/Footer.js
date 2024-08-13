import React from "react";
//import bgHero from "@/images/Rectangle 335.svg";
import logo from "../images/ConcertRx-full-logo.svg";
import Image from "next/image";
import mail from "../images/LoctionIcon.svg";
import location from "../images/MailIcon.svg";
import Link from "next/link";
import GigaRx from "../images/Frame 813056.svg";
import BarCode from "../images/Frame 427318223.svg";

const Footer = () => {
  return (
    <>
      <div className=" px-16 py-16 h-full  flex flex-col gap-16 items-center justify-center backgroundImage">
        <Image alt='' src={logo}></Image>
        <div className="flex gap-8 flex-wrap ">
          <div className="flex flex-col gap-8">
            <h1 className="font-bold text-xl">Products</h1>
            <ul className="font-medium text-sm text-[#3F3F46] leading-loose">
              <li>Login</li>
              <li>Pricing</li>
              <li>----</li>
              <li>----</li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="font-bold text-xl">Use Cases</h1>
            <ul className="font-medium text-sm text-[#3F3F46]  leading-loose">
              <li>Ozempic Waiting List</li>
              <li>Compounding Workflow</li>
              <li>Vaccination Journey</li>
              <li>Special Orders</li>
              <li>Drug Journeys</li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="font-bold text-xl">Company</h1>
            <ul className="font-medium text-sm text-[#3F3F46]  leading-loose">
              <li>About Us</li>
              <li>Careers</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="font-bold text-xl">Support</h1>
            <ul className="font-medium text-sm text-[#3F3F46]  leading-loose">
              <li>
                {" "}
                <span className="font-bold text-sm">Australia</span> 0482 097
                007
              </li>
              <li>
                {" "}
                <span className="font-bold text-sm">United Kingdom</span> 07700
                174007
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="font-bold text-xl">Contact us</h1>
            <ul className="font-medium text-sm text-[#3F3F46]  leading-loose">
              <li className="flex">
                <Image alt='' src={location} className="pr-3"></Image>
                Level 29/66-84 Goulburn St Sydney NSW 2000
              </li>
              <li className="flex underline">
                <Image alt='' src={mail} className="pr-3"></Image>
                finance@gigarx.capital
              </li>
            </ul>
          </div>
        </div>

        <ul className="flex gap-3 text-base font-medium text-[#27272A]  ">
          <li>
            {" "}
            <Link href="/privacy-policy">Privacy Policy </Link>{" "}
          </li>
          <li>|</li>

          <li>
            {" "}
            <Link href="/terms-and-conditions">Terms and Conditions </Link>{" "}
          </li>
          <li>|</li>
          <li>
            {" "}
            <Link href="/agreement">EULA</Link>{" "}
          </li>
          <li>|</li>
          <li>
            {" "}
            <Link href="/security">Security</Link>{" "}
          </li>
          <li>|</li>
          <li>
            {" "}
            <Link href="/">Site Map</Link>{" "}
          </li>
        </ul>
        <Image alt='' src={GigaRx}></Image>
      </div>
      <div className="px-20 py-20 h-full flex flex-col gap-12 w-full max-w-[1062px]  mx-auto">
        <div className="flex justify-between ">
          <div className="flex flex-col ">
            <h1 className="font-bold text-[40px]">
              Want to receive product updates?
            </h1>
            <p className="w-96">
              To opt-in to our text message update service. Text YES to{" "}
              <span className="underline"> +61482 097 007 </span> OR Scan the QR
              code. You can send STOP to unsubscribe anytime.{" "}
            </p>
          </div>
          <Image alt='' src={BarCode} className="justify-end"></Image>
        </div>
        <p className="text-center">
          Copyright © 2022 GigaRx Capital Pty Ltd and/or its subsidiaries or
          affiliates. All Rights Reserved. ConcertRx, ScriptCards, ShrinkMan,
          StoreOps and certain product names used herein are trademarks or
          registered trademarks of GigaRx Capital Pty Ltd and/or one of its
          subsidiaries or affiliates in Australia and/or other countries. Any
          other trademarks contained here in are the property of their
          respective owners.
        </p>
      </div>
    </>
  );
};

export default Footer;
