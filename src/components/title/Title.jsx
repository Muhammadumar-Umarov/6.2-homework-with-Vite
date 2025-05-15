import React from 'react'


const Title = ({ subtitle1, title }) => {
  return (
    <div>
      <div className='container text-center flex flex-col '>
        <p className='font-[poppins500] text-[#3858D6]'>{subtitle1}</p>
        <p className='font-[poppins700] text-[36px]'>{title}</p>
      </div>
    </div>
  )
}

export default Title