import React from 'react';
import plus from "../assets/Plus.png";
import Image from "next/image";






export default function FAQPage(){
    const questions = [
      { question: 'What types of chairs do you offer?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?' },
      { question: 'How can we get in touch with you?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?' },
      { question: 'Do your chairs come with a warranty?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?' },
      { question: 'What will be delivered? And When?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?' },
      { question: 'Can I try a chair before purchasing?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?' },
      { question: 'How do I clean and maintain my Comforty chair?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?' },
    ];



    


return (

<div className="w-[1920px] h-[1564px] bg-white">

<div className="w-[1320px] h-[731px] relative top-[285px] left-[320px] ">


    <div className="w-[771px] h-[101px] absolute left-[274px]">


        <span className="w-[510px] h-14  font-helvetica font-bold text-5xl leading-[56px] text-[#333333] absolute left-[84px]"> Questions Looks Here</span>


        <p className="w-[771px] h-6 font-inter font-normal text-base text-center text-[#4F4F4F] absolute top-[75px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
    </div>

    <div
          
          className="w-[1320px] h-[558px] absolute   top-[173px] left-0"
         
        >
    
    {questions.map((item, index) => (
        
          <div
          key={index}
            className="w-[648px] h-[170px] absolute left-[30px] rounded-lg bg-[#F7F7F7]"
            style = {{ top: `${
                ( index % 3 ) * 194
              }px`,
              left: index < 3 ? "0px" : "672px",
            
            }}
          >

            <div className='w-[600px] h-[122px] '>

            <span
              className="h-[26px] absolute top-6 left-6 font-inter font-bold text-lg leading-[26px] text-[#333333]"
            >
              {item.question}
            </span>
            <p
              className="w-[600px] h-[72px] absolute top-[74px] left-6 font-inter font-normal text-base text-[#4F4F4F]"
            >
              {item.answer}
              

           </p>

           <Image 
src = {plus}
alt = "Add button"
width={24}
height={24}
className='absolute top-[25px] left-[600px]'

/> 
            </div>
          </div>
       
      ))}
    </div>
  
    
</div>






</div>





)

}
