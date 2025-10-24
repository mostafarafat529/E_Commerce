import React from 'react'
import "./home.css"
import Carousel from './Carousel'
import Category from './Category'
import Features from './Feauters'
import MidBanner from './MidBanner'

const Home = () =>{
  
  return (
    <div className='home'>
      <Carousel/>
      <Category/>
      <MidBanner/>
      <Features/>
         
    </div>
  )
}

export default Home