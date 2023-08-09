import Image from 'next/image'
import Hero from '@/views/Hero'
import ProductsList from './Products'
import Promotions from '@/views/Promotions'
import Line from '@/views/Line'
import Prove from '@/views/Prove'
import SubscribeBottom from '@/views/SubscribeBottom'
import Contact from '@/views/Contact'




export default function Home() {
  return (
   <div>

 

    <Hero/>

    <Promotions/>
   
   <ProductsList />

    <Line />

    <Prove />

    <SubscribeBottom />

    <Contact />

    

    

    
   
    

    </div>

  )
}
