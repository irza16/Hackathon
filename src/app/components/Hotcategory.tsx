import Image from 'next/image';
import itemcategory from '../assets/item-category 1.png';
import itemcategory1 from '../assets/01.png';
import itemcategory2 from '../assets/02.png';
import itemcategory3 from '../assets/20.png';




export default function Hotcategory () {
    return (


<div className = "">

        <div className = "w-[1320px] h-[648px] absolute top-[2604px] left-[323px] ">

<Image src = {itemcategory} alt ="Orangestoolchair" width = {648} height = {648} />

<Image src = {itemcategory1} alt = "Whitesoofachair" width = {312} height = {312} className = "absolute  top-[1px] left-[672px] "/>

<Image src = {itemcategory2} alt = "toolchair" width = {312} height = {312} className = "absolute  top-[336px] left-[672px] "/>

<Image src = {itemcategory3} alt = "Whitetoolchair" width = {312} height = {312} className = "absolute  top-[1px] left-[1008px] "/>

<Image src = {itemcategory3} alt = "Whitetoolchair" width = {312} height = {312} className = "absolute  top-[336px] left-[1008px] "/>


        </div>



<div className = "w-[648px] h-[52px] absolute top-[2940px] -left-[52px] rotate-90">


<span className = " Body 2 font-roboto font-normal text-[34px] leading-[39.8px] text-center text-black uppercase  ">
Explore new and popular styles
</span>

</div>


</div>



    )
}