"use client"
import Image from "next/image"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Trenton modular sofa_3",
    price: 25000.00,
    image: "/photo1 (1).png"
  },
  {
    id: 2,
    name: "Granite dining table with dining chair",
    price: 25000.00,
    image: "/photo1 (2).png"
  },
  {
    id: 3,
    name: "Outdoor bar table and stool",
    price: 25000.00,
    image: "/photo1 (3).png"
  },
  {
    id: 4,
    name: "Plain console with teak mirror",
    price: 25000.00,
    image: "/photo1 (4).png"
  },
  {
    id: 5,
    name: "Grain coffee table",
    price: 15000.00,
    image: "/table1.png"
  },
  {
    id: 6,
    name: "Kent coffee table",
    price: 225000.00,
    image: "/table2.png"
  },
  {
    id: 7,
    name: "Round coffee table_color 2",
    price: 251000.00,
    image: "/table3.png"
  },
  {
    id: 8,
    name: "Reclaimed teak coffee table",
    price: 25200.00,
    image: "/table4.png"
  },
  {
    id: 9,
    name: "Plain console_",
    price: 258200.00,
    image: "/table5.png"
  },
  {
    id: 10,
    name: "Reclaimed teak Sideboard",
    price: 20000.00,
    image: "/table6.png"
  },
  {
    id: 11,
    name: "SJP_0825",
    price: 200000.00,
    image: "/table7.png"
  },
  {
    id: 12,
    name: "Bella chair and table",
    price: 100000.00,
    image: "/table8.png"
  },
  {
    id: 13,
    name: "Granite square side table",
    price: 258800.00,
    image: "/table9.png"
  },
  {
    id: 14,
    name: "Asgaard sofa",
    price: 250000.00,
    image: "/table10.png"
  },
  {
    id: 15,
    name: "Maya sofa three seater",
    price: 115000.00,
    image: "/table11.png"
  },
  {
    id: 16,
    name: "Outdoor sofa set",
    price: 244000.00,
    image: "/table12.png"
  }
]

function Shop() {
  const [view, setView] = useState("grid")
  const [itemsPerPage, setItemsPerPage] = useState("16")
  const [sortBy, setSortBy] = useState("Default")

  return (
    <>
      <div className="relative h-[400px] w-full">
        <Image 
          src="/shop.png"
          alt="Shop Banner"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2">
              <span className="text-lg">Filter</span>
            </button>
            
            <button 
              onClick={() => setView("grid")}
              className={`p-2 ${view === "grid" ? "text-black" : "text-gray-400"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z"/>
              </svg>
            </button>
            
            <button 
              onClick={() => setView("list")}
              className={`p-2 ${view === "list" ? "text-black" : "text-gray-400"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <p>Showing 1–16 of 32 results</p>
            
            <select 
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="16">Show 16</option>
              <option value="32">Show 32</option>
              <option value="48">Show 48</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="Default">Default</option>
              <option value="Popularity">Popularity</option>
              <option value="Latest">Latest</option>
              <option value="Price">Price</option>
            </select>
          </div>
        </div>

        <div className={`grid ${view === "grid" ? "grid-cols-4" : "grid-cols-1"} gap-8`}>
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-square mb-4">
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg mb-2">{product.name}</h3>
              <p className="text-gray-800">Rs. {product.price.toLocaleString()}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <button className="px-4 py-2 bg-[#FBEBB5]">1</button>
          <button className="px-4 py-2 hover:bg-[#FBEBB5]">2</button>
          <button className="px-4 py-2 hover:bg-[#FBEBB5]">3</button>
          <button className="px-4 py-2 hover:bg-[#FBEBB5]">Next</button>
        </div>
      </div>
    </>
  )
}

export default Shop
