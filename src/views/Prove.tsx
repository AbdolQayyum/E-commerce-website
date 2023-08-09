import Image from 'next/image';
import card1 from '/public/card1.webp';
import card2 from '/public/card2.webp';
import card3 from '/public/event3.webp';
import P6 from '/public/p6.webp';
import { Button } from '@/components/ui/button';

const Prove = () => {
  return (
    <section className='flex bg-blue-100 flex-col lg:flex-row sm:flex-col py-5 px-12 mt-16'>
      {/* Left section */}
      <div className='grid grid-cols-2 gap-5'>
        <div className='flex-1 items-center'>
          <h4 className='text-sm font-extrabold tracking-tight'>
            Using Good Quality Materials
          </h4>
          <p className='mt-2 text-sm font-semibold'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className='flex-1 items-center'>
          <h4 className='text-sm font-extrabold tracking-tight'>
            100% Handmade Products
          </h4>
          <p className='mt-2 text-sm font-semibold'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className='flex-1 items-center'>
          <h4 className='text-sm font-extrabold tracking-tight'>
            Using Good Quality Materials
          </h4>
          <p className='mt-2 text-sm font-semibold'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className='flex-1 items-center'>
          <h4 className='text-sm font-extrabold tracking-tight'>
            100% Handmade Products
          </h4>
          <p className='mt-2 text-sm font-semibold'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      {/* Right section */}
      <div className='grid justify-center md:justify-end gap-5 ml-5'>
        <div className=' md:w-auto md:h-auto relative'>
          <Image src={P6} alt='p6' />
        </div>
      </div>

      <div className='flex flex-col justify-center items-center md:items-start'>
        <p className='text-xl font-semibold text-center md:text-left'>
          This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
        </p>
        <div className='flex justify-center md:justify-start mt-8'>
          <Button className='px-8 py-4 text-lg hover:bg-yellow-500'>
            All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Prove;




