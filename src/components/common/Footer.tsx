import React from 'react'
import FBIcon from '../../assets/images/fb.png'
import YoutubeIcon from '../../assets/images/youtube.png'
import InstagramIcon from '../../assets/images/insta.png'
import TwitterIcon from '../../assets/images/twitter.png'

export default function Footer() {
  return (
    <section className='bg-footer bg-cover bg-no-repeat'>
        <div className='px-[18px] xl:px-[90px] 2xl:px-[222px]'>
            <div className='mb-[110px] pt-[68px]'>
                <div className='max-w-[596px] mx-auto'>
                    <h4 className=' font-inter font-bold text-[18px] md:text-[32px] md:leading-[38px] text-center mb-[24px]'>We have what you’re looking for</h4>
                    <p className=' font-poppins font-normal text-[10px] md:text-[12px] leading-[18px]  text-center mb-[64px]  gradient-to-r from-blue to-pink bg-clip-text text-blue'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a</p>
                    <div className='flex justify-center'>
                    <button className=' font-poppins font-bold text-[18px] md:text-[20px] flex flex-col items-center justify-center w-[237px] h-[60px] text-white rounded-lg bg-gradient-to-r from-blue to-pink '>Get Started Now</button>
                    </div>
                </div>
            </div>
            <div className=' border-white border-t-[0.5px] pt-[20px] pb-[20px] '>
                <div className=' flex justify-between md:px-0 lg:px-[53px] flex-col-reverse gap-5 items-center md:flex-row'>
                <span className='font-poppins font-normal text-[12px] text-white'>All Right Reserved @Copyright 2023</span>
                <div className='flex gap-[20px] md:gap-[64px] flex-col md:flex-row'>
                    <ul className=' flex gap-[10px] md:gap-[24px] items-center flex-col md:flex-row'>
                        <a href='#' className=' list-none cursor-pointer font-poppins font-normal text-[12px] text-white'>Terms of Service</a>
                        <a href='#' className=' list-none cursor-pointer font-poppins font-normal text-[12px] text-white'>Privacy Policy</a>
                        <a href='#' className=' list-none cursor-pointer font-poppins font-normal text-[12px] text-white'>Product</a>
                    </ul>
                    <div className='flex gap-[16px]'>   
                        <a href='#' className=' cursor-pointer'>
                        <img src={FBIcon} alt='fb' className='w-[20px]' />
                        </a>
                        <a href='#' className=' cursor-pointer'>
                        <img src={YoutubeIcon} alt='fb' className='w-[20px]' />
                        </a>
                        <a href='#' className=' cursor-pointer'>

                        <img src={InstagramIcon} alt='fb' className='w-[20px]' />
                        </a>
                        <a href='#' className=' cursor-pointer'>

                        <img src={TwitterIcon} alt='fb' className='w-[20px]' />
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}
