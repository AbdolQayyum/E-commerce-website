import Image from "next/image"
import logo from '/public/Logo.webp'

const Contact = () => {
  return (
    <div className="flex justify-evenly">
   
    <div className="mt-16 ml-12 w-48">
        <Image src={logo} alt="logo" />

        <p className="leading-7 [&:not(:first-child)]:mt-6">
        Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
    </p>

    
      
    </div>

    <div>

    <h3 className="scroll-m-20 text-2xl font-extrabold mt-14 px-12 mb-4 text-gray-700 ">
      Company
    </h3>

    <div className="flex flex-col px-12">
    <p className=" leading-7 [&:not(:first-child)]:mt-1">
    About
    </p>
    <p className=" leading-7 [&:not(:first-child)]:mt-1">
    Terms of Use
    </p>
    <p className=" leading-7 [&:not(:first-child)]:mt-1">
    Privacy Policy
    </p>
    <p className=" leading-7 [&:not(:first-child)]:mt-1">
    How it works
    </p>
    <p className=" leading-7 [&:not(:first-child)]:mt-1">
    Contact Us
    </p>
    </div>
    </div>

    <div>

<h3 className="scroll-m-20 text-2xl font-extrabold mt-14 px-12 mb-4 text-gray-600 ">
  Contact
</h3>

<div className="flex flex-col px-12">
<p className=" leading-7 [&:not(:first-child)]:mt-1">
WhatsApp
</p>
<p className=" leading-7 [&:not(:first-child)]:mt-1">
Support 24h 
</p>

</div>
</div>

<div>

<h3 className="scroll-m-20 text-2xl font-extrabold mt-14 px-12 mb-4 text-gray-600 ">
  Support
</h3>

<div className="flex flex-col px-12">
<p className=" leading-7 [&:not(:first-child)]:mt-1">
Support Carrier
</p>
<p className=" leading-7 [&:not(:first-child)]:mt-1">
24h service
</p>
<p className=" leading-7 [&:not(:first-child)]:mt-1">
Quick Chat
</p>

</div>
</div>
    </div>


  )
}

export default Contact
