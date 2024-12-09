import Image from "next/image";
import check1 from '../assets/check 1.png';
import Vector from '../assets/Vector.png';
import alertcircle1 from '../assets/alert-circle 1.png';
import LogoIcon from '../assets/Logo Icon.png';
import Link from 'next/link';
import Group from '../assets/Group.png';

export default function Navbar () {
     return (
        <div className = "w-[1920px] h-[203px] bg-white"> 
        
        <div className = "top flex justify-between items-center w-[1920px] h-[45px] px-[300px] py-[14px] bg-[#272343]"> 

<div className = "flex items-center gap-2 opacity-70">

    

        <Image src = {check1} alt = "check 1" className="w-4 h-4" />

        

<div> 
    
<span className="font-inter font-normal text-[13px] leading-[14.3px] text-white opacity-70">Free Shipping on All Orders Over $50 </span>

     </div>
     </div>

     <div className = "flex items-center  gap-6 opacity-70  "> 



    <div className ="w-[37px] h-[17px] flex items-center gap-[6px]">

    <span className = "w-6 h-[17px]font-inter font-normal text-[13px] leading-[16.9px] text-center text-white"> Eng </span>

    <div className ="top-[6.75px] left-[30px] "
> 
<Image src = {Vector} alt = "Vector" className = "w-[7px] h-[3.5px]" />

</div>

</div>



<div className = "flex justify-center gap-[6px] "> 

     <span className = "w-[30px] h-[17px] font-inter font-normal text-[13px] leading-[16.9px] text-center text-white"> Faqs </span>
</div>

<div className = "flex justify-center w-[87px] h-[17px] gap-[6px]"> 

<Image src = {alertcircle1} alt = "alert-circle 1" className="w-4 h-4 opacity-70" />

<span className = "w-[65px] h-[17px]font-inter font-normal text-[13px] leading-[16.9px] text-center text-white"> Need Help</span>

</div>

     </div>
</div>
     

        

        <div className = " w-[1920px] h-[84px] px-[300px] py-5 bg-[#F0F2F3] flex justify-between items-center ">

          <div className ="flex items-center w-[166px] h-10 gap-2"> 

               <Image src = {LogoIcon} alt="Logo Icon" className = "w-10 h-10"/>

          

          <div className ="w-[118px] h-[31px] ">  
               
               <span className = " font-inter font-medium text-[26px] leading-[31.2px] text-[#272343]"> Comforty </span>

               </div>

</div>


<div className ="User Links flex justify-center items-center w-[120px] h-11 gap-3 rounded-lg py-[11px] px-4 bg-white">


               <div className = "flex justify-center items-center w-14 h-[22px] gap-2">
                    
                    <div className ="w-[22px] h-[22px] flex items-center justify-center"> 

<Link href ="/cart ">

<Image src ={Group} alt = "Group" className = "w-[16.96px] h-[16.54px] top-[2.98px] left-[2.52px]" />


</Link>

                    </div>


<div className = "flex justify-center items-center w-[26px] h-[13px]">

     <Link href ='/cart'>
<span className = " font-inter font-medium text-[12px] leading-[13.2px] text-center text-[#272343]"> Cart </span>

</Link>

</div>
   
                     </div>

                    
               
               
              <div className = "relative flex items-center justify-center w-5 h-5">
               
               <div className =" Ellipse1 absolute flex justify-center items-center w-5 h-5 bg-[#007580] rounded-full">

<span className ="font-sans font-medium text-[10px] text-center text-white"> 2 </span>

               </div>
               
               </div> 
              

               </div>

                
          
          
           </div>

        <div className ="w-[1920px] h-[74px] flex justify-between items-center px-[300px] py-[14px] bg-white shadow-custom"> 

          <div className = " flex justify-center items-center w-[339px] h-[15px] gap-8">


               <Link className = "Nav_links w-10 h-[15px] font-medium font-inter text-sm leading-[15.4px] text-[#007580]  " href ="/Home">Home</Link>

               <Link className = "Nav_links w-10 h-[15px] font-medium font-inter text-sm leading-[15.4px] text-[#636270]  " href ="/Shop">Shop</Link>

               <Link className = "Nav_links w-[53px] h-[15px] font-medium font-inter text-sm leading-[15.4px] text-[#636270]  " href ="/Product">Product</Link>


               <Link className = "Nav_links w-[42px] h-[15px] font-medium font-inter text-sm leading-[15.4px] text-[#636270]  " href ="/Pages">Pages</Link>

               <Link className = "Nav_links w-[41px] h-[15px] font-medium font-inter text-sm leading-[15.4px] text-[#636270]  " href ="/About">About</Link>
          </div>



<div className = "w-[168px] h-[15px] flex items-center gap-2">

<span className ="w-[57px] h-[15px] font-inter font-normal text-sm leading-[15.4px] text-[#636270]"> Contact: </span>

<span className = "w-[103px] h-[15px] font-inter font-medium text-sm leading-[15.4px] text-[#272343]">(808) 555-0111</span>



</div>
        </div>

        </div>
     )
}

