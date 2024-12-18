import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  textcolor?: string;
  price: number;
  oldPrice: number | null;
  image: boolean;
  badge?: { text: string; color: string };
  cartIcon: boolean;
  cartBg: string;
}

interface FeatureProps {
  heading?: string; 
  products: Product[]; 
  top: string;
}

export default function Feature({ heading, products, top }: FeatureProps) {
  return (
    <div className="w-[1920px] h-[461px] absolute "
    
    style = {{ top }}>

      {/* Dynamic Heading */}
      <div className="w-[1920px] h-[44px] flex justify-between items-center px-[300px]">
        
        <span className="w-[286px] h-[35px] font-inter text-[32px] font-semibold leading-[35.2px] text-[#272343]">
          {heading}
        </span>
      </div>

     
      {products.map((product, index) => (
        <div
          key={product.id}
          className= "w-[312px] h-[377px] absolute top-[84px]" 
            style = {{ left: `${
            300 + index * 336
          }px`}}
        >

          <Link href = {`/Singleproduct/${product.id}`} >
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
              <span className="font-inter font-medium text-[13px] leading-[14.3px] text-white ">
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
            <span className="w-[35px] h-5 font-inter font-semibold text-lg">
              ${product.price}
            </span>
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
