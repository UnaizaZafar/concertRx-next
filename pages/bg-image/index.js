import React from "react";
import Image from "next/image";
const Index = () => {
  return (
    <>
      <div style={{zIndex:-1, position:'absolute', width:'100%', height:'100%'}}>
        <Image
          src="/Rectangle 335.svg"
          alt="BgImage"
          layout="fill"
          objectFit="cover"
        />
      </div>
      
    </>
  );
};

export default Index;
