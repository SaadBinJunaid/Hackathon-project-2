import Link from "next/link"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Image from "next/image"
export default function billingDetails() {
  return (
    <div>
      <Navbar />
       <div className="relative h-[400px] w-full">
              <Image 
                src="/checkout1.png"
                alt="checkout Banner"
                fill
                className="object-cover brightness-[0.85]"
                priority
              />
            </div>
       {/* Billing Details */}
       <div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Billing Details */}
    <div>
      <h2 className="text-3xl font-bold mb-8">Billing Details</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium text-gray-700">First Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
            />
          </div>
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">Company Name (Optional)</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">Country / Region</label>
          <select className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300">
            <option>Sri Lanka</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">Street Address</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">Town / City</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">Province</label>
          <select className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300">
            <option>Western Province</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">ZIP Code</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">Additional Information</label>
          <textarea
            className="w-full border border-gray-300 rounded-md p-3 h-32 focus:ring focus:ring-blue-300"
          ></textarea>
        </div>
      </form>
    </div>

    {/* Order Summary */}
    <div>
      <h2 className="text-3xl font-bold mb-8">Order Summary</h2>
      <div className="space-y-4 border border-gray-200 rounded-md p-6 shadow-sm">
        <div className="flex justify-between items-center">
          <p className="text-gray-700">Asgaard Sofa 1</p>
          <p className="font-medium">Rs. 250,000.00</p>
        </div>
        <div className="flex justify-between items-center border-t pt-4">
          <p className="text-gray-700">Subtotal</p>
          <p className="font-medium">Rs. 250,000.00</p>
        </div>
        <div className="flex justify-between items-center border-t pt-4 font-bold">
          <p>Total</p>
          <p className="text-[#B88E2F]">Rs. 250,000.00</p>
        </div>
      </div>

      {/* Payment Options */}
      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="bank"
            name="payment"
            defaultChecked
            className="text-blue-500 focus:ring focus:ring-blue-300"
          />
          <label htmlFor="bank" className="text-gray-700 font-medium">
            Direct Bank Transfer
          </label>
        </div>
        <p className="text-gray-500 text-sm">
          Make your payment directly into our bank account. Please use your Order ID as the payment
          reference. Your order will not be shipped until the funds have cleared in our account.
        </p>
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="cod"
            name="payment"
            className="text-blue-500 focus:ring focus:ring-blue-300"
          />
          <label htmlFor="cod" className="text-gray-700 font-medium">
            Cash On Delivery
          </label>
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-4">
        Your personal data will be used to support your experience throughout this website, to
        manage access to your account, and for other purposes described in our{' '}
        <a href="/privacy-policy" className="underline text-blue-500">
          privacy policy
        </a>
        .
      </p>

      <button className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors mt-6">
        Place Order
      </button>
    </div>
  </div>
</div>

        <Footer />
      </div>
    
  )
}


