'use client'

import Link from "next/link"
import Image from "next/image"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline'
    fullWidth?: boolean
    children: React.ReactNode
    className?: string
}

function Button({ variant = 'primary', fullWidth = false, children, className = '', ...props }: ButtonProps) {
    const baseStyles = 'py-2 px-12 rounded text-base font-medium transition-colors'
    const variants = {
        primary: 'bg-[#DB4444] text-white hover:bg-[#DB4444]/90',
        outline: 'border border-black hover:bg-black/5'
    }
    
    return (
        <button 
            className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default function Cart() {
    return (
        <div className="mx-auto w-[1440px] h-[1743px] bg-white">
            {/* Main Content Container */}
            <div className="px-[135px] py-20">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm mb-20">
                    <Link href="/" className="text-gray-500 hover:text-black">Home</Link>
                    <span className="text-gray-500">/</span>
                    <span className="text-black">Cart</span>
                </div>

                {/* Cart Content */}
                <div className="flex flex-col gap-[80px]">
                    {/* Product List */}
                    <div className="w-[1170px] h-[436px]">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left py-4 w-[550px]">Product</th>
                                    <th className="text-left py-4">Price</th>
                                    <th className="text-left py-4">Quantity</th>
                                    <th className="text-left py-4">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="py-6">
                                        <div className="flex items-center gap-4">
                                            <button className="text-gray-400 hover:text-red-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                            <Image 
                                                src="/lcd-monitor.png" 
                                                alt="LCD Monitor"
                                                width={54}
                                                height={54}
                                                className="rounded-lg"
                                            />
                                            <span>LCD Monitor</span>
                                        </div>
                                    </td>
                                    <td className="py-6">$650</td>
                                    <td className="py-6">
                                        <div className="flex items-center border rounded-md w-[72px]">
                                            <button className="px-2 py-1 hover:bg-gray-100">-</button>
                                            <span className="px-2 py-1 border-x">1</span>
                                            <button className="px-2 py-1 hover:bg-gray-100">+</button>
                                        </div>
                                    </td>
                                    <td className="py-6">$650</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-6">
                                        <div className="flex items-center gap-4">
                                            <button className="text-gray-400 hover:text-red-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                            <Image 
                                                src="/gamepad.png" 
                                                alt="H1 Gamepad"
                                                width={54}
                                                height={54}
                                                className="rounded-lg"
                                            />
                                            <span>H1 Gamepad</span>
                                        </div>
                                    </td>
                                    <td className="py-6">$550</td>
                                    <td className="py-6">
                                        <div className="flex items-center border rounded-md w-[72px]">
                                            <button className="px-2 py-1 hover:bg-gray-100">-</button>
                                            <span className="px-2 py-1 border-x">2</span>
                                            <button className="px-2 py-1 hover:bg-gray-100">+</button>
                                        </div>
                                    </td>
                                    <td className="py-6">$1100</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="flex justify-between mt-8">
                            <Button variant="outline">Return To Shop</Button>
                            <Button variant="outline">Update Cart</Button>
                        </div>
                    </div>

                    {/* Cart Total and Coupon Section */}
                    <div className="flex justify-between items-start">
                        {/* Coupon */}
                        <div>
                            <input
                                type="text"
                                placeholder="Coupon Code"
                                className="w-[300px] px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#DB4444] mr-4"
                            />
                            <Button variant="primary">
                                Apply Coupon
                            </Button>
                        </div>

                        {/* Cart Total */}
                        <div className="w-[470px] h-[324px]">
                            <div className="border rounded-lg p-6">
                                <h2 className="text-xl font-medium mb-6">Cart Total</h2>
                                
                                <div className="space-y-4">
                                    <div className="flex justify-between pb-4 border-b">
                                        <span>Subtotal:</span>
                                        <span>$1750</span>
                                    </div>
                                    <div className="flex justify-between pb-4 border-b">
                                        <span>Shipping:</span>
                                        <span>Free</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Total:</span>
                                        <span>$1750</span>
                                    </div>
                                </div>

                                <Button variant="primary" fullWidth className="mt-6">
                                    Process to checkout
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 