import Image from 'next/image';
import ProductImage from '../assets/Product Image.png' ;
import Right24px from '../assets/Right 24px.png';

export default function Header () {
    return (

        <div className =" h-[800px] md:w-[620px] lg:w-[720px]  xl:w-[1000px] 2xl:w-[1321px]  2xl:h-[850px] relative top-[20.4px] left-1 md:left-16 lg:left-32 xl:left-56 2xl:left-[300px] rounded-b-[48px] bg-[#F0F2F3]">


    <div className ="hidden 2xl:block 2xl:w-[434px] 2xl:h-[584px] 2xl:absolute 2xl:top-[115px] 2xl:left-[777px]">

<Image src ={ProductImage} alt="ProductImage" />

    </div>


    <section className ="absolute top-[229px]  left-11 lg:left-[70px] rounded-lg ">



<span className ="font-inter font-normal text-sm leading-[14px] tracking-[1.68px] text-[#272343]"> WELCOME TO CHAIRY </span>

<div className =" sm:w-[557px] sm:h-[198px] absolute top-[38px] ">

<span className =" font-inter font-bold text-6xl leading-[66px] text-[#272343]"> Best Furniture Collection for your interior</span>


</div >


<button className = " w-[171px] h-[52px] absolute top-[415px] sm:top-[285px] rounded-lg px-6 py-6 flex items-center gap-5 bg-[#029FAE]">

<span className ="w-[79px] h-[18px] font-inter text-base leading-[17.6px] text-center text-white"> Shop Now </span>

<Image src = {Right24px} alt = "Right arrow" className = "w-6 h-6"/>

</button>








        
    </section>
</div>

        
    )
}