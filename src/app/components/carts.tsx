"use client"
import Image from "next/image"
function carts() {
  return (
    <div className="bg-gray-100">
    <div className="container mx-auto">
      <div className="bg-[#FAF4F4]">
      <div className="flex gap-8 justify-center mb-20">
        <div className="text-center">
          <Image src={"/sidetable.png"} alt="side table" width={605} height={562} className="cursor-pointer" />
          <span className="text-xl border-b-2 border-black pb-1 cursor-pointer hover:opacity-75">
          </span>
        </div>

        <div className="text-center">
          <Image src={"/whitesofa.png"} alt="white sofa" width={605} height={562} className="cursor-pointer" />
          <span className="text-xl border-b-2 border-black pb-1 cursor-pointer hover:opacity-75">
          </span>
        </div>
      </div>
      </div>
      <div className="bg-[#FFFFFF]">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-medium mb-4">Top Picks For You</h2>
        <p className="text-gray-500">
          Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
        </p>
      </div>
    
      <div className="grid grid-cols-4 gap-8 max-w-[1440px] mx-auto bg-white">
        <div className="text-center">
          <Image src="/sofaset1.png" alt="Trenton modular sofa" width={300} height={300} className="mb-4 cursor-pointer" />
        </div>

        <div className="text-center">
          <Image src="/sofaset2.png" alt="Granite dining table" width={300} height={300} className="mb-4 cursor-pointer" />
        </div>

        <div className="text-center">
          <Image src="/sofaset3.png" alt="Outdoor bar table" width={300} height={300} className="mb-4 cursor-pointer" />
        </div>

        <div className="text-center">
          <Image src="/sofaset4.png" alt="Plain console" width={300} height={300} className="mb-4 cursor-pointer"/>
        </div>
      </div>
      <div className="text-center text-bold mt-12">
        <span className="text-xl  border-b-2 border-black pb-1 cursor-pointer hover:opacity-75">
        View More
        </span>
        </div>
        </div>
      <div className=" bg-[#FFF9E5] bg- flex justify-between items-center p-20 mb-30">
        <Image src={"/Asgaardsofa.png"} alt="Asgaard sofa set" width={800} height={400} />
        <div className="text-right">
          <p className="text-2xl mb-4">New Arrivals</p>
          <h2 className="text-5xl font-bold mb-8">Asgaard sofa</h2>
          <button className="border-2 border-black px-12 py-4 hover:bg-black hover:text-white transition-colors">
            Order Now
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default carts
