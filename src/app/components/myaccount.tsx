"use client"
import Image from "next/image"
import Link from "next/link"
import Navbar from "./Navbar"
import Footer from "./Footer"

function MyAccount() {
  return (
    <>
      <Navbar />
      <div className="relative h-[400px] w-full">
        <Image 
          src="/myaccount1.png"
          alt="My Account Banner"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />

      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Login Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Log In</h2>
            <form className="space-y-6">
              <div>
                <label className="block mb-2">Username or email address</label>
                <input 
                  type="text"
                  className="w-full border rounded-md p-3"
                />
              </div>
              <div>
                <label className="block mb-2">Password</label>
                <input 
                  type="password"
                  className="w-full border rounded-md p-3"
                />
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <button className="w-full border-2 border-black py-3 px-6 rounded-md hover:bg-black hover:text-white transition-colors">
                Log In
              </button>
              <Link href="/lost-password" className="block text-center text-gray-600 hover:underline">
                Lost Your Password?
              </Link>
            </form>
          </div>

          {/* Register Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Register</h2>
            <form className="space-y-6">
              <div>
                <label className="block mb-2">Email address</label>
                <input 
                  type="email"
                  className="w-full border rounded-md p-3"
                />
              </div>
              <p className="text-gray-600 mb-4">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="text-gray-600 mb-4">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
                <Link href="/privacy-policy" className="underline">
                  privacy policy
                </Link>
                .
              </p>
              <button className="w-full border-2 border-black py-3 px-6 rounded-md hover:bg-black hover:text-white transition-colors">
                Register
              </button>
            </form>
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

export default MyAccount
