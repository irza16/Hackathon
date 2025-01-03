import Image from "next/image";
import whitechair from "../assets/Image Block.png";
import Delivery from "../assets/Delivery.png";
import Checkmark from "../assets/Checkmark--outline.png";
import Purchase from "../assets/Purchase.png";
import Sprout from "../assets/Sprout.png";
import largesofa from "../assets/Large.png";
import Dandychair1 from "../assets/Photo.png";
import Dandychair2 from "../assets/Photo (1).png";

const block = [

{
  id: 1,
  name: "delivery truck",
image: Delivery ,
title: "Next day as standard",
description: "Order before 3pm and get your order the next day as standard" ,

},
{
    id: 2,
    name: "Checkmark",
  image: Checkmark ,
  title: "Made by true artisans",
  description: "Handmade crafted goods made with real passion and craftmanship" ,
  
  },
  
  {
    id: 3,
    name: "Card",
  image: Purchase ,
  title: "Unbeatable prices",
  description: "For our materials and quality you won’t find better prices anywhere" ,
  
  },

  {
    id: 4,
    name: "leaf",
  image: Sprout ,
  title: "Recycled packaging",
  description: "We use 100% recycled to ensure our footprint is more manageable" ,
  
  },
    ];

    const chair = [

        {
            id:5,
            name: "Dandychair",
            image: Dandychair1,
            title: "The Dandy chair",
            price: "$99.00",


        },

        {
            id:6,
            name: "Dandychair",
            image: Dandychair2,
            title: "The Dandy chair",
            price: "$99.00",


        },

    ];


export default function AboutUs() {
    return (

        <div>



<div className="w-[672px] h-[478px] absolute top-[303px] left-[300px] bg-[#007580]">

<div className="w-[495px] h-[161px] absolute top-16 left-16 flex flex-col gap-3">

    <span className="w-[325px] h-[39px] font-inter font-bold text-[32px] leading-[38.73px] text-white"> About Us - Comforty </span>

    <p className="w-[495px] h-[110px] font-inter font-normal text-lg leading-[21.78px] text-white" >At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>

</div>
    <button 
    className="w-[179px] h-14 absolute top-[368px] left-16 px-8 py-4 flex gap-[10px] bg-[#F9F9F9] bg-opacity-15 "
  >


<span className="w-[115px] h-6 font-inter font-normal text-base text-white opacity-100"> View collection </span>

  </button>


</div>



<Image 

src={whitechair}
alt="Woodentoolchair"
width={619}
height={478}
className="absolute top-[303px] left-[1001px]" />



<div className="Content w-[501px] h-[35px] absolute top-[913px] left-[750px] " >

    <span className="font-inter font-semibold text-[32px] leading-[35.2px] text-[#272343]"> What Makes Our Brand Different</span>
</div>



<div className = "w-[1320px] h-[244px] absolute top-[968px] left-[300px] text-[#F9F9F9]">


  {block.map((item,id) => (


<div 

key = {id}
className='w-[309.45px] h-[244px] absolute top-[2px] p-12 flex gap-[10px] bg-[#F9F9F9]'
style={{left: `${id * 338.88}px` }}

>

    <div className="w-[213.45px] h-[148px] flex flex-col gap-3">

    <div className="w-6 h-6">

    <Image 
    src={item.image}
    alt= {item.name}
    />
    </div>


    <span className=" h-7 font-inter font-normal text-xl  text-[#007580]">
        {item.title}
    </span>


    <p className="Content w-[213.45px] h-[72px] font-inter font-normal text-base text-[#007580]"> {item.description}</p>
</div>


  </div>
))}



</div>


<span className="w-[332px] h-[35px] absolute top-[1371px] left-[320px] font-inter font-semibold text-[32px] leading-[35.2px] text-[#272343]">Our Popular Products </span>


<div className="w-[630px] h-[462px] absolute top-[1449px] left-[320px] flex flex-col gap-6">

<Image 
src ={largesofa}
alt="biggreensofa"
width={630}
height={375}
/>

<div className="w-[212px] h-[63px] flex flex-col gap-2">

    <span className="w-[212px] h-7 font-inter font-normal text-xl text-[#2A254B]">The Poplar suede sofa</span>

    <span className="w-[61px] h-[27px] font-inter font-normal text-lg leading-[27px] text-[#2A254B]"> $99.00 </span>

</div>


</div>


{chair.map ((items, id) => (

<div

key = {id}
className="w-[305px] h-[462px] absolute top-[1451px] flex flex-col gap-6"

style= {{left: `${970 + id * 325}px`}}


>


    <Image 
    src = {items.image}
    alt= {items.name}
    width={305}
    height={375}
    />


<div className="w-[155px] h-[63px] flex flex-col gap-2">
    
    <span className="w-[155px] h-7 font-inter font-normal text-xl text-[#2A254B]"> {items.title}</span>


    <span className="w-[61px] h-[27px] font-inter font-normal text-lg leading-[27px] text-[#2A254B]"> $99.00 </span>
    
     </div>

    </div>


))}

        </div>
    )
}