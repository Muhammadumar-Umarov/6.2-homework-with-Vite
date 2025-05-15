import React from 'react'
import { CATEGORY } from '../../static'

const Category = () => {
  return (
    <section className='container mt-[73px] mb-[135px] flex justify-between gap-[20px]'>
      {CATEGORY?.map((el) => (
            <div key={el.id} className='w-[354px] h-[239px] rounded-[22px] bg-[#F6F6F6] flex items-center justify-center gap-[26px]'>
              <div>
                <img src={el.image} alt="" />
              </div>
              <div className='flex flex-col gap-[9px] max-w-[173px]'>
                  <p className='font-[poppins700] text-[36px] leading-[100%]'>{el.name}</p>
                  <p className='font-[poppins500] leading-[100%] text-[#8B8E99]'>{el.desc}</p>
              </div>
            </div>
          ))
      }
    </section>
  )
}

export default Category