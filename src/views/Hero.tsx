
import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button'
import heroImage from '/public/hero-img.webp'
import Image from 'next/image'
import bazar from '/public/bazar.webp'
import bustle from '/public/bustle.webp'
import instyle from '/public/instyle.webp'
import verse from '/public/verse.webp'

//import man from '/public/event3.webp'

const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row gap-y-10 py-6'>
        {/* left section */}
        <div className='flex-1'>
        <Badge className='py-3 px-6 rounded-lg bg-yellow-500 text-black-600 hover:bg-yellow-500 '>Sale 70% off</Badge>

        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6 ">
         An Industrial Take on Streetwear
       </h1>

       <p className="leading-7 [&:not(:first-child)]:mt-6">
       Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
       </p>

        <Button className=' px-16 py-6 mt-5 text-lg  hover:bg-yellow-500'>
            
            Start Shopping
            
            </Button>

            <div className='flex gap-8 mt-9'>
            <Image src={bazar} alt='bazaar'/>
            <Image src={bustle} alt='bustle'/>
            <Image src={instyle} alt='instyle'/>
            <Image src={verse} alt='verse'/>


            </div>



        </div>

        {/* right section */}
        <div >
            <Image src={heroImage} alt='hero' className="w-70 h-100" />   

        </div>

       

       
     
    </section>

   
   
  )
}

export default Hero
