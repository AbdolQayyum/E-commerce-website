import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const SubscribeBottom = () => {
  return ( 
    <div >
    <div className="flex flex-col justify-center items-center mt-16">
  <div className="text-7xl absolute font-extralight text-gray-300">Newsletter</div>
  <h2 className="scroll-m-20 relative border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
    Subscribe to Our Newsletter
  </h2>
  <p className="scroll-m-20 border-b pb-2 text-1xl mt-5 tracking-tight transition-colors first:mt-0">
    Get the latest information and promo offers directly
  </p>
</div>

   
      
  

    
<div className='flex justify-center items-center mt-10 md:mt-0 '>
<Input className='w-50 h-8 mr-2 md:w-48 mt-6 border-cyan-900' />
<Button className='hover:bg-yellow-500 mt-6'>Subscribe</Button>

</div>
  

  
  </div>


  )
}

export default SubscribeBottom
