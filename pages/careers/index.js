import Career from '@/components/Career'
import TopBar from '@/components/TopBar'
import React from 'react'

const Index = () => {
  return (
    <>
    <TopBar/>
    <Career/>
    <div className="h-full bg-[#FAFAFA] p-20">
          <div className=" flex flex-col gap-16 max-w-[408px] self-center">
            <h1 className="font-bold text-4xl text-center text-[#27272A]">
              Create amazing things with us!
            </h1>
            <p className="font-normal text-lg text-center">
              We’re always eager to meet fresh talent, so send us a brief
              message introducing your super power!
            </p>
            <form action="" className='flex flex-col gap-4 justify'>
              <div className="flex justify-between ">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="rounded-lg border border-[#e4e4e7] py-4 px-5"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-lg border border-[#e4e4e7] py-4 px-5"
                />
              </div>
              <div className="flex flex-col">
                <textarea
                  type="text"
                  placeholder="Your Message..."
                  className="rounded-lg border border-[#e4e4e7] h-32 py-4 px-5"
                />
                <button className="bg-[#48B649] py-3 px-6 rounded-full">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
    </>
  )
}

export default Index