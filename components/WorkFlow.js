import React from 'react'
import Image from 'next/image';
import screen from "../images/screen.svg";
import accountTree from "../images/account_tree_black_24dp 1.svg";
const WorkFlow = () => {
  return (
    <>
     
          <div className="h-full flex  justify-center items-center">
            <Image src={screen} className=''></Image>
            <div className="flex flex-col gap-2 bg-[#FAFAFA] py-48 pl-32 pr-24 ">
              <div className="flex gap-2 items-center">
                <Image src={accountTree}></Image>
                <p>Easy Workflow</p>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className='font-bold text-5xl'>Easy Workflow Management</h1>
                <p>ConcertRx modernizes how pharmacies manage workflows, medication waiting lists, and patient journeys by efficiently triggering SMS notifications.</p>
              </div>
            </div>
          </div>
        
    </>
  )
}

export default WorkFlow