
import Image from 'next/image';
import Image1 from '../assets/Image (2).png';
import Image2 from '../assets/Image (4).png';
import heart from '../assets/Vector (2).png';
import bin from '../assets/Vector (3).png';


export default function Cart() {
    
    const cartItems = [
        {
          id: 1,
          name: "Library Stool Chair",
          description: "Ashen Slate/Cobalt Bliss",
          size: "L",
          quantity: 1,
          price: 99,
          image: Image1,
        },
        {
          id: 2,
          name: "Library Stool Chair",
          description: "Ashen Slate/Cobalt Bliss",
          size: "L",
          quantity: 1,
          price: 99,
          image: Image2,
        },
      ];

    return (

        <div className="w-[1609px] h-[632.89px] relative top-[174px] left-[179px]">



            <div className = "w-[1100px] h-[547.89px]">


<div className = "w-[733.33px] absolute top-[22px] left-[88px] ">

<span className = "w-[55px] h-[33px] absolute top-0 left-4 font-inter font-medium text-[22px] leading-[33px] text-[#111111]">Bag</span>






{cartItems.map((item, index) => (
            <div
              key={item.id}
            className="w-[963px] h-[218px] absolute left-4 "
            style={{ top: `${34 + index * 219}px`
             }}
            >
<div className = "w-[933px] h-[218px] py-6"
    style = {{
boxShadow: "0px -1px 0px 0px #E5E5E5 inset",
}}>


                <div className='w-[933px] h-[163px] flex gap-[30px]'>
              

<Image
        src={item.image}
        alt={item.name}
        width={150}
        height={150}
      />

<div className = "w-[753px] h-[163px] flex flex-col gap-6">

<div className='w-[687.53px] h-[105px] flex gap-[376px]'>

    <div className='w-[235.3px] h-[105px]px-[19.92px]'>

<span className="w-[141px] h-[21px] font-inter font-normal text-base leading-[20.8px] ">{item.name}</span>
                <p className="w-[173px] h-7 font-inter font-normal text-[15px] leading-7 text-[#757575] ">{item.description}</p>

                <div className='w-[235.31px] h-7  flex'>

                    <div className='w-[97.2px] h-7 flex gap-[0.2px]'>

                <span className=" font-inter font-normal text-[15px] leading-7 text-[#757575]">Size {item.size}</span>
</div>
                <span className="font-inter font-normal text-[15px] leading-7 text-[#757575]">Quantity   {item.quantity}</span>
                </div>
</div>

<div className='w-[76.22px] h-7 pl-[2px] pr-[4.22px]'>


  <span className='
  w-[70px] h-7 font-inter font-normal text-[15px] leading-7 text-right text-[#111111]'>MRP: ${item.price}</span>
</div>

</div>





<div className=' w-[537.33px] h-[34px]  flex items-center gap-4' >

<button >

  <Image 

  src = {heart}
  alt = "like button"
  width={24}
  height={24}
  />



</button>
                  <button>


                    <Image 

                    src={bin}
                    alt='Delete cart button'
                    width={18.5}
                    height={19.5}
                    />
                  </button>

</div>
</div>

</div>

</div>
</div>
 ))}

</div>

   



</div>



<div className='w-[350.67px] h-[295px] absolute top-7 left-[1100px]'>


  <span className='w-24 h-[33px] absolute top-[-1px] left-2 font-inter font-medium text-[21px] leading-[33px] text-[#111111]'>

Summary

  </span>



  <div className='w-[334.67px] h-7 absolute top-[57px] left-2'>



    <span className='w-[60px] h-7 font-inter font-normal text-[15px] leading-7 text-[#111111]'> Subtotal</span>


    <span className = "w-[55px] h-6 absolute top-1 left-[276px] font-inter font-medium text-sm leading-[24px] text-right text-[#111111]"> $198.00 </span>
  </div>


<div className='absolute top-[93px] left-2 pr-[0.42px] flex gap-[88.25px]'>



  <span className='w-[214px] h-7 font-inter font-normal text-[15px] leading-7 text-[#111111]'> Estimated Delivery & Handling </span>


<span className='w-8 h-7 font-inter font-normal text-[15px] leading-7 text-right text-[#111111]'> Free</span>

</div>


<div className='w-[340.38px] h-[62px] absolute top-[141px] left-2 pr-[4.38px] py-[17px] flex gap-[248px] border-y border-y-[#E5E5E5] border-x-0'>



<span className='w-[33px] h-7 font-inter font-normal text-sm leading-[28px] text-right text-[#111111]'> Total</span>

<span className = "w-[55px] h-6 font-inter font-medium text-sm leading-[24px] text-right text-[#111111]"> $198.00 </span>


</div>




<button className='w-[334.67px] h-[60px] absolute top-[235px] left-2 px-[100.88px] py-[18px] rounded-[30px] bg-[#029FAE]'>



  <span className='w-[133px] h-6 font-inter font-medium text-[15px] leading-6 text-center text-white'>Member Checkout</span>





</button>

</div>



            </div>





        
    )
}