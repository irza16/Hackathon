import Image from 'next/image';
import Logo from '../assets/Logo.png';
import Logo1 from '../assets/Logo (1).png';
import Logo2 from '../assets/Logo (2).png';
import Logo3 from '../assets/Logo (3).png';
import Logo4 from '../assets/Logo (4).png';
import Logo5 from '../assets/Logo (5).png';
import Logo6 from '../assets/Logo (6).png';


export default function CompanyLogo () {
    return (
        <div className = "w-[1321px] h-[139px] absolute top-[1107px] left-[300px] flex justify-between items-center">


<Image src = {Logo} alt ="zapierlogo" className = "w-[85px] h-[87px]" />

<Image src = {Logo1} alt ="pipedrivelogo" className = "w-[107px] h-[109px]" />

<Image src = {Logo2} alt ="cibbanklogo" className = "w-[135px] h-[139px]" />

<Image src = {Logo3} alt ="zlogo" className = "w-[63px] h-[65px]" />

<Image src = {Logo4} alt ="burnttoastlogo" className = "w-[98px] h-[101px]" />

<Image src = {Logo5} alt ="PandaDoclogo" className = "w-[113px] h-[115px]" />

<Image src = {Logo6} alt ="MOZlogo" className = "w-[84px] h-[87px]" />

        </div>
    )
}