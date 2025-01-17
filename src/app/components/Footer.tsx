function Footer() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Address Column */}
          <div className="mt-20">
            <p className="text-[#9F9F9F]">
              400 University Drive Suite 200 Coral <br /> Gables, <br /> FL 33134
              USA
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-[#9F9F9F] mb-10">Links</h4>
            <ul className="space-y-6 mb-10">
              <li><a href="#" className="font-medium">Home</a></li>
              <li><a href="#" className="font-medium">Shop</a></li>
              <li><a href="#" className="font-medium">About</a></li>
              <li><a href="#" className="font-medium">Contact</a></li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="text-[#9F9F9F] mb-10">Help</h4>
            <ul className="space-y-6">
              <li><a href="#" className="font-medium">Payment Options</a></li>
              <li><a href="#" className="font-medium">Returns</a></li>
              <li><a href="#" className="font-medium">Privacy Policies</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-[#9F9F9F] mb-10">Newsletter</h4>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="border-b border-black p-2 flex-grow focus:outline-none"
              />
              <button className="text-black border-b border-black font-medium hover:opacity-75">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-8 mt-8">
          <p className="text-sm">2022 Meubel House. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;