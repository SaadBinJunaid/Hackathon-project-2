"use client"
import Image from "next/image"

function HeroSection() {
  return (
    <div className="bg-gray-100">
    <div className="container relative bg-[#FBEBB5]  mx-auto mb-auto">
      <div className="w-[1440px] h-[1000px]">
        <div className="absolute left-1/2 -top-10">
          <Image 
            src={"/sofa.png"} 
            alt="sofa" 
            height={1000} 
            width={853} 
            className="-scale-x-100"
          />
        </div>
        <div className="absolute left-96 top-[140px]  mt-24">
          <h1 className="text-6xl font-medium leading-tight">
            Rocket single <br/>seater
          </h1>
          <button className=" mt-10 border-b-2 border-black text-xl hover:opacity-75">
            Shop Now
          </button>
        </div>
        </div>
      </div>
      </div>
  )
}

export default HeroSection
