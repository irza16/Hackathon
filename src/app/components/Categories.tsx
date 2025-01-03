import Image from 'next/image';
import chair5 from '../assets/Image (4).png';
import chair6 from '../assets/Image (5).png';
import chair7 from '../assets/Image (6).png';


export default function TopCateogry() {
    return (


        <div className = " w-[2216px] h-[508px] absolute top-[3100px] xl:top-[1867px] ">

<div className = "w-[1920px] h-[44px] flex justify-between items-center px-4 sm:px-9 md:px-16 lg:px-32 xl:px-56 2xl:px-[300px] ">


    <span className = "w-[237px] h-[35px] font-inter text-[32px] font-semibold  leading-[35.2px] text-[#272343] "> Top categories </span>
</div>


<div className = " w-[324px] sm:w-[424px] xl:w-[324px] 2xl:w-[424px] h-[424px] absolute top-[84px] left-4 sm:left-9 md:left-16 lg:left-32 xl:left-56 2xl:left-[300px] ">

<Image src = {chair5} alt = "wingchair" className = "rounded-[10px]"/>

<div className = "w-[324px]  2xl:w-[424px] h-[85px] absolute  top-[239px] sm:top-[339px] xl:top-[239px] 2xl:top-[339px] rounded-b-[10px]  p-5 flex flex-col gap-2 bg-black opacity-70">


    <span className = 'w-96 h-[22px] font-inter text-xl leading-[22px] text-white '> Wing Chair</span>

    <span className = 'w-[376px] h-[15px] font-inter font-normal text-sm leading-[15.4px] text-white opacity-70 '> 3,584 Products </span>

</div>


</div>


<div className = "w-[324px] sm:w-[424px] xl:w-[324px] 2xl:w-[424px] h-[424px] absolute top-[460px] left-4 sm:left-9 md:left-16 lg:left-32   xl:left-[580px] 2xl:left-[748px] xl:top-[84px]">


    <Image src = {chair6} alt="Woodenchair"  className = "rounded-[14px]"/>

    <div className = " w-[324px] 2xl:w-[424px] h-[85px] absolute top-[239px] 2xl:top-[339px] rounded-b-[10px]  p-5 flex flex-col gap-2 bg-black opacity-70">


    <span className = 'w-96 h-[22px] font-inter text-xl leading-[22px] text-white '> Wooden Chair</span>

    <span className = 'w-[376px] h-[15px] font-inter font-normal text-sm leading-[15.4px] text-white opacity-70 '> 157 Products </span>

</div>


</div>


<div className = "w-[324px] sm:w-[424px] xl:w-[324px] 2xl:w-[424px] h-[424px] absolute top-[836px] left-4 sm:left-9 md:left-16 lg:left-32  xl:top-[84px] xl:left-[936px] 2xl:left-[1196px]">


    <Image src = {chair7} alt="Deskchair" className = "rounded-[14px]"/>

    <div className = " w-[324px] 2xl:w-[424px] h-[85px] absolute top-[239px] 2xl:top-[339px] rounded-b-[10px]  p-5 flex flex-col gap-2 bg-black opacity-70">


    <span className = 'w-96 h-[22px] font-inter text-xl leading-[22px] text-white '> Desk Chair</span>

    <span className = 'w-[376px] h-[15px] font-inter font-normal text-sm leading-[15.4px] text-white opacity-70 '> 154 Products </span>

</div>


</div>


    </div>
    
    
    
    )



}