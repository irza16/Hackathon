'use client'

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  textcolor?: string;
  price: number;
  oldPrice: number | null;
  image: StaticImageData;
  badge?: { text: string; color: string } | null;
  cartIcon: StaticImageData;
  cartBg: string;
}

interface FeatureProps {
  heading?: string;
  products: Product[];
  top: string;
}

export default function Feature({ heading, products, top }: FeatureProps) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set the initial window width after the component mounts
    setWindowWidth(window.innerWidth);

    // Optionally, you could also listen for window resize to adjust dynamically
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    
    // Clean up listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="xl:w-[1920px] xl:h-[461px] absolute" style={{ top }}>
      {/* Dynamic Heading */}
      <div className="w-[1920px] h-[44px] flex justify-between items-center px-4 sm:px-9 md:px-16 lg:px-32 xl:px-56 2xl:px-[300px]">
        <span className="w-[286px] h-[35px] font-inter text-[32px] font-semibold leading-[35.2px] text-[#272343]">
          {heading}
        </span>
      </div>

      {/* Products */}
      {products.map((product, index) => (
        <div
          key={product.id}
          className="absolute xl:w-[300px] xl:h-[365] 2xl:w-[312px] 2xl:h-[377px] left-4 md:left-16 lg:left-32  xl:top-[84px]"
          style={{
            top: windowWidth <= 1280 ? `${84 + index * 436}px` : undefined,
            left: windowWidth >= 1280 ? `${200 + index * 326}px` : undefined,
          }}
        >
          <Link href={`/Singleproduct/${product.id}`}>
            <Image
              src={product.image}
              alt={product.name}
              className="w-[312px] h-[312px] rounded-md"
            />
          </Link>

          {product.badge && (
            <div
              className="w-[49px] h-[26px] absolute top-5 left-5 rounded-[4px] px-[10px] py-[6px] flex gap-[10px]"
              style={{ backgroundColor: product.badge.color }}
            >
              <span className="font-inter font-medium text-[13px] leading-[14.3px] text-white">
                {product.badge.text}
              </span>
            </div>
          )}

          <div className="w-[256px] h-[51px] absolute top-[326px] flex flex-col gap-[10px]">
            <span
              className="h-[21px] font-inter font-normal text-base leading-[20.8px]"
              style={{ color: product.textcolor || "#272343" }}
            >
              {product.name}
            </span>
            <div className="w-[66px] h-5 flex items-center gap-1">
              <span className="w-[35px] h-5 font-inter font-semibold text-lg">
                ${product.price}
              </span>
              {product.oldPrice && (
                <span className="Sale Price w-[27px] h-[15px] font-inter font-normal text-[14px] leading-[15.4px] text-[#9A9CAA] line-through">
                  ${product.oldPrice}
                </span>
              )}
            </div>
          </div>

          <div
            className="w-11 h-11 absolute top-[329.5px] left-[268px] rounded-lg"
            style={{ backgroundColor: product.cartBg }}
          >
            <Image
              src={product.cartIcon}
              alt="Add to Cart"
              width={22}
              height={22}
              className="absolute top-[11.5px] left-[11px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

