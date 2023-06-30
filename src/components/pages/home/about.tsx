import React from 'react'

export default function About() {
  return (
    <section className='about'>
        <div className='main'>
        <div className='px-[18px] lg:px:[100px] xl:px-[175px] pb-[79px] pt-[49px] 2xl:pt-[239px]'>
            <div className='flex items-center justify-around xl:justify-between 2xl:justify-around flex-col-reverse gap-[30px] lg:flex-row'>
            <div className='min-h-[397px] max-w-[552px] flex flex-wrap gap-[16px] justify-center'>
                <div className=' self-start p-[28px] border-[0.5px] border-darkPurple w-[268px] min-h-[160px] rounded-lg'>
                    <h4 className=' font-poppins font-bold text-[20px] mb-[16px] w-full'>Interactive Features</h4>
                    <p className=' font-poppins font-normal text-[12px] leading-[18px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                </div>
                <div className='self-end p-[28px] border-[0.5px] border-darkPurple w-[268px] min-h-[160px] rounded-lg'>
                    <h4 className=' font-poppins font-bold text-[20px] mb-[16px] w-full'>Interactive Features</h4>
                    <p className=' font-poppins font-normal text-[12px] leading-[18px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                </div>
                <div className=' self-start p-[28px] border-[0.5px] border-darkPurple w-[268px] min-h-[160px] rounded-lg'>
                    <h4 className=' font-poppins font-bold text-[20px] mb-[16px] w-full'>Interactive Features</h4>
                    <p className=' font-poppins font-normal text-[12px] leading-[18px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                </div>
                <div className='self-end p-[28px] border-[0.5px] border-darkPurple w-[268px] min-h-[160px] rounded-lg'>
                    <h4 className=' font-poppins font-bold text-[20px] mb-[16px] w-full'>Interactive Features</h4>
                    <p className=' font-poppins font-normal text-[12px] leading-[18px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                </div>
            </div>
            <div className='max-w-[420px]'>
                <h2 className='mb-[24px] text-[32px] sm:text-[48px] font-inter text-center lg:text-left font-bold'>About the Course</h2>
                <p className=' text-[14px] font-poppins font-normal leading-[21px]  mb-[26px] md:mb-[48px] text-center lg:text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkno</p>
                <div className='flex justify-center lg:justify-start'>
                    <button className='text-[20px] font-poppins font-bold w-[237px] h-[60px] text-white bg-gradient-to-r from-blue to-pink rounded-[10px]'>
                    Explore Now
                    </button>
                </div>
            </div>
            </div>
        </div>

        </div>
    </section>
  )
}
