import Image, { StaticImageData } from 'next/image'

const ProductsCart = (props:{title:string, price:number,img: StaticImageData,category:string}) => {
  return (

    

   
    <div>         
        <Image src={props.img} alt='image'/>
        <h3 className='font-bold text-lgmt-5'>{props.title}</h3>
        <p className='font-bold text-lg'>${props.price}</p>
        <p className='font-bold text-lg'>
          Category: {" "}
          <span className='text-base font-normal capitalize'>
          {props.category}

          </span>
          </p>
        </div>

      
     

       

       
  )
}

export default ProductsCart
