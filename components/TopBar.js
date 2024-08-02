import React from 'react'
import logo from "../images/Navbar logo.svg";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";

const TopBar = () => {
  const pathname = usePathname();

  return (
    <>
    <div className='flex  gap-6 justify-between px-20 py-7'>
        <Image src={logo} className=' '></Image>
        <ul className='flex gap-6 items-center'>
            <li>
                  <Link
                className={`link ${
                  pathname === "/products" 
                    ? "no-underline text-[#48B649]  "
                    : "no-underline text-[#27272A] "
                }`}
                href="/products"
              > Products </Link>
            </li>
            <li>
                  <Link
                className={`link ${
                  pathname === "/our-story"
                    ? "no-underline text-[#48B649] "
                    : "no-underline text-[#27272A]  "
                }`}
                href="/our-story"
              >Our Story </Link>
            </li>
            <li>
                  <Link
                className={`link ${
                  pathname === "/pricing"
                    ? "no-underline text-[#48B649] "
                    : "no-underline text-[#27272A]  "
                }`}
                href="/pricing"
              >Pricing </Link>
            </li>
        </ul>
        <div className='flex gap-6 items-center'>
            <h1 className='font-medium text-base text-[#48B649]'>Login</h1>
            <div className='bg-[#48B649] text-white rounded-[22px] py-3 px-6'>
                <h1>Get Started</h1>
            </div>
        </div>
        </div>
    </>
  )
}

export default TopBar