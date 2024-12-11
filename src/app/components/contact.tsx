"use client"

import Image from "next/image"

function Contact() {
  return (
    <>
      <div className="relative h-[400px] w-full">
        <Image 
          src="/contact.png"
          alt="Contact Banner"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
</div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get In Touch With Us</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            For More Information About Our Product & Services. Please Feel Free To Drop Us
            An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Address</h3>
              <p className="text-gray-600">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Phone</h3>
            <p className="text-gray-600">
              Mobile: +(84) 546-6789 <br />
              Hotline: +(84) 456-6789
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Working Time</h3>
            <p className="text-gray-600">
              Monday-Friday: 9:00 - 22:00 <br />
              Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block mb-2">Your name</label>
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full p-3 border rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-2">Email address</label>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full p-3 border rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-2">Subject</label>
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full p-3 border rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-2">Message</label>
            <textarea 
              placeholder="Comment" 
              rows={6}
              className="w-full p-3 border rounded-lg"
            />
          </div>

            <button 
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 bg-[#FAF4F4]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-4">Free Delivery</h3>
            <p className="text-gray-500">
              For all oders over $50, consectetur adipim scing elit.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">90 Days Return</h3>
            <p className="text-gray-500">
              If goods have problems, consectetur adipim scing elit.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Secure Payment</h3>
            <p className="text-gray-500">
              100% secure payment, consectetur adipim scing elit.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
