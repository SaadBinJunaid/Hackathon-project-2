import Image from "next/image"

function Instagram() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-16">
        <div className="bg-transparent bg-[#FAF4F4] relative overflow-hidden h-[500px]">
            <div className="">
          <div className="absolute inset-0">
            <Image 
              src="/image1.png"
              alt="Background coffee cup"
              fill
              className="object-cover opacity-[0.02]"
              priority
            />
          </div>
          <div className="text-center relative z-10 pt-24">
            <h2 className="text-[48px] font-bold mb-4">Our Instagram</h2>
            <p className="text-xl text-gray-600 mb-12">
              Follow our store on Instagram
            </p>
            <button className="bg-[#FAF4F4] text-black px-16 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-sm">
              Follow Us
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Instagram
