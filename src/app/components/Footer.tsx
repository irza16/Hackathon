import Image from 'next/image';

import LogoIcon from '../assets/Logo Icon.png';
import FacebookIcon from '../assets/Facebook---Negative 2.png';
import TwitterIcon from '../assets/Twitter---Negative 1.png';
import InstagramIcon from '../assets/Instagram 1.png';
import Vector1 from '../assets/Vector (1).png';
import YoutubeIcon from '../assets/YouTube---Negative 1.png';
import Logos from '../assets/Logos.png';

export default function Footer() {
    return (
        <footer className ="w-[1920px] h-[418px] relative top-[4480px] -left-3">


<div className = "w-[350px] h-[198px] absolute top-20 left-[300px] flex flex-col  gap-6">

    <div className ="w-[168px] h-10 gap-2 flex items-center ">

    <Image src = {LogoIcon} alt="Logo Icon" className = "w-10 h-10"/>

    <span className = "w-[120px] h-[31px] font-inter text-[26px] leading-[31.2px] text-[#272343]"> Comforty </span>


    </div>

    <p className ="w-[350px] h-[72px] opacity-60 font-inter font-normal text-base text-[#272343]"> Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
    Cras egestas purus </p>


    <div className = "w-[206px] h-[38px] flex gap-1">

<span className = "w-[38px] h-[38px] border border-[#007580] rounded-full">

<Image src ={FacebookIcon} alt = "Facebook Logo" className ="w-4 h-4 relative top-[10px] left-[10px] " />

</span>


<div className = "w-[38px] h-[38px]">


<Image src = {TwitterIcon} alt ="TwitterLogo" className ="w-4 h-4 relative top-[11px] left-[11px] "/>

</div>

<div className = "w-[38px] h-[38px]">

<Image src = {InstagramIcon} alt ="InstagramIcon" className = "w-4 h-4 relative top-[11px] left-[11px]" />


</div>


<div className = "w-[38px] h-[38px]">

<Image src = {Vector1} alt ="PinterestIcon" className = "w-4 h-4 relative top-[11px] left-[11px]" />


</div>


<div className = "w-[38px] h-[38px]">

<Image src = {YoutubeIcon} alt ="YoutubeIcon" className = "w-4 h-4 relative top-[11px] left-[11px]" />


</div>




    </div>

</div>



<div className = "w-[105px] h-[203px] relative top-20 left-[747px] flex flex-col  gap-5">


    <span className ='font-inter font-medium text-sm leading-[15.4px] tracking-[0.84px] text-[#9A9CAA]'> CATEGORY </span>


    <ul className = "w-[105px] h-[168px] flex flex-col gap-3"> 

        <li className = " w-[35px] h-[18px] font-inter font-normal text-base leading-[17.6px] text-[#272343]">Sofa</li>

        <li className = " w-[68px] h-[18px] font-inter font-normal text-base leading-[17.6px] text-[#272343]">Armchair</li>

        <li className = " w-[83px] h-[18px] font-inter font-normal text-base leading-[17.6px] text-[#272343]">Wing Chair</li>

        <li className = " w-[83px] h-[18px] font-inter font-normal text-base leading-[17.6px] underline decoration-solid decoration-skip-ink-none text-[#007580]"> Desk Chair </li>

        <li className = " w-[108px] h-[18px] font-inter font-normal text-base leading-[17.6px] text-[#272343]">Wooden Chair</li>

        <li className = " w-[86px] h-[18px] font-inter font-normal text-base leading-[17.6px] text-[#272343]">Park Bench</li>


    </ul>


</div>


<div className = "w-[156px] h-[143px] absolute top-20 left-[971.5px]  flex flex-col gap-5">

<span className = "w-[72px] h-[15px] font-inter font-medium text-sm leading-[15.4px] tracking-[0.84px] text-[#9A9CAA]"> Support </span>

<ul className = "w-[156px] h-[108px] flex flex-col gap-3"> 

        <li className = " w-[115px] h-[18px] font-inter font-normal text-base leading-[17.6px] text-[#272343]">Help & Support</li>

        <li className = " w-[156px] h-[18px] font-inter font-normal text-base leading-[17.6px] text-[#272343]">Terms & Conditions</li>

        <li className = " w-[105px] h-[18px] font-inter font-normal text-base leading-[17.6px] text-[#272343]">Privacy Policy</li>

        <li className = " w-[35px] h-[18px] font-inter font-normal text-base leading-[17.6px] text-[#272343]"> Help </li>

        

    </ul>



</div>


<div className = "w-[424px] h-[142px]  absolute top-20 left-[1196px]">

<span className = "w-[102px] h-[15px] font-inter font-medium text-sm leading-[15.4px] tracking-[0.84px] text-[#9A9CAA]"> NEWSLETTER</span>

<div className ="w-[285px] h-[46px] absolute top-[35px] flex gap-2">

    <input
      type="email"
      placeholder="Your email"
      className ="w-[285px] h-[46px] border border-[#E1E3E5] rounded-lg text-sm placeholder:text-[#9A9CAA]
      placeholder:font-inter placeholder:font-normal placeholder:text-base placeholder:leading-4 placeholder:absolute placehoder:top-[50px] placeholder:left-[20px]     "
    />
    </div>


    <button className=" w-[127px] h-[46px] px-6 py-[14px] bg-[#029FAE] rounded-lg absolute top-[35px] left-[297px] flex items-center gap-5 "
    >
<span className = " w-[79px] h-[18px] font-inter text-base leading-[17.6px] text-center text-white"> Subscribe </span>

     
    </button>
 

  
  <p className ="w-[424px] h-[46px] absolute top-24 opacity-60 text-[#272343] text-[15px] font-inter font-normal leading-[22.5pxpx]">

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
  </p>



</div>

<div className = "w-[1920px] h-[75px] absolute top-[343px] flex justify-between items-center px-[300px] py-6 bg-white shadow-custom">


<div className = "w-[341px] h-[21px] font-poppins font-normal text-sm text-[#9A9CAA] leading-[21px]">@ 2021 - Blogy - Designed & Develop by <span className = " font-poppins font-normal text-sm leading-[21px] text-[#272343] " >  Zakirsoft </span> 

</div>




<div className = " w-[227px] h-[27px] absolute top-6 left-[1393px] bg-blend-color gap-[10px] opacity-50">


<Image src = {Logos} alt = "Logos"/>

</div>

</div>







        </footer>
    )
}