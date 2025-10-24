import React, { useContext, useEffect } from 'react'
import { CreateDataContext } from '../context/DataContext'
import "./home.css"
import { useNavigate } from 'react-router-dom'

const Category = () => {

    
    const {data  , categories , fetch_category } = useContext(CreateDataContext)
    const navigate = useNavigate("");
    

useEffect(()=>{
fetch_category()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[data])

return (
<div className='home-category'>
    <div className='categories'>
{categories.length > 0 ?
categories.map((cat , index)=>
<div key={index} className='cat' onClick={()=>navigate(`/categories/${cat}`)} >{cat}</div> 
)
:<p>not found categories</p>}
    </div>
</div>
)
}

export default Category