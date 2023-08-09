import Image from 'next/image'
import card1 from '/public/card1.webp'
import card2 from '/public/card2.webp'
import card3 from '/public/event3.webp'
import P1 from '/public/p1.webp'


const Promotions = () => {
  return (
    <>
    <div >
       <h2 className='font-bold text-lg text-[#175594] flex justify-center mt-16'>Promotions</h2>
      <h2 className='font-bold text-4xl text-black flex justify-center mt-10'>Our Promotion Events</h2>
    </div>

    <section className='flex flex-col lg:flex-row px-15 gap-5'>

        {/* left section */}
        
            <div className='flex mt-16 bg-blue-200 '> 
            <h1 className="scroll-m-20 text-4xl font-extrabold  tracking-tight lg:text-4xl mt-6 ">
         GET UPTO 60% OFF
         <p className="leading-7 [&:not(:first-child)]:mt-9 text-2xl font-medium">
      For the summer season
       </p>
       </h1>
       <Image src={card3} alt="event3"/>
            </div>



        

        {/* right section */}

        <div className='flex gap-4'> 

        <div className=' mt-16 bg-yellow-200 justify-between'> 
        <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight">
            Flex Sweatshirt
        <p className="leading-7 [&:not(:first-child)]:mt-9 text-2xl font-medium">
          $75.00 
        </p>
        </h3>
         <Image src={card2} alt="card2"/>
        </div>

        <div className=' mt-16 bg-slate-300 justify-between'> 
        <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight">
            Female Sweatshirt
        <p className="leading-7 [&:not(:first-child)]:mt-9 text-2xl font-medium">
          $190.00 
        </p>
        </h3>
         <Image src={P1} alt="p1"/>
        </div>

        </div>
      
    </section>
    </>
  )
}

export default Promotions
