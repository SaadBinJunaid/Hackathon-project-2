"use client"
import Image from "next/image"
import Link from "next/link"
import Navbar from "./Navbar"
import Footer from "./Footer"

function Checkout() {
  return (
    <>
      <Navbar />
      <div className="relative h-[400px] w-full">
        <Image 
          src="/cart1.png"
          alt="cart Banner"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Cart Table */}
        <div className="mb-16">
          <div className="bg-[#FFF9E5] grid grid-cols-4 p-4">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>

          <div className="grid grid-cols-4 items-center p-4">
            <div className="flex items-center gap-4">
              <div className="bg-[#FFF9E5] p-2">
                <Image 
                  src="/Asgaardsofa.png" 
                  alt="Asgaard sofa" 
                  width={80} 
                  height={80}
                  className="object-cover"
                />
              </div>
              <span className="text-gray-500">Asgaard sofa</span>
            </div>
            <div className="text-gray-500">Rs. 250,000.00</div>
            <div>
              <input 
                type="number" 
                value="1"
                min="1"
                className="w-16 border rounded p-2 text-center"
                readOnly
              />
            </div>
            <div className="flex justify-between items-center">
              <span>Rs. 250,000.00</span>
              <button className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="max-w-sm ml-auto mb-16">
          <div className="bg-[#FFF9E5] p-8">
            <h2 className="text-2xl font-bold mb-6">Cart Totals</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Subtotal</span>
                <span className="text-gray-500">Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t">
                <span>Total</span>
                <span className="text-[#B88E2F] font-bold">Rs. 250,000.00</span>
              </div>
              <button className="w-full border border-black rounded-3xl py-3 mt-4 hover:bg-black hover:text-white transition-colors">
                Check Out
              </button>
            </div>
          </div>
        </div>

        {/* Billing Details */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Billing details</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">First Name</label>
                <input type="text" className="w-full border rounded-md p-3" />
              </div>
              <div>
                <label className="block mb-2">Last Name</label>
                <input type="text" className="w-full border rounded-md p-3" />
              </div>
            </div>
            <div>
              <label className="block mb-2">Company Name (Optional)</label>
              <input type="text" className="w-full border rounded-md p-3" />
            </div>
            <div>
              <label className="block mb-2">Country / Region</label>
              <select className="w-full border rounded-md p-3">
                <option>Sri Lanka</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Street address</label>
              <input type="text" className="w-full border rounded-md p-3" />
            </div>
            <div>
              <label className="block mb-2">Town / City</label>
              <input type="text" className="w-full border rounded-md p-3" />
            </div>
            <div>
              <label className="block mb-2">Province</label>
              <select className="w-full border rounded-md p-3">
                <option>Western Province</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">ZIP code</label>
              <input type="text" className="w-full border rounded-md p-3" />
            </div>
            <div>
              <label className="block mb-2">Phone</label>
              <input type="tel" className="w-full border rounded-md p-3" />
            </div>
            <div>
              <label className="block mb-2">Email address</label>
              <input type="email" className="w-full border rounded-md p-3" />
            </div>
            <div>
              <label className="block mb-2">Additional information</label>
              <textarea className="w-full border rounded-md p-3 h-32" />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Product</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p>Asgaard sofa  1</p>
              <p>Rs. 250,000.00</p>
            </div>
            <div className="flex justify-between items-center border-t pt-4">
              <p>Subtotal</p>
              <p>Rs. 250,000.00</p>
            </div>
            <div className="flex justify-between items-center border-t pt-4 font-bold">
              <p>Total</p>
              <p className="text-[#B88E2F]">Rs. 250,000.00</p>
            </div>

            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-2">
                <input type="radio" id="bank" name="payment" checked />
                <label htmlFor="bank">Direct Bank Transfer</label>
              </div>
              <p className="text-gray-500 text-sm">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
              </p>
              <div className="flex items-center gap-2">
                <input type="radio" id="cod" name="payment" />
                <label htmlFor="cod">Cash On Delivery</label>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-4">
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
              <Link href="/privacy-policy" className="underline">
                privacy policy
              </Link>
              .
            </p>

            <button className="w-full border-2 border-black py-3 px-6 rounded-md hover:bg-black hover:text-white transition-colors mt-4">
              Place order
            </button>
          </div>
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

      <Footer />
    </>
  )
}

export default Checkout
