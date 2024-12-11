"use client"
import Link from "next/link"
import { UserIcon, HeartIcon, ShoppingCartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"

function Navbar() {
  return (
    <div className="bg-gray-100">
      <nav className="container mx-auto w-full bg-[#FBEBB5]">
        <div className="max-w-[1440px] mx-auto h-20 relative">
          <ul className="flex gap-20 justify-center items-center absolute left-1/2 -translate-x-1/2 h-full">  
            <li className="cursor-pointer hover:text-gray-600"><Link href="/">Home</Link></li>
            <li className="cursor-pointer hover:text-gray-600"><Link href="/shop">Shop</Link></li>
            <li className="cursor-pointer hover:text-gray-600"><Link href="/about">About</Link></li>
            <li className="cursor-pointer hover:text-gray-600"><Link href="/contact">Contact</Link></li>
          </ul>
          
          <div className="absolute right-24 flex gap-8 h-full items-center">
            <Link href="/myaccount">
              <UserIcon className="h-6 w-6 cursor-pointer hover:text-gray-600" />
            </Link>
            <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer hover:text-gray-600" />
            <HeartIcon className="h-6 w-6 cursor-pointer hover:text-gray-600" />
            <Link href="/checkout">
              <ShoppingCartIcon className="h-6 w-6 cursor-pointer hover:text-gray-600" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
} 

export default Navbar
