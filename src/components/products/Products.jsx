import React from 'react'
import { PRODUCTS } from '../../static'
import star from "../../assets/black-star.svg"

const Products = () => {
    return (
        <section>
            <div className='mt-[65px] grid grid-cols-3 gap-x-[49px] gap-y-[64px] container'>
                {PRODUCTS?.map((el) => (
                <div key={el.id} className='max-h-[440px] text-center flex flex-col items-center'>
                    <div className='bg-[#F6F6F6] w-full flex justify-center items-center mb-[11px] py-[28px]'>
                        <img src={el.image} alt="" />
                    </div>
                    <div className='flex flex-col gap-[11px] items-center'>
                        <p className='font-[poppins600] text-[24px] leading-[100%] text-[#1E1D1D]'>{el.title}</p>
                        <div className='flex gap-[6px]'>
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                        </div>
                        <p className='font-[poppins600] text-[24px] leading-[100%]'><span className='font-[poppins500] text-[#8B8E99] text-[20px]'>$300.00</span> ${el.price}.00</p>
                    </div>
                </div>
            ))}
            </div>
            <div className='w-full container text-center mt-[69px] pb-8'>
                <button className='text-[18px] font-[poppins500] text-white bg-[#3858D6] w-[196px] h-[46px] rounded-[15px] cursor-pointer hover:opacity-90 hover:bg-transparent hover:border hover:text-[#3858D6] transition'>View more</button>
            </div>
        </section>
    )
}

export default Products