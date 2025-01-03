import Image from 'next/image';
import itemcategory from '../assets/item-category 1.png';
import itemcategory1 from '../assets/01.png';
import itemcategory2 from '../assets/02.png';
import itemcategory3 from '../assets/20.png';




export default function Hotcategory () {
    return (


<div className = "hidden xl:block">

        <div className = " xl:w-[1300px] 2xl:w-[1320px] h-[648px] absolute top-[2604px] xl:left-[224px]  2xl:left-[323px] ">

<Image src = {itemcategory} alt ="Orangestoolchair" className='xl:w-[600px] h-[600px] 2xl:w-[648px] 2xl:h-[648px]'/>

<Image src = {itemcategory1} alt = "Whitesoofachair" className = "xl:w-[288px] 2xl:w-[312px] xl:h-[288px] 2xl:h-[312px] absolute  top-[1px] xl:left-[632px] 2xl:left-[672px] "/>

<Image src = {itemcategory2} alt = "toolchair"  className = "xl:w-[288px] 2xl:w-[312px] xl:h-[288px] 2xl:h-[312px] absolute xl:top-[312px] top-[336px] xl:left-[632px] 2xl:left-[672px] "/>

<Image src = {itemcategory3} alt = "Whitetoolchair"  className = "xl:w-[288px] 2xl:w-[312px] xl:h-[288px] 2xl:h-[312px] absolute  top-[1px]  xl:left-[952px] 2xl:left-[1008px] "/>

<Image src = {itemcategory3} alt = "Whitetoolchair" className = "xl:w-[288px] 2xl:w-[312px] xl:h-[288px] 2xl:h-[312px] absolute  xl:top-[312px] top-[336px]  xl:left-[952px] 2xl:left-[1008px] "/>


        </div>



<div className = "w-[648px] h-[52px] absolute xl:top-[2880px] 2xl:top-[2905px] 2xl:-left-[32px] xl:-left-[122px] transform -rotate-90  flex justify-center items-center">


<span className = " Body 2 font-roboto font-normal text-[34px] leading-[39.8px] text-center text-black uppercase  ">
Explore new and popular styles
</span>

</div>


</div>



    )
}