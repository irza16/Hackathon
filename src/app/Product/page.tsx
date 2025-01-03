import React from "react";
import Feature from "../components/Feature";
import {AllProducts} from "../components/Productdata";
import {R2Products} from "../components/Productdata";
import {R3Products} from "../components/Productdata";
import Image from "next/image";
import Image1 from "../assets/Image (5).png";
import Image2 from "../assets/Image (4).png";
import Image3 from "../assets/Image (1).png";
import Image4 from "../assets/Image.png";
import Image5 from "../assets/Image (2).png";
import Image6 from "../assets/Image (6).png";


export default function Product () {
    return (

        <div >

<Feature heading = "All Products" products = {AllProducts} top = "260px" />

<Feature products = {R2Products} top = "718px" />

<Feature products = {R3Products} top = "1179px" />


<div className = "w-[1924px] h-[754px] absolute top-[1813px] px-[300px] py-[100px] flex gap-[70px] bg-[#1E2832] bg-opacity-5">
    
    <div className = "Newsletter w-[760px] h-[165px] ">

<div className="section-title w-[707px] h-[59px] absolute top-[100px] left-[609px]">

<span className = "h2 font-roboto font-medium text-[50px] leading-[58.59px] text-center text-black"> Or Subscribe To The Newsletter</span>


</div>


    </div>



    <div className = "w-[643px] h-8 absolute top-[233px] left-[582px] ">

<input 
type = "Email Address"
placeholder = "Email address..."

className = "Input text w-[117px] h-[19px] absolute left-[15px] font-roboto font-semibold text-base leading-[18.75px] text-[#1E2832] opacity-50" 
/>

<div className = " w-[643px] absolute top-8 border-spacing-[2px] border-[#000000] border-2"></div>

    </div>
    


<div className = "w-[91px] h-8 absolute top-[233px] left-[1251px] flex gap-[10px]">

<div className = "w-[91px] h-[22px] px-4 flex flex-col items-center gap-[10px]">



    <button className = "w-[59px] h-[22px] font-sans font-normal text-base leading-[21.79px] text-center text-[#1E2832] "> SUBMIT   </button>

<div className="w-[91px] border-2 border-[#1E2832]"></div>

    
</div>

</div>

<div className = "w-[1324px] h-[319px] ">

<div className = " w-[1013px] h-[59px] absolute top-[335px] left-[451px] ">

<span className = "h2 font-roboto font-medium text-[50px] leading-[58.59px] text-center text-black"> Follow Products And Discounts On Instagram</span>


</div>


</div>



  <div className = "w-[1324px] h-[200px] absolute top-[454px] left-[300px] flex gap-6">


    <Image

    src = {Image1}
    width = {186} height = {186} 
    alt = "Image 1"
    className = "rounded-md" />

<Image

src = {Image2}
width = {200} height = {200} 
alt = "Image 2"
className = "rounded-md" />

<Image

src = {Image3}
width = {200} height = {200} 
alt = "Image 3"
className = "rounded-[10px]" />


<Image

src = {Image4}
width = {200} height = {200} 
alt = "Image 4"
className = "rounded-md" />

<Image

src = {Image5}
width = {196} height = {196} 
alt = "Image 5"
className = "rounded-[10px]" />


<Image

src = {Image6}
width = {200} height = {200} 
alt = "Image 6"
/>

  </div>



     </div>

    

       </div>
    )
}
    