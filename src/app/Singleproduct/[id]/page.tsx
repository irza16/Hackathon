
import { AllProducts } from "@/app/components/Productdata";
import { R2Products } from "@/app/components/Productdata";
import { R3Products } from "@/app/components/Productdata";
import Image from "next/image";
import cartlogo from "@/app/assets/Buy 3.png";
import Link from "next/link";

const AllProduct = [...AllProducts, ...R2Products, ...R3Products];

// Dynamic Product Page
export default function SingleProduct({ params }: { params: { id: string } }) {
  const product = AllProduct.find((p) => p.id === Number(params.id));


  if (!product) {
    return <div>Product not found</div>;
  }

  const featuredProducts = AllProduct.filter((product) =>
    [7, 8, 9, 11, 12].includes(product.id)
  );

  

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      
      <Image
        src={product.image}
        alt={product.name}
        width={675}
        height={607}
        className="absolute top-[335px] left-[260px] rounded-[10px]"
      />
      <span className="w-[541px] h-[132px] absolute top-[335px] left-[1044px] font-inter font-bold text-6xl leading-[66px] text-[#272343]">
        {product.name}
      </span>
      <div className="w-[144px] h-[44px] absolute top-[499px] left-[1044px] rounded-[100px] bg-[#029FAE]">
        <span className="w-[118px] h-[22px] absolute top-3 left-[13px] text-xl leading-[22px] text-white font-inter font-semibold">
          $20.00 USD
        </span>
      </div>
      <div className="w-[543px] h-[101px] absolute top-[618px] left-[1046px] opacity-60">
        <p className="font-inter font-normal text-[22px] leading-[33px] text-[#272343]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing
        </p>
      </div>
      <div className="w-[212px] h-[63px] absolute top-[751px] left-[1046px] rounded-lg px-6 py-[14px] flex justify-center items-center gap-[9px] bg-[#029FAE]">
        <Image src={cartlogo} alt="cartlogo" width={29} height={29} />
        <button className="w-[116px] h-[22px] font-inter font-medium text-xl leading-[22px] text-center text-white">
          Add to Cart
        </button>
      </div>

      {/* Featured Section */}
      <div className="w-[1447px] h-[409px] absolute top-[1065px] left-[236px] ">
        <span className="w-[410px] h-[34px] absolute left-[2px] font-inter text-[28px] font-bold leading-[33.89px] tracking-[5.6px] text-black ">FEATURED PRODUCTS</span>

        <div className="flex justify-center gap-6">

          {featuredProducts.map((featured, index) => (
            <div
              key={featured.id}
              className="w-[270px] h-[306px]  absolute top-[100px] left-[2px]"
              style={{
        left: index === 0 ? '0px' : `${index * 300}px`, 
      }} 
            >
              <Image
                src={featured.image}
                alt={featured.name}
                width={270}
                height={263}
                className="rounded-[10px]"
                
              />
              <span className="w-[141px] h-[21px] absolute top-[288px] left-[2px] text-base leading-[20.8px] text-[#272343]">
                Libarary Stool Chair</span>

              <span className="w-7 h-[17px] absolute top-[288px] left-[235px] text-sm leading-[16.94px] text-black font-inter font-bold">$99</span>
            </div>
          ))}
        </div>
        <div className="w-[75px] h-[31px] absolute top-[100px] lef-[1587px] text-black">

          <Link href="/Product">
            <span className="w-[75px] h-[22px] absolute left-[1589px]   text-black font-inter font-bold text-lg leading-[21.78px]"> 
              View All
            </span>
          </Link>

          <span className = "w-[75px] absolute top-[34px] left-[1589px] border-[2px] bg-black "></span>
        </div>
      </div>
    </div>
  );
}