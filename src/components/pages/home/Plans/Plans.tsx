import React, { useState } from 'react'
import { plans } from './data'

export default function Plans() {
  const [showSection, setShowSection] = useState(1);
  return (
    <section className='plans'>
      <div className='main'>
      <div className='px-[18px] lg:px-[175px] pb-[38px]'>
          <div className='mb-[54px]'> 
              <p className='text-center pb-[24px] font-inter font-bold text-[24px] md:text-[32px]'>Choose your plan</p>
              <p className=' text-center max-w-[455px] mx-auto font-poppins font-normal text-[14px] leading-[21px] mb-[24px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
              <div className='p-[6px] max-w-[151px] mx-auto flex gap-[10px] shadow-md'>
                <div onClick={() => setShowSection(1)} className={`${showSection === 1 ? ' bg-lightPurple  rounded-lg' : ''} px-[9px] py-[3px] font-poppins cursor-pointer font-normal text-[14px]`}>
                  Monthly
                </div>
                <div onClick={() => setShowSection(2)} className={`${showSection === 2 ? ' bg-lightPurple  rounded-lg' : ''} cursor-pointer px-[9px] py-[3px] font-poppins font-normal text-[14px]`}>
                  Yearly
                </div>
              </div>
          </div>
          {
            showSection === 1 && <div className='flex flex-col xl:flex-row items-center gap-5 justify-between 2xl:justify-center'>
            {
             plans && plans.length > 0 && plans.map((plan, index) => { 
                return <div key={index} className='w-[303px] pt-[35px] pr-[27px] pb-[35px] pl-[27px] group hover:bg-darkPurple hover:border-0 border-[0.5px] rounded-lg border-darkPurple'>
                  <h6 className=' font-inter font-bold text-[16px] mb-[16px] group-hover:text-white'>{plan?.name}</h6>
                  <p className=' font-poppins font-normal text-[12px] leading-[18px]  mb-[24px] group-hover:text-white'>{plan?.description}</p>
                  <div className='flex items-center mb-[24px] gap-[19px]'>
                    <h2 className=' text-darkPurple font-inter font-bold text-[32px] group-hover:text-white'>${plan?.price}</h2>
                    <span className=' font-poppins text-darkPurple font-normal text-[14px] group-hover:text-white'>/month</span>
                  </div>
                  <ul className='flex flex-col gap-[8px] mb-[24px]'>
                    {
                      plan?.perks?.length > 0 && plan.perks.map((plan, index) => {
                        return <li key={index} className=' font-inter font-bold text-[12px] group-hover:text-white'>{plan}</li>
                      })
                    }
                  </ul>
                  <button className='rounded-[5px] font-poppins font-normal text-[12px] bg-white w-[149px] h-[44px] border-[0.5px] border-darkPurple text-darkPurple flex flex-col items-center justify-center group-hover:border-0'>
                  Start Free Trial
                  </button>
                </div>
              })
            }
        </div>

          }
          {
            showSection === 2 && <div className='flex flex-col xl:flex-row items-center gap-5 justify-between 2xl:justify-center'>
            {
             plans && plans.length > 0 && plans.map((plan, index) => { 
                return <div key={index} className='w-[303px] pt-[35px] pr-[27px] pb-[35px] pl-[27px] hover:bg-darkPurple hover:border-0 border-[0.5px] rounded-lg border-darkPurple'>
                  <h6 className=' font-inter font-bold text-[16px] mb-[16px]'>{plan?.name}</h6>
                  <p className=' font-poppins font-normal text-[12px] leading-[18px]  mb-[24px]'>{plan?.description}</p>
                  <div className='flex items-center mb-[24px] gap-[19px]'>
                    <h2 className=' text-darkPurple font-inter font-bold text-[32px] '>${plan?.price}</h2>
                    <span className=' font-poppins text-darkPurple font-normal text-[14px] group-hover:text-white'>/Year</span>
                  </div>
                  <ul className='flex flex-col gap-[8px] mb-[24px]'>
                    {
                      plan?.perks?.length > 0 && plan.perks.map((plan, index) => {
                        return <li key={index} className=' font-inter font-bold text-[12px]'>{plan}</li>
                      })
                    }
                  </ul>
                  <button className='rounded-[5px] font-poppins font-normal text-[12px] bg-white w-[149px] h-[44px] border-[0.5px] border-darkPurple text-darkPurple flex flex-col items-center justify-center group-hover:border-0'>
                  Start Free Trial
                  </button>
                </div>
              })
            }
        </div>

          }
        </div>

      </div>
    </section>
  )
}
