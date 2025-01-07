'use client'; 

import { useSearchParams } from 'next/navigation'; 
import { AllProducts, R2Products, R3Products } from "@/app/components/Productdata";
import Image from "next/image";
import cartlogo from "@/app/assets/Buy 3.png";
import Link from "next/link";

// Combine all products into a single array
const AllProduct = [...AllProducts, ...R2Products, ...R3Products];

export default function SingleProduct() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const productId = parseInt(id || '0', 10);

  const product = AllProduct.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Featured products by predefined IDs
  const featuredProductIds = [7, 8, 12, 3, 9];
  const featuredProducts = AllProduct.filter((p) => featuredProductIds.includes(p.id));

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      {/* Product Details */}
      <div className="product-details flex flex-col items-start">
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={400}
            className="rounded-lg"
          />
        )}
        <h1 className="text-4xl font-bold mt-4">{product.name}</h1>
        <p className="text-lg text-gray-700 mt-2">Price: $20.00 USD</p>
        <p className="text-base text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg mt-4 flex items-center">
          <Image src={cartlogo} alt="Cart Logo" width={24} height={24} />
          <span className="ml-2">Add to Cart</span>
        </button>
      </div>

      {/* Featured Section */}
      <div className="featured-products mt-12">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-3 gap-4">
          {featuredProducts.map((featured) => (
            <div key={featured.id} className="border rounded-lg p-4">
              {featured.image && (
                <Image
                  src={featured.image}
                  alt={featured.name}
                  width={200}
                  height={150}
                  className="rounded-md"
                />
              )}
              <h3 className="text-lg font-semibold mt-2">{featured.name}</h3>
              <p className="text-gray-700">Price: $99</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/Product">
            <a className="text-blue-500 underline">View All Products</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
