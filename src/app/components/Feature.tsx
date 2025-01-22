'use client'

import { useState, useEffect } from "react";
import client from '../utils/sanityClient';
import Image from "next/image";
import Link from "next/link";
import CartIcon from "../assets/Group.png";

interface Product {
  _id: string;
  title: string;
  textcolor?: string;
  price: number;
  oldPrice: number | null;
  image: string;
  badge?: { text: string; color: string } | null;
  cartIcon: string;
  cartBg: string;
}

interface FeatureProps {
  heading?: string;
  top: string;
  filterTag: string;
}

export default function Feature({ heading, top, filterTag }: FeatureProps) {
  const [windowWidth, setWindowWidth] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {

    const fetchProducts = async () => {
      const query = `*[_type == "products" && $filterTag in tags ] {
  _id,
  title,
  price,
  "oldPrice": priceWithoutDiscount,
  "badge" : badge,
  "image": select(image.asset != null => image.asset->url, null), 
  "cartIcon": select(cartIcon.asset != null => cartIcon.asset->url, null),
  "category": select(category != null => category->name, null),  
  description,
  stock,
  tags
}`;
      const sanityProducts: Product[] = await client.fetch(query, 
      { filterTag });
      console.log('Fetched Products:', sanityProducts);
      setProducts(sanityProducts);
    } 

    fetchProducts();
  }, []);
    
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    
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
          key={product._id}
          className="absolute xl:w-[300px] xl:h-[365] 2xl:w-[312px] 2xl:h-[377px] left-4 md:left-16 lg:left-32  xl:top-[84px]"
          style={{
            top: windowWidth <= 1280 ? `${84 + index * 436}px` : undefined,
            left: windowWidth >= 1280 ? `${200 + index * 326}px` : undefined,
          }}
        >
          <Link href={`/Singleproduct/${product._id}`}>
            <Image
              src={product.image}
              alt={product.title}
              width={312}
              height={312}
              className="w-[312px] h-[312px] rounded-md"
            />
          </Link>

          {product.badge?.text && product.badge?.color && (
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
              {product.title}
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
            style={{ backgroundColor: index === 0 ? "#029FAE" : "#F0F2F3" }}
          >
            <Image
              src={CartIcon}
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

