import React from 'react'
import Header from '../../common/Header'
import Hero1 from '../../../assets/images/hero-1.png'
import Hero2 from '../../../assets/images/hero-2.png'
import Dots from '../../../assets/images/dots.png'
import '../../../assets/scss/app.scss'
export default function Hero() {
  return (
    <section className='hero'> 
      <Header/>
      <div className='px-[18px] xl:px-[175px] tablet:px-[50px] lg:min-h-[652px] 3xl:pb-0 pb-[200px] 2xl:pb-[300px]'>
        <div className='flex pt-[94px]  justify-around gap-[50px] md:gap-[18px] flex-col lg:flex-row items-center lg:items-start'>
          <div>
            <h2 className=' text-white font-inter font-bold text-[32px] leading-[45px]  lg:text-[48px] lg:leading-[58px] mb-[24px] max-w-[580px]'>Learn how to launch a successful podcast</h2>
            <p className=' max-w-[433px] text-justify font-inter font-normal text-[12px] lg:text-[16px] leading-[19px] mb-[81px] text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a</p>
            <button className=' font-poppins font-bold text-[18px] md:text-[20px] flex flex-col items-center justify-center w-[237px] h-[60px] text-white rounded-lg bg-gradient-to-r from-blue to-pink '>Sign up Now</button>
          </div>
          <div className=''>
            <div className='relative'>
            <img src={Hero1} alt='hero-1' className='w-[491px]' />
            <img src={Hero2} alt='hero-2' className='w-[491px] absolute top-[90px] left-[-53px]' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
