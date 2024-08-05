import React from "react";
import TopBar from "./TopBar";
import Cards from "./Cards";
import seeLess from "../images/Icon wrap.svg";
import seeMore from "../images/Icon wrap (1).svg";

import Image from "next/image";
import Hero from "./Hero";
import tick from "../images/done_black_24dp 3.svg";
// import { useState } from "react/cjs/react.development";
import { useRef, useEffect, useState } from "react";
const FAQstyles = {
  WebkitLineClamp: 1,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};
const Pricing = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-bg-img h-screen gap-12 flex flex-col">
        <TopBar bg="bg-[#27272A]" text="text-[#27272A]" />
        <div className=" h-full gap-4 flex flex-col items-center">
          <div className="flex flex-col gap-4  max-w-[624px] text-center">
            <h1 className="font-bold text-[64px] leading-[70px] text-[#27272A]">
              Plans & Pricing{" "}
            </h1>
            <p className="font-normal text-lg">
              We’re working on a suit of tools to make managing complex systems
              easier, for everyone. We can’t wait to hear what you think
            </p>
          </div>
        </div>
        <div className="p-20 flex  justify-between flex-wrap">
          <Cards
            buttonTag="Get Started"
            title="Standard"
            description="Hit the Ground Running"
            price="$29.95"
            bgColor="bg-[#48b649]"
            textColor="text-white"
          >
            {/* <ul className="flex flex-col gap-6 font-normal text-sm">
              <li>{tick} Unlimited boards</li>
              <li>{tick} Free SENDER ID </li>
              <li>{tick} IP address login</li>
              <li>{tick} Buy SMS credits for $0.1 / credit</li>
              <li>{tick} GST included in pricing</li>
              <li>{tick} Credits do not expire</li>
            </ul> */}
          </Cards>
          <Cards
            buttonTag="Coming Soon"
            title="Pro"
            description="Power up your business"
            price="$39.95"
          >
            {/* <ul className="flex flex-col gap-6 font-normal text-sm">
              <li>{tick} Everything in Standard</li>
              <li>{tick} Two way messaging </li>
              <li>{tick} One chatbot</li>
            </ul> */}
          </Cards>
          <Cards
            buttonTag="Coming Soon"
            title="Pro Plus"
            description="Customized just for you"
            price="$89.95"
          >
            {/* <ul className="flex flex-col gap-6 font-normal text-sm">
              <li>{tick} Everything in Pro</li>
              <li>{tick} Print address labels locally </li>
              <li>{tick} Integration with Australia Post</li>
            </ul> */}
          </Cards>
        </div>
        <div className="px-20">
          <div className="h-full p-6 rounded-lg bg-[#fafafa]">
            <h1 className="font-bold text-lg text-[#27272a]">Note:</h1>
            <ul className="font-normal text-sm text-[#52525b] list-decimal">
              <li>Pricing is subject to change.</li>
              <li>Transactions are processed in Australian Dollars (AUD).</li>
              <li>
                We use Stripe to process your payment. It's the same payment
                provider used by products such as Twitter, Pinterest, and Lyft.
                We do not handle your credit card information directly.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-5xl text-center text-[#27272a]">
              Frequently Asked Questions
            </h1>
            <p className="font-normal text-lg text-center text-[#52525b]">
              Everything you need to know about the product and billing.
            </p>
          </div>
          <div className='flex flex-col'>
            <div className="text-left flex flex-col  gap-8 justify-center items-center">
              <div className="flex items-center">
                <h1
                  className="text-lg font-medium"
                  style={isOpen ? null : FAQstyles}
                >
                  {" "}
                  Is there a Free Trail available? <br />
                  <span className="font-normal text-base">
                    {" "}
                    Yes, you can try us for free for 30 days. If you want, we’ll
                    provide you with a free, personalized 30-minute onboarding
                    call to get you up and running as soon as possible.
                  </span>{" "}
                </h1>
                <button onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <Image src={seeLess} /> : <Image src={seeMore} />}
                </button>
              </div>
              <hr />
              <div className="flex items-center">
                <h1
                  className="text-lg font-medium"
                  style={isOpen ? null : FAQstyles}
                >
                  {" "}
                  Can I change my plan later? <br />
                  <span className="font-normal text-base">
                    {" "}
                    Yes, you can try us for free for 30 days. If you want, we’ll
                    provide you with a free, personalized 30-minute onboarding
                    call to get you up and running as soon as possible.
                  </span>{" "}
                </h1>
                <button onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <Image src={seeLess} /> : <Image src={seeMore} />}
                </button>
              </div>
              <div className="flex items-center">
                <h1
                  className="text-lg font-medium"
                  style={isOpen ? null : FAQstyles}
                >
                  {" "}
                  What is your cancellation policy? <br />
                  <span className="font-normal text-base">
                    {" "}
                    Yes, you can try us for free for 30 days. If you want, we’ll
                    provide you with a free, personalized 30-minute onboarding
                    call to get you up and running as soon as possible.
                  </span>{" "}
                </h1>
                <button onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <Image src={seeLess} /> : <Image src={seeMore} />}
                </button>
              </div>
              <div className="flex items-center">
                <h1
                  className="text-lg font-medium"
                  style={isOpen ? null : FAQstyles}
                >
                  {" "}
                  Can other info be added to an invoice? <br />
                  <span className="font-normal text-base">
                    {" "}
                    Yes, you can try us for free for 30 days. If you want, we’ll
                    provide you with a free, personalized 30-minute onboarding
                    call to get you up and running as soon as possible.
                  </span>{" "}
                </h1>
                <button onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <Image src={seeLess} /> : <Image src={seeMore} />}
                </button>
              </div>
              <div className="flex items-center">
                <h1
                  className="text-lg font-medium"
                  style={isOpen ? null : FAQstyles}
                >
                  {" "}
                  How does billing work? <br /> 
                  <span className="font-normal text-base">
                    {" "}
                    Yes, you can try us for free for 30 days. If you want, we’ll
                    provide you with a free, personalized 30-minute onboarding
                    call to get you up and running as soon as possible.
                  </span>{" "}
                </h1>
                <button onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <Image src={seeLess} /> : <Image src={seeMore} />}
                </button>
              </div>
              <div className="flex items-center">
                <h1
                  className="text-lg font-medium"
                  style={isOpen ? null : FAQstyles}
                >
                  {" "}
                  How do i change my account email? <br />
                  <span className="font-normal text-base">
                    {" "}
                    Yes, you can try us for free for 30 days. If you want, we’ll
                    provide you with a free, personalized 30-minute onboarding
                    call to get you up and running as soon as possible.
                  </span>{" "}
                </h1>
                <button onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <Image src={seeLess} /> : <Image src={seeMore} />}
                </button>
              </div>
            </div>

          
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
