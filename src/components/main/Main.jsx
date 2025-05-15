import React from 'react'
import Hero from '../hero/Hero'
import Category from '../category/Category'
import Title from '../title/Title'
import Products from '../products/Products'

const Main = () => {
  return (
    <main>
        <Hero/>
        <Category/>
        <Title subtitle1={"Find your favourite smart watch."} title={"Our Latest Products"}/>
        <Products/>
    </main>
  )
}

export default Main