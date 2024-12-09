import Image from 'next/image';
import ProductImage from '../assets/Product Image.png' ;
import Right24px from '../assets/Right 24px.png';

export default function Header () {
    return (

        <div className ="w-[1321px] h-[850px] relative top-[20.4px] left-[300px] rounded-b-[48px] bg-[#F0F2F3]">


    <div className ="w-[434px] h-[584px] absolute top-[115px] left-[777px]">

<Image src ={ProductImage} alt="ProductImage" />

    </div>


    <section className ="w-[557px] h-[337px] absolute top-[229px] left-[70px] rounded-lg ">



<span className ="w-[177px] h-[14px] font-inter font-normal text-sm leading-[14px] tracking-[1.68px] text-[#272343]"> WELCOME TO CHAIRY </span>

<div className ="w-[557px] h-[198px] absolute top-[38px] ">

<span className ="font-inter font-bold text-6xl leading-[66px] text-[#272343]"> Best Furniture Collection for your interior</span>


</div >


<button className = " w-[171px] h-[52px] absolute top-[285px] rounded-lg px-6 py-6 flex items-center gap-5 bg-[#029FAE]">

<span className ="w-[79px] h-[18px] font-inter text-base leading-[17.6px] text-center text-white"> Shop Now </span>

<Image src = {Right24px} alt = "Right arrow" className = "w-6 h-6"/>

</button>








        
    </section>
</div>

        
    )
}