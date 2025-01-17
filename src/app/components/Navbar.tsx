"use client"
import Link from "next/link"
import { useState } from "react"
import { UserIcon, HeartIcon, ShoppingCartIcon, MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-100">
      <nav className="w-full bg-[#FBEBB5]">
        <div className="container mx-auto flex justify-between items-center h-20 px-4 md:px-8">
          {/* Account Icon (Mobile) */}
          <Link href="/myaccount" className="md:hidden">
            <UserIcon className="h-6 w-6 cursor-pointer hover:text-gray-600" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 items-center justify-center w-full">
            <li className="cursor-pointer hover:text-gray-600"><Link href="/">Home</Link></li>
            <li className="cursor-pointer hover:text-gray-600"><Link href="/shop">Shop</Link></li>
            <li className="cursor-pointer hover:text-gray-600"><Link href="/about">About</Link></li>
            <li className="cursor-pointer hover:text-gray-600"><Link href="/contact">Contact</Link></li>
          </ul>

          {/* Icons (Desktop) */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/myaccount">
              <UserIcon className="h-6 w-6 cursor-pointer hover:text-gray-600" />
            </Link>
            <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer hover:text-gray-600" />
            <HeartIcon className="h-6 w-6 cursor-pointer hover:text-gray-600" />
            <Link href="/checkout">
              <ShoppingCartIcon className="h-6 w-6 cursor-pointer hover:text-gray-600" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6 cursor-pointer" />
            ) : (
              <Bars3Icon className="h-6 w-6 cursor-pointer" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#FBE2A6] border-t border-gray-300 shadow-lg">
            <ul className="flex flex-col items-center gap-4 py-6">
            <Link href="/checkout" className="md:hidden">
            <ShoppingCartIcon className="h-6 w-6 cursor-pointer hover:text-gray-600" />
            cart
          </Link>
              <li className="text-lg font-medium cursor-pointer hover:text-gray-600">
                <Link href="/">Home</Link>
              </li>
              <li className="text-lg font-medium cursor-pointer hover:text-gray-600">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="text-lg font-medium cursor-pointer hover:text-gray-600">
                <Link href="/about">About</Link>
              </li>
              <li className="text-lg font-medium cursor-pointer hover:text-gray-600">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar