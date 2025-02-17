import React from "react";
import Feature from "../components/Feature";
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

<Feature heading = "All Products" filterTag="featured" top = "260px" />

<Feature  top = "718px" filterTag="R2" />

<Feature  top = "1179px" filterTag="R3" />


<div className = "w-[1515px] 2xl:w-[1924px] h-[754px] absolute top-[1813px] px-[200px] py-[100px] flex gap-[70px] bg-[#1E2832] bg-opacity-5">
    
    <div className = "Newsletter w-[760px] h-[165px] absolute top-[100px] left-[382px] 2xl:left-[582px] ">

<div className="section-title w-[707px] h-[59px] absolute  left-[29px]">

<span className = "h2 font-roboto font-medium text-[50px] leading-[58.59px] text-center text-black"> Or Subscribe To The Newsletter</span>





    </div>



    <div className = "w-[643px] h-8 absolute  top-[133px] ">

<input 
type = "Email Address"
placeholder = "Email address..."

className = "Input text w-[117px] h-[19px] absolute left-[15px] font-roboto font-semibold text-base leading-[18.75px] text-[#1E2832] opacity-50" 
/>

<div className = " w-[643px] absolute top-8 border-spacing-[2px] border-[#000000] border-2"></div>

    </div>

    
    


<div className = "w-[91px] h-8 absolute top-[133px] left-[669px] flex gap-[10px]">

<div className = "w-[91px] h-[22px] px-4 flex flex-col items-center gap-[10px]">



    <button className = "w-[59px] h-[22px] font-sans font-normal text-base leading-[21.79px] text-center text-[#1E2832] "> SUBMIT   </button>

<div className="w-[91px] border-2 border-[#1E2832]"></div>

</div>

    
</div>

</div>

<div className = " w-[1024px] 2xl:w-[1324px] h-[319px] absolute top-[335px] ">

<div className = " w-[1013px] h-[59px] absolute  left-4 2xl:left-[451px] ">

<span className = "h2 font-roboto font-medium text-[50px] leading-[58.59px] text-center text-black"> Follow Products And Discounts On Instagram</span>


</div>






  <div className = "w-[1324px] h-[200px] absolute top-[119px] 2xl:left-[300px] flex gap-6">


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
className="hidden 2xl:block"
/>

  </div>


  </div>
     </div>

    

       </div>
    )
}
    