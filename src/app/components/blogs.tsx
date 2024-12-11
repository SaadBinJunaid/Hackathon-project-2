import Image from "next/image"

function Blogs() {
  return (
    <div className="bg-gray-100">
    <div className="container mx-auto py-16">
      <div className="text-center mb-12">
      <div className="bg-[#FFFFFF]">
        <h2 className="text-4xl font-medium mb-4">Our Blogs</h2>
        <p className="text-gray-500">
          Find a bright ideal to suit your taste with our great selection
          <div className="bg-[#FFFFFF]"></div>
        </p>
        </div>
      </div>

      <div className="bg-[#FFFFFF]">
      <div className="grid grid-cols-3 gap-8">

        <div className="blog-card">
          <Image 
            src="/blogs1.png" 
            alt="Blog 1" 
            width={400} 
            height={300} 
            className="mb-4"
          />
          <h3 className="text-xl font-medium mb-4">Going all-in with millennial design</h3>
          <button className="border-b-2 border-black pb-1 mb-4">Read More</button>
          <div className="flex items-center gap-4 text-gray-500">
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd"/>
              </svg>
              5 min
            </span>
            <span>12th Oct 2022</span>
          </div>
        </div>

        
        <div className="blog-card">
          <Image 
            src="/blogs3.png" 
            alt="Blog 2" 
            width={400} 
            height={300} 
            className="mb-4"
          />
          <h3 className="text-xl font-medium mb-4">Going all-in with millennial design</h3>
          <button className="border-b-2 border-black pb-1 mb-4">Read More</button>
          <div className="flex items-center gap-4 text-gray-500">
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd"/>
              </svg>
              5 min
            </span>
            <span>12th Oct 2022</span>
          </div>
        </div>

        
        <div className="blog-card">
          <Image 
            src="/blogs2.png" 
            alt="Blog 3" 
            width={400} 
            height={300} 
            className="mb-4"
          />
          <h3 className="text-xl font-medium mb-4">Going all-in with millennial design</h3>
          <button className="border-b-2 border-black pb-1 mb-4">Read More</button>
          <div className="flex items-center gap-4 text-gray-500">
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd"/>
              </svg>
              5 min
            </span>
            <span>12th Oct 2022</span>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <button className="border-b-2 border-black pb-1">View All Post</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Blogs
