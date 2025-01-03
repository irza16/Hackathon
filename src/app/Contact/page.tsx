import Image from "next/image";
import locationIcon from "../assets/Vector (4).png";
import CallIcon from "../assets/Vector (5).png";
import time from "../assets/Vector (6).png";
import trophy from "../assets/Group (1).png";
import check from "../assets/Vector (8).png";
import support from "../assets/Vector (7).png";

export default function ContactUs() {
    return (


        <div>


<div className="w-[1440px] h-[1144px] absolute top-[203px] left-60">


    <span className="w-[375px] h-[54px] absolute top-[98px] left-[533px] font-poppins font-semibold text-4xl leading-[54px] text-black"> Get In Touch With Us</span>



    <p className="w-[644px] h-12 absolute top-[159px] left-[398px] font-poppins font-normal text-base text-center text-[#9F9F9F]">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>




    <div className="w-[393px] h-[537px] absolute top-[289px] left-[191px] ">




<Image 

src={locationIcon}
alt="Location Icon"
width={22}
height={27.59}
className="absolute top-[58px] left-[54px] "
/>


<span className="w-[99px] h-9 absolute top-[58px] left-[106px] font-poppins font-medium text-2xl leading-9 text-black"> Address</span>


<span className="w-[212px] h-[57px] absolute top-[94px] left-[106px] font-inter font-normal text-base leading-[19.36px] texr-black">236 5th SE Avenue, New York NY10000, United States</span>


<Image 
src={CallIcon}
alt="CallIcon"
width={22.27}
height={22.27}
className=" absolute top-[211px] left-[46px] "/>

<span className="w-[76px] h-9 absolute top-52 left-[106px] font-poppins font-medium text-2xl leading-9 text-black"> Phone </span>

<span className="w-[212px] h-[38px] absolute top-[244px] left-[106px] font-inter font-normal text-base leading-[19.39px] text-black">Mobile: +(84) 546-6789
Hotline: +(84) 456-6789</span>


<Image 
src={time}
alt="clock"
width={23}
height={23}
className="absolute top-[340px] left-[53px] " />


<span className="w-[166px] h-9 absolute top-[334px] left-[106px] font-poppins font-medium text-2xl leading-[36px] text-black"> Working Time </span>


<p className="w-[212px] h-[76px] absolute top-[370px] left-[106px] font-inter font-normal text-base leading-[19.36px] text-black"> Monday-Friday: 9:00 - 22:00
Saturday-Sunday: 9:00 - 21:00</p>
    </div>


    <div className=" w-[635px] h-[923px] absolute top-[221px] left-[614px] ">



        <div className="w-[531px] h-[741px] absolute top-[119px] left-[52px]">


<span className = "w-[111.25px] h-6 absolute left-[1px] font-poppins font-medium text-base text-black">Your name</span>

<input
      type="name"
      placeholder="Abc"
      className ="w-[528.75px] h-[75px] border border-[#9F9F9F] rounded-[10px] text-base absolute top-[46px] left-[2.25px] placeholder:text-[#9F9F9F]
      placeholder:font-poppins placeholder:font-normal placeholder:text-base  placeholder:absolute placehoder:top-[50px] placeholder:left-[20px]     "
    />

<span className = "w-[143.75px] h-6 absolute top-[157px] left-[1px] font-poppins font-medium text-base text-black">Email address</span>

<input
      type="email"
      placeholder="Abc@def.com"
      className ="w-[528.75px] h-[75px] border border-[#9F9F9F] rounded-[10px] text-base absolute top-[203px] left-[2.25px] placeholder:text-[#9F9F9F]
      placeholder:font-poppins placeholder:font-normal placeholder:text-base  placeholder:absolute placehoder:top-[50px] placeholder:left-[20px]     "
    />

<span className = "w-[75.96px] h-6 absolute top-[314px] left-[3px] font-poppins font-medium text-base text-black">Subject</span>


<input
      type="Subject"
      placeholder="This is Optional"
      className ="w-[526.75px] h-[75px] border border-[#9F9F9F] rounded-[10px] text-base absolute top-[360px] left-[4.25px] placeholder:text-[#9F9F9F]
      placeholder:font-poppins placeholder:font-normal placeholder:text-base  placeholder:absolute placehoder:top-[50px] placeholder:left-[20px]     "
    />



<span className = "w-[75.96px] h-6 absolute top-[471px] font-poppins font-medium text-base text-black">Message</span>

<input
      type="Message"
      placeholder="Hi! i’d like to ask about"
      className ="w-[527px] h-[120px] border border-[#9F9F9F] rounded-[10px] text-base absolute top-[517px] left-[1px] placeholder:text-[#9F9F9F]
      placeholder:font-poppins placeholder:font-normal placeholder:text-base  placeholder:absolute 
    placeholder:left-[20px] 
    placeholder:top-[26px]
    "
    />


    <button className="w-[237px] h-[55px] absolute top-[686px] left-[7px] rounded-[5px] border border-[#b88E2F] bg-[#029FAE]"> 


        <span className="w-[59.21px] h-[27.5px] absolute top-[13.75px] left-[89px] font-poppins font-normal text-base text-white">Submit</span>
    </button>
        </div>



    </div>

<div className="w-[1320px] h-[270px] absolute top-[1144px] left-[60px] py-[100px] bg-[#F4F4F4]  flex justify-center items-center">


    <div className="w-[1188px] h-[70px] flex justify-between items-center">


<div className="w-[337px] h-[70px] flex justify-between items-center gap-[10px]">


<Image 
src={trophy}
alt="Trophy"
width={52.77}
height={60}
/>

<div className="w-[267px] h-[70px] flex flex-col gap-[2px]">



    <span className="w-[157px] h-[38px] font-poppins font-semibold text-[25px] leading-[37.5px] text-[#242424]"> High Quality </span>


    <p className="w-[267px] h-[30px] font-poppins font-medium text-xl leading-[30px] text-[#898989]"> crafted from top materials</p>
</div>

</div>

<div className="w-[328px] h-[70px] flex justify-between items-center gap-[10px]">


<Image 
src={check}
alt="Guarantee symbol"
width={60}
height={58.13}
/>

<div className="w-[258px] h-[70px] flex flex-col gap-[2px]">



    <span className="w-[258px] h-[38px] font-poppins font-semibold text-[25px] leading-[37.5px] text-[#242424]"> Warranty Protection </span>


    <p className="w-[126px] h-[30px] font-poppins font-medium text-xl leading-[30px] text-[#898989]"> Over 2 years </p>
</div>

</div>

<div className="w-[259px] h-[70px] flex justify-between items-center gap-[10px]">


<Image 
src={support}
alt="Customer support symbol"
width={52.94}
height={60}
/>

<div className="w-[189px] h-[70px] flex flex-col gap-[2px]">



    <span className="w-[177px] h-[38px] font-poppins font-semibold text-[25px] leading-[37.5px] text-[#242424]"> 24/7 Support </span>


    <p className="w-[189px] h-[30px] font-poppins font-medium text-xl leading-[30px] text-[#898989]"> Dedicated support </p>
</div>

</div>

    </div>
</div>


</div>




        </div>
    )
}