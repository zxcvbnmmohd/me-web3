import * as React from "react";
import { ethers } from "ethers";

export default function Home() {

  const wave = () => {
    
  }
  
  return (
    <div className="flex justify-center w-full mt-[64px]">

      <div className="flex flex-col justify-center max-w-3/5">
        <div className="text-center text-5xl font-bold">
        👋 Hey there!
        </div>

        <div className="text-center text-zinc-800 mt-[16px] text-lg">
        I am Mohamed and I am mastering web3! Connect your Ethereum wallet and wave at me!
        </div>

        <button className="cursor-pointer mt-[16px] p-[8px] h-[75px] border-0 rounded-md bg-zinc-700 font-bold text-white text-2xl" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}
