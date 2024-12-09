import Feature from './Feature';
import Image from 'next/image';
import chair from '../assets/Image.png';
import chair2 from '../assets/Image (1).png';
import cartlogo from '../assets/Buy 3.png';
import blackcartlogo from '../assets/Group.png';
import chair3 from '../assets/Image (2).png';
import chair4 from '../assets/Image (3).png';

export default function Ourproducts() {
    return (
        <div className = "w-[1320px] h-[919px] absolute top-[3425px] left-[307px]">

<div className = "w-[205px] h-[35px] absolute top-4 left-[557px]">
<span className = "font-inter text-[32px] font-semibold leading-[35.2px] text-[#272343]"> Our Products </span>
</div>



<div className = " w-[312px] h-[377px] absolute top-[125px] ">

    <Image src = {chair} alt = "whitechair" className = "w-[312px] h-[312px] rounded-md"/> 

    <div className = "w-[49px] h-[26px] absolute top-5 left-5 rounded-[4px] px-[10px] py-[6px] flex gap-[10px] bg-[#01AD5A]">

<span className ="w-[29px] h-[14px] font-inter font-medium text-[13px] leading-[14.3px] text-white"> New </span>


</div>
    

<div className ="w-[256px] h-[51px] absolute top-[326px] flex flex-col gap-[10px]">

<span className = "h-[21px] Product Name font-inter font-normal text-base leading-{20.8px] text-[#007580]"> Library Stool Chair </span>

<span className = "w-[35px] h-5 font-inter font-semibold text-lg leading-[19.8px]"> $20 </span>

</div>

<div className = "w-11 h-11 absolute top-[329.5px] left-[268px] rounded-lg bg-[#029FAE]">
    
    <Image src = {cartlogo} alt ="Addtocart" width = {24} height={24} className = "absolute top-[10px] left-[10px]" />
    
     </div>

</div>


<div className = "w-[312px] h-[377px] absolute top-[125px]   left-[336px]"> 


    <Image src = {chair2} alt = "Pinkstoolchair" className ="w-[312px] h-[312px] rounded-[10px] "/>

    <div className = "w-[54px] h-[26px] absolute top-5 left-5 rounded-[4px] px-[10px] py-[6px] flex gap-[10px] bg-[#F5813F]">

<span className ="w-[34px]  h-[14px] font-inter font-medium text-[13px] leading-[14.3px] text-white"> Sales </span>


</div>

    <div className ="w-[256px] h-[51px] absolute top-[326px] flex flex-col gap-[10px]">

<span className = "h-[21px] Product Name font-inter font-normal text-base leading-{20.8px] text-[#272343]"> Library Stool Chair </span>

<div className = "w-[66px] h-5 flex gap-1">

<span className = "w-[35px] h-5 font-inter font-semibold text-lg leading-[19.8px]"> $20 </span>

<span className = " Sale Price w-[27px] h-[15px] font-inter font-normal text-sm leading-[15.4px] text-decoration line-through text-[#9A9CAA]"> $30</span>

</div>

</div>

<div className = "w-11 h-11 absolute top-[329.5px] left-[268px] rounded-lg bg-[#F0F2F3]">
    
    <Image src = {blackcartlogo} alt ="Addtocart" width = {22} height= {22} className = "absolute top-[11.5px] left-[11px] " />
    
     </div>

</div>


<div className = "w-[312px] h-[377px] absolute top-[125px] left-[672px] ">

    <Image src = {chair3} alt = "Orangestoolchair" width={312} height={312} className = "rounded-[10px]" />

    <div className ="w-[256px] h-[51px] absolute top-[326px] flex flex-col gap-[10px]">

<span className = "h-[21px] Product Name font-inter font-normal text-base leading-{20.8px] text-[#272343]"> Library Stool Chair </span>

<span className = "w-[35px] h-5 font-inter font-semibold text-lg leading-[19.8px]"> $20 </span>

</div>

<div className = "w-11 h-11 absolute top-[329.5px] left-[268px] rounded-lg bg-[#F0F2F3]">
    
    <Image src = {blackcartlogo} alt ="Addtocart" width = {22} height= {22} className = "absolute top-[11.5px] left-[11px] " />
    
     </div>




</div>


<div className = "w-[312px] h-[377px] absolute top-[125px] left-[1008px] ">

<Image src = {chair4} alt = "whitesofachair" width = {312} height = {312} className = "rounded-[10px]"/>

<div className ="w-[256px] h-[51px] absolute top-[326px] flex flex-col gap-[10px]">

<span className = "h-[21px] Product Name font-inter font-normal text-base leading-{20.8px] text-[#272343]"> Library Stool Chair </span>

<span className = "w-[35px] h-5 font-inter font-semibold text-lg leading-[19.8px]"> $20 </span>

</div>

<div className = "w-11 h-11 absolute top-[329.5px] left-[268px] rounded-lg bg-[#F0F2F3]">
    
    <Image src = {blackcartlogo} alt ="Addtocart" width = {22} height= {22} className = "absolute top-[11.5px] left-[11px] " />
    
     </div>

     
</div>

            </div>
    )
}