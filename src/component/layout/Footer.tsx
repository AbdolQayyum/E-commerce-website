

const Footer = () => {
  return (
    <>

    <div className="flex items-center mt-10">
  <div className="flex-grow h-0.5 bg-gray-600"></div>
</div>
    <div className="flex justify-evenly mt-16 mb-5 font-semibold text-gray-700">
        <div className="flex flex-col px-12">
<p className=" leading-7 [&:not(:first-child)]:mt-1">
Copyright @ 2023
</p>
<p className=" leading-7 [&:not(:first-child)]:mt-1">
Dine Market
</p>


</div>

<div className="flex flex-col px-12 ">
<p className=" leading-7 [&:not(:first-child)]:mt-1">
Design by.
</p>

<p className=" leading-7 [&:not(:first-child)]:mt-1 font-extrabold text-black">
Weird Design Studio
</p>


</div>

<div className="flex flex-col px-12">
<p className=" leading-7 [&:not(:first-child)]:mt-1">
    Code by
</p>
<p className=" leading-7 [&:not(:first-child)]:mt-1 font-extrabold text-black">
AbdolQayyum on github
</p>

</div>
      
    </div>

    </>
  )
}

export default Footer
