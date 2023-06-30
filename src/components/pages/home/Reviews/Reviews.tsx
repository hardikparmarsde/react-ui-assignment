import React from 'react'
import Slider from 'react-slick';
import { customers } from './data';
import Avatar from '../../../../assets/images/avatar.png'
import StarIcon from '../../../../assets/images/star.png'
export default function Reviews() {
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    
    responsive: [
        {
          breakpoint: 1476,
          settings: {
            slidesToShow: 2.4,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <section className='mb-[43px] pt-[57px]'>
        <div className='px-[20px] ml-0 lg:ml-[175px] mb-[32px]'>
            <div className='mb-[32px] max-w-[462px] mx-auto md:max-w-[100%]'>   
                <h2 className=' font-inter font-bold leading-[48px] text-center md:text-left text-[28px] md:text-[38px] mb-[24px] '>Review from customers</h2>
                <p className=' font-poppins font-normal max-w-[100%] text-center md:text-left md:max-w-[399px] text-[12px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
            </div>
            <div>
                <Slider {...settings} className='slider'>
                    {
                        customers?.map((customer, index) => {
                            return <div className='pt-[36px] max-w-[100%] lg:max-w-[465px] mb-[32px] sm:pl-[48px] pl-[10px] pr-[10px] sm:pr-[48px] pb-[36px] rounded-[10px] shadow-md hover:shadow-2xl' key={index}>
                                <div>
                                    <div className='flex items-center gap-[24px] mb-[24px]'>
                                        <img src={Avatar} alt=' ' className='w-[70px]' />
                                        <div>
                                            <h5 className=' font-inter font-bold text-[16px]'>{customer?.name}</h5>
                                            <span className='mb-[8px] font-poppins font-normal text-[14px]'>{customer?.company}</span>
                                            <div className='flex items-center gap-[10px]'>
                                                <img src={StarIcon} alt=' ' className='w-[17px]' />
                                                <img src={StarIcon} alt=' ' className='w-[17px]' />
                                                <img src={StarIcon} alt=' ' className='w-[17px]' />
                                                <img src={StarIcon} alt=' ' className='w-[17px]' />
                                                <img src={StarIcon} alt=' ' className='w-[17px]' />
                                            </div>
                                        </div>
                                    </div>
                                    <p className=' font-poppins font-normal text-[12px]'>{customer?.review}</p>
                                </div>
                            </div>
                        })
                    }
                </Slider>
            </div>
        </div>
    </section>
  )
}
