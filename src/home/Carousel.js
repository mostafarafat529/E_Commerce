import React, { useContext, useEffect, useState } from 'react'
import "./carousel.css"
import { CreateDataContext } from '../context/DataContext'
const Carousel = () => {
    const {data , fetchAllData } = useContext(CreateDataContext)
     const [current, setCurrent] = useState(0)
    console.log(data) 


    useEffect(()=>{
fetchAllData();
// eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  const handleNext = () => {
  if (current === data?.slice(0, 5).length - 1) {
    setCurrent(0); // ارجع لأول عنصر
  } else {
    setCurrent(current + 1);
  }
};

  const handlePrev = () => {
    if(current === 0){
      setCurrent(data?.slice(0,5).length - 1 )
    }else{
      setCurrent(current - 1)
    }
  }

  return (
<div className='home-carousel'>
  <div className='animated' style={{transform:`translateX(-${current * 100}%)`}}>
  {data?.slice(0,5)?.map((item ,index)=>(
    <div className='content' key={index} >
    <div className='info'>
        <h3 className='heading'>Powering Your World with the Best in Electronics</h3>
          <h1 className='title'>{item.title}</h1>
          <p className='desc'>{item.description}</p>
          <button className='btn-shop'>Shop Now</button>
    </div>
    <div className='image'>
      <img src={item.images[0]} alt='...'/>
    </div>
  </div>
  ))}
  </div>
      <button className="btn-prev" onClick={handlePrev}>
        ←
      </button>
      <button className="btn-next" onClick={handleNext}>
        →
      </button>
</div>
  )
}

export default Carousel