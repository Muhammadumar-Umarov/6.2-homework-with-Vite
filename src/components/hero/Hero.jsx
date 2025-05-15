import React from 'react'
import searchIcon from "../../assets/blue-search.svg"
import heroImg from "../../assets/hero.svg"

const Hero = () => {
    return (
        <section className='h-[877px] bg-gradient-to-br from-[#383638] to-[#0B0B0B] relative'>
            <div className="container h-full">
                <div className='flex items-center justify-between h-full '>
                    <div className='max-w-[457px]'>
                        <h1 className='font-[poppins700] text-[64px]  text-white leading-[125%]'>Discover Most Suitable Watches</h1>
                        <p className='font-[poppins500] text-[#8B8E99] leading-[125%] mb-[47px]'>Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
                        <form action="" className='w-full rounded-[15px] bg-white flex items-center pt-[7px] pr-[8px] pb-[9px] pl-[19px]'>
                            <img src={searchIcon} alt="" className='mr-[16px]' />
                            <input type="text" placeholder='Find the best brands' className='flex-1 outline-0'/>
                            <button className='text-[18px] bg-[#3858D6] rounded-[9px] text-white font-[poppins600] leading-[125%] w-[112px] h-[45px]'>Search</button>
                        </form>
                    </div>
                    <div>
                        <img src={heroImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero