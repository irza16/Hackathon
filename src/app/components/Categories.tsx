import Image from 'next/image';
import chair5 from '../assets/Image (4).png';
import chair6 from '../assets/Image (5).png';
import chair7 from '../assets/Image (6).png';


export default function TopCateogry() {
    return (


        <div className = " w-[2216px] h-[508px] absolute top-[1867px] ">

<div className = "w-[1920px] h-[44px] flex justify-between items-center px-[300px]">


    <span className = "w-[237px] h-[35px] font-inter text-[32px] font-semibold  leading-[35.2px] text-[#272343] "> Top categories </span>
</div>


<div className = "w-[424px] h-[424px] absolute top-[84px] left-[300px]">

<Image src = {chair5} alt = "wingchair" width ={424} height = {424 } className = "rounded-[10px]"/>

<div className = "h-[85px] absolute top-[339px] rounded-b-[10px]  p-5 flex flex-col gap-2 bg-black opacity-70">


    <span className = 'w-96 h-[22px] font-inter text-xl leading-[22px] text-white '> Wing Chair</span>

    <span className = 'w-[376px] h-[15px] font-inter font-normal text-sm leading-[15.4px] text-white opacity-70 '> 3,584 Products </span>

</div>


</div>


<div className = "w-[424px] h-[424px] absolute top-[84px] left-[748px]">


    <Image src = {chair6} alt="Woodenchair" width ={424} height = {424} className = "rounded-[14px]"/>

    <div className = "h-[85px] absolute top-[339px] rounded-b-[10px]  p-5 flex flex-col gap-2 bg-black opacity-70">


    <span className = 'w-96 h-[22px] font-inter text-xl leading-[22px] text-white '> Wooden Chair</span>

    <span className = 'w-[376px] h-[15px] font-inter font-normal text-sm leading-[15.4px] text-white opacity-70 '> 157 Products </span>

</div>


</div>


<div className = "w-[424px] h-[424px] absolute top-[84px] left-[1196px]">


    <Image src = {chair7} alt="Deskchair" width ={424} height = {424} className = "rounded-[14px]"/>

    <div className = "h-[85px] absolute top-[339px] rounded-b-[10px]  p-5 flex flex-col gap-2 bg-black opacity-70">


    <span className = 'w-96 h-[22px] font-inter text-xl leading-[22px] text-white '> Desk Chair</span>

    <span className = 'w-[376px] h-[15px] font-inter font-normal text-sm leading-[15.4px] text-white opacity-70 '> 154 Products </span>

</div>


</div>


    </div>
    
    
    
    )



}