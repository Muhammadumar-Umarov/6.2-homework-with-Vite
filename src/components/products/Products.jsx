import React from 'react'
import { PRODUCTS } from '../../static'
import star from "../../assets/black-star.svg"

const Products = () => {
    return (
        <section className='mt-[65px] grid grid-cols-3 gap-x-[49px] gap-y-[64px] container'>
            {PRODUCTS?.map((el) => (
                <div className='border max-h-[440px]'>
                    <div>
                        <img src={el.image} alt="" />
                    </div>
                    <div>
                        <p>{el.title}</p>
                        <div className='flex gap-[6px]'>
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                        </div>
                        <p>{el.price}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Products