"use client";
import Navbar from "../components/Navbar"
// import Shop from "../components/shop"
import Footer from "../components/Footer"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const products = [
  { id: 1, name: "Trenton modular sofa_3", price: 25000.0, image: "/photo1 (1).png" },
  { id: 2, name: "Granite dining table with dining chair", price: 25000.0, image: "/photo1 (2).png" },
  { id: 3, name: "Outdoor bar table and stool", price: 25000.0, image: "/photo1 (3).png" },
  { id: 4, name: "Plain console with teak mirror", price: 25000.0, image: "/photo1 (4).png" },
  { id: 5, name: "Grain coffee table", price: 15000.0, image: "/table1.png" },
  { id: 6, name: "Kent coffee table", price: 225000.0, image: "/table2.png" },
  { id: 7, name: "Round coffee table_color 2", price: 251000.0, image: "/table3.png" },
  { id: 8, name: "Reclaimed teak coffee table", price: 25200.0, image: "/table4.png" },
  { id: 9, name: "Plain console_", price: 258200.0, image: "/table5.png" },
  { id: 10, name: "Reclaimed teak Sideboard", price: 20000.0, image: "/table6.png" },
  { id: 11, name: "SJP_0825", price: 200000.0, image: "/table7.png" },
  { id: 12, name: "Bella chair and table", price: 100000.0, image: "/table8.png" },
  { id: 13, name: "Granite square side table", price: 258800.0, image: "/table9.png" },
  { id: 14, name: "Asgaard sofa", price: 250000.0, image: "/table10.png" },
  { id: 15, name: "Maya sofa three seater", price: 115000.0, image: "/table11.png" },
  { id: 16, name: "Outdoor sofa set", price: 244000.0, image: "/table12.png" },
];
export default function ShopPage() {

  const [view, setView] = useState("grid");

  return (
    <>
      <Navbar />
      <div className="relative h-[400px] w-full">
        <Image
          src="/shop.png"
          alt="Shop Banner"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
      </div>

      <div className="bg-[#FAF4F4] py-4 px-8 flex justify-between items-center mt-5">
        <div className="flex items-center gap-6">
          <div className="flex gap-2">
            <button
              onClick={() => setView("grid")}
              className={`p-2 ${view === "grid" ? "text-black" : "text-gray-400"}`}
            >
              Grid
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-2 ${view === "list" ? "text-black" : "text-gray-400"}`}
            >
              List
            </button>
          </div>
          <p className="text-lg">Showing 1-16 of 32 results</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className={`grid ${view === "grid" ? "grid-cols-4" : "grid-cols-1"} gap-8`}>
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <Link
                href={{
                  pathname: `/product/${product.id}`,
                  query: {
                    name: product.name,
                    price: product.price,
                    image: product.image,
                  },
                }}
              >
                <div className="relative aspect-square mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover aspect-square transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg mb-2">{product.name}</h3>
                <p className="text-gray-800">Rs. {product.price.toLocaleString()}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
} 