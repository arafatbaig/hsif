
    import React from 'react'
    import Image from 'next/image'
    function Facilities() {
      return (
        <div>
    <div className='w-full text-center lg:mt-0 md:mt-0 mt-20'>
      <h1 className='font-bold lg:text-[42px] text-[30px] font-bison leading-8 p-3'>FACILITIES AND OFFERINGS</h1>
       <p className='lg:pl-20 lg:pr-20 pl-10 pr-10 lg:mt-2 md:mt-2 font-roboto text-[16px] lg:text-[18px]'>Spanning over 54,680 square feet, the Heartfulness International Sports Center offers state-of-the-art infrastructure to cater to various sports enthusiasts. 
        Our facilities include: 14 badminton courts, 3 squash courts, 25-meter swimming pool & Gym and Fitness center</p>
    </div>
    
    <div class="grid grid-cols-2 gap-x-2 gap-y-2 md:grid-cols-4   justify-items-center m-7 ">
  <div class="lg:row-span-4">
  <h1 className='md:hidden lg:hidden text-[18px] font-700'>BADMINTON</h1>
  <Image className='lg:w-[245px] lg:h-[421px] w-[153px] h-[263px] rounded-2xl ' src= "/badminton.jpg"  width={153} height={263}></Image>
  <h1 className='hidden md:block lg:block text-[20px] font-700 md:mt-1 '>BADMINTON</h1>
  </div>
  <div class="lg:row-span-4">
  <h1 className='md:hidden lg:hidden relative ml-[100px] text-[18px] font-700'>GYM</h1>
    <h1 className='hidden md:block lg:block lg:relative md:relative  lg:top-[160px] md:top-[140px] text-[20px] font-700'>GYM</h1>
  <Image className='lg:w-[245px] lg:h-[421px] w-[153px] h-[263px] rounded-2xl lg:mt-40 md:mt-36 ' src= "/gymimg1.jpg"  width={153} height={263}></Image>
  </div>
  <div class="lg:row-span-4">
  <Image className='lg:w-[245px] lg:h-[421px] w-[153px] h-[263px] rounded-2xl ' src= "/swimmingimg.jpg"  width={153} height={263}></Image>
  <h1 className='hidden md:block lg:block text-[20px] font-700 md:mt-1'>SWIMMING</h1>
  <h1 className='md:hidden lg:hidden text-[18px] font-700'>SWIMMING</h1>
  </div>
  <div class="lg:row-span-4">
  <h1 className='hidden md:block lg:block lg:relative md:relative  lg:top-[160px] md:top-[140px] text-[20px] font-700'>SQUASH</h1>
  <Image className='lg:w-[245px] lg:h-[421px] w-[153px] h-[263px] rounded-2xl lg:mt-40 md:mt-36 ' src= "/squashimg3.jpg"  width={153} height={263}></Image>
  <h1 className='md:hidden lg:hidden relative  text-[18px] ml-[70px] font-700'>SQUASH</h1>
  </div>
</div>

<div className='md:w-full w-full lg:w-full md:h-[430px] sm:h-[490px] md:mt-0 mt-10 flex flex-col items-center justify-center md:bg-blue-500 bg-orange-500  '>

<h1 className='md:w-[525px]  md:h-[72px] w-[262px] text-center font-bison md:text-[40px] text-[30px] md:mb-2 mb-4 mt-4 font-semibold text-white'>JOIN US AT HISC</h1>
<p className='lg:w-[1234px] md:w-full md:h-[78px] w-[315px] md:p-5 text-white text-center font-poppins '>Be a part of the Heartfulness International Sports Center community, where sports and holistic well-being merge. Explore our facilities, experience the joy of sports, and unlock your potential. Let's nurture future champions and empower youth through the transformative power of sports. Contact us today or visit our facility. We look forward to welcoming you to HISC!</p>
<button className='w-[175px] h-[52px] text-black bg-white mt-6 rounded-3xl font-roboto font-500 text-[13.85px] md:mt-16 mb-7'>SIGN UP NOW</button>

</div>
    
    </div>
      )
    }
    
   

export default Facilities