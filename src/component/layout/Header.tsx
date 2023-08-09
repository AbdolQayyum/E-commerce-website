
import logo from '/public/Logo.webp'
import Link from 'next/link'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center bg-[#175594] py-6 px-6 sticky top-0 z-50'>
      <div className='flex items-center'>
        <Link href='/'>
        <Image src={logo} alt="logo" />
        </Link>
       

        <ul className=' flex gap-x-3 ml-8 '>
          <li className='text-lg text-black font-bold hover:text-yellow-500'>
            <Link href='/category/male'>
              Male
            </Link>
          </li>
          <li className='text-lg text-black font-bold hover:text-yellow-500'>
            <Link href='/category/female'>
              Female
            </Link>
          </li>
          <li className='text-lg text-black font-bold hover:text-yellow-500'>
            <Link href='/category/kids'>
              Kids
            </Link>
          </li>
          <li className='text-lg text-black font-bold hover:text-yellow-500'>
            <Link href='/products'>
              All Products
            </Link>
          </li>
        </ul>
      </div>

      <div className='flex items-center mt-4 md:mt-0'>
        <Input className='w-40 h-8 mr-2 md:w-48' />
        <Button variant="secondary" className='hover:bg-yellow-500'>Search</Button>
        
      </div>
      <div className="h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center ml-4 ">
          <ShoppingCart />
        </div>
    </div>
  )
}

export default Header






