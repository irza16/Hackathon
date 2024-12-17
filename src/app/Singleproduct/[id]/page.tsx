import { AllProducts } from "@/app/components/Productdata";
import { R2Products } from "@/app/components/Productdata";
import { R3Products } from "@/app/components/Productdata";
import Image from "next/image";
import cartlogo from "@/app/assets/Buy 3.png";
// Combine all rows of products temporarily
const AllProduct = [...AllProducts, ...R2Products, ...R3Products];

// Dynamic Product Page
export default function SingleProduct({ params }: { params: { id: string } }) {
  const product = AllProduct.find((p) => p.id === Number(params.id));

  

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      {/* Product Image */}
      <Image
        src={product.image}
        alt={product.name}
        width={675}
        height={607}
        className="absolute top-[335px] left-[260px] rounded-[10px]"
      />

      {/* Product Details */}
      <span className="w-[541px] h-[132px] absolute top-[335px] left-[1044px] font-inter font-bold text-6xl leading-[66px] text-[#272343]"> {product.name} </span>

<div className = "w-[144px] h-[44px] absolute top-[499px] left-[1044px] rounded-[100px] bg-[#029FAE]">

      <span className="w-[118px] h-[22px] absolute top-3 left-[13px] text-xl leading-[22px] text-white font-inter font-semibold">
        $20.00 USD
      </span>

      </div>

      <div className = "w-[543px] h-[101px] absolute top-[618px] left-[1046px] opacity-60">

<p className = "font-inter font-normal text-[22px] leading-[33px] text-[#272343]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p>

      </div>

<div className="w-[212px] h-[63px] absolute top-[751px] left-[1046px] rounded-lg px-6 py-[14px] flex justify-center items-center gap-[9px] bg-[#029FAE]">

    <Image  src = {cartlogo} alt = "cartlogo" width = {29} height = {29} />
    

      <button className="w-[116px] h-[22px] font-inter font-medium text-xl leading-[22px] text-center text-white">
        Add to Cart
      </button>
      </div>
      </div>

    
  );
}
