
function Footer() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 w-[1440px] h-[555px]">
        <div className="grid grid-cols-4 gap-20 py-16 max-w-[1240px]">
          {/* Address Column */}
          <div>
            <p className="text-gray-600 mb-4">
              400 University Drive Suite 200 Coral <br/> Gables,
              <br/> FL 33134 USA
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-gray-500 mb-6">Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-gray-600">Home</a></li>
              <li><a href="#" className="hover:text-gray-600">Shop</a></li>
              <li><a href="#" className="hover:text-gray-600">About</a></li>
              <li><a href="#" className="hover:text-gray-600">Contact</a></li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="text-gray-500 mb-6">Help</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-gray-600">Payment Options</a></li>
              <li><a href="#" className="hover:text-gray-600">Returns</a></li>
              <li><a href="#" className="hover:text-gray-600">Privacy Policies</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-gray-500 mb-6">Newsletter</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter Your Email Address"
                className="border-b border-black p-2 flex-grow focus:outline-none"
              />
              <button className="text-black hover:opacity-75">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 py-8 text-center">
          <p className="text-sm text-gray-600">2022 Meubel House. All rights reverved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
