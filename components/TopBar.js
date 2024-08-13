import React from "react";
import logo from "../images/Navbar logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TopBar = ({ bg = "bg-[#48B649]", text = "text-[#48B649]" }) => {
  const pathname = usePathname();

  return (
    <>
      <div className="flex  gap-6 justify-between px-20 py-7">
        <Image alt='' src={logo} className=" "></Image>
        <ul className="flex gap-6 items-center">
          <li>
            <Link
              className={`link ${
                pathname === "/products"
                  ? "no-underline text-[#48B649]  "
                  : "no-underline text-[#27272A] "
              }`}
              href="/products"
            >
              {" "}
              Products{" "}
            </Link>
          </li>
          <li>
            <Link
              className={`link ${
                pathname === "/our-story"
                  ? "no-underline text-[#48B649] "
                  : "no-underline text-[#27272A]  "
              }`}
              href="/our-story"
            >
              Our Story{" "}
            </Link>
          </li>
          <li>
            <Link
              className={`link ${
                pathname === "/pricing"
                  ? "no-underline text-[#48B649] "
                  : "no-underline text-[#27272A]  "
              }`}
              href="/pricing"
            >
              Pricing{" "}
            </Link>
          </li>
        </ul>
        <div className="flex gap-6 items-center">
          <Link href=''>
            {" "}
            <h1 className={`font-medium text-base ${text}`}>Login</h1>
          </Link>
          <Link href=''>
            <div className={`${bg} text-white rounded-[22px] py-3 px-6`}>
              <h1>Get Started</h1>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopBar;
