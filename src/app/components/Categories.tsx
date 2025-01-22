'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import client from "../utils/sanityClient"; 

export default function TopCateogry() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const query = `*[_type == "categories"] {
        _id,
        title,
        products,
        "imageUrl": image.asset->url
      }`;

      const sanityCategories = await client.fetch(query);
      setCategories(sanityCategories);
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-[2216px] h-[508px] absolute top-[3100px] xl:top-[1867px]">
      {/* Top Categories Heading */}
      <div className="w-[1920px] h-[44px] flex justify-between items-center px-4 sm:px-9 md:px-16 lg:px-32 xl:px-56 2xl:px-[300px]">
        <span className="w-[237px] h-[35px] font-inter text-[32px] font-semibold leading-[35.2px] text-[#272343]">
          Top Categories
        </span>
      </div>

      {/* Categories List */}
      {categories.map((category, index) => (
        <div
          key={category._id}
          className={`w-[324px] sm:w-[424px] xl:w-[324px] 2xl:w-[424px] h-[424px] absolute ${
            index === 0
              ? "top-[84px] left-4 sm:left-9 md:left-16 lg:left-32 xl:left-56 2xl:left-[300px]"
              : index === 1
              ? "top-[84px] left-4 sm:left-9 md:left-16 lg:left-32 xl:left-[580px] 2xl:left-[748px]"
              : "top-[84px] left-4 sm:left-9 md:left-16 lg:left-32 xl:left-[936px] 2xl:left-[1196px]"
          }`}
        >
          <Image
            src={category.imageUrl}
            alt={category.title}
            width={424}
            height={424}
            className="rounded-[10px]"
          />
          <div className="w-[324px] 2xl:w-[424px] h-[85px] absolute top-[239px] sm:top-[339px] xl:top-[239px] 2xl:top-[339px] rounded-b-[10px] p-5 flex flex-col gap-2 bg-black opacity-70">
            <span className="w-96 h-[22px] font-inter text-xl leading-[22px] text-white">
              {category.title}
            </span>
            <span className="w-[376px] h-[15px] font-inter font-normal text-sm leading-[15.4px] text-white opacity-70">
              {category.products} Products
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
