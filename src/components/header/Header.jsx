import React from 'react'
import { LINKS } from "../../static/index"
import logo from "../../assets/logo.svg"
import personIcon from "../../assets/Person.svg"
import searchIcon from "../../assets/Search.svg"
import shoppingCartIcon from "../../assets/Shopping Cart.svg"

const Header = () => {
    return (
        <header className='w-[1100px] flex items-center justify-between pt-[22px] pb-[21px] font-[poppins500] absolute z-10 mx-auto text-center ml-[400px]'>
            <div>
                <a href="#" className='flex items-center gap-[1px] text-white'>
                    <img src={logo} alt="logo"/>
                    <span>Mohid</span>
                </a>
            </div>

            <nav>
                <ul className='flex items-center gap-[27px] text-[#8B8E99]'>
                    {LINKS?.map((link, index) => (
                        <li key={index}><a className='transition hover:opacity-65' href="#"><span>{link}</span></a></li>
                    ))}
                </ul>
            </nav>

            <div className='flex items-center gap-4'>
                <a href="#"><img src={searchIcon} alt="search-icon" /></a>
                <a href="#"><img src={personIcon} alt="person-icon" /></a>
                <a href="#"><img src={shoppingCartIcon} alt="person-icon" /></a>
            </div>
        </header>
    )
}

export default Header