
import Image from "next/image";
import Link from "next/link";

const products = [
  { id: 1, name: "Trenton modular sofa_3", price: 25000.0, image: "/photo1 (1).png" },
  { id: 2, name: "Granite dining table with dining chair", price: 25000.0, image: "/photo1 (2).png" },
  { id: 3, name: "Outdoor bar table and stool", price: 25000.0, image: "/photo1 (3).png" },
  { id: 4, name: "Plain console with teak mirror", price: 25000.0, image: "/photo1 (4).png" },
  
];
export default function Famous() {
  return (
    <div>
      <div className="bg-white py-12">

<div className="text-center mb-12">
    <h2 className="text-4xl font-semibold mb-4">Top Picks For You</h2>
    <p className="text-gray-600">
      Find the perfect piece to suit your style from our curated collection.
    </p>
  </div>

{/* Products Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
  {products.map((product) => (
    <div key={product.id} className="group cursor-pointer">
      <Link
        href={{
          pathname: `/product/${product.id}`,
          query: {
            name: product.name,
            price: product.price,
            image: product.image
          }
        }}
      >
        <div className="aspect-square mb-4 relative overflow-hidden w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="text-base sm:text-lg lg:text-[20px] mb-2">{product.name}</h3>
        <p className="text-sm sm:text-base lg:text-[18px] text-neutral-600">Rs{product.price}</p>
      </Link>
    </div>
  ))}
</div>

  <div className="text-center mt-12">
    <span className="text-xl border-b-2 border-black pb-1 cursor-pointer hover:opacity-75">
      View More
    </span>
  </div>
</div>

    </div>
  )
}


