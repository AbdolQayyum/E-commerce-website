import ProductsCart from '@/component/ProductsCart';
import Link from 'next/link';
import { StaticImageData } from 'next/image';
import { Products } from '@/utils/mock';

const ProductsList = () => {
  const productChecks = Products.slice(0, 6);

  return (
    <>
      <div>
        <h2 className='font-bold text-lg text-[#175594] flex justify-center mt-16'>Products</h2>
        <h2 className='font-bold text-4xl text-black flex justify-center mt-10'>Check What We Have</h2>
      </div>

      <div className='flex justify-evenly mt-16 flex-wrap py-7'>
        {productChecks.map((product) => (
          <div key={product.id} className='w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/6 p-2'>
            <ProductsCart img={product.image as StaticImageData} title={product.title} price={product.price} category={product.category} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductsList;






