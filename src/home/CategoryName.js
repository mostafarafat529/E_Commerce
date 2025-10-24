
import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CreateDataContext } from '../context/DataContext'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { creatingCart } from '../context/CartContext'

const CategoryName = () => {
    const {CategoryName} = useParams()
    const {filterByCategory , filterproducts} = useContext(CreateDataContext)
    const {addproduct} = useContext(creatingCart)
    console.log(CategoryName)
    const navigate = useNavigate("")

    useEffect(()=>{
filterByCategory(CategoryName)
// eslint-disable-next-line react-hooks/exhaustive-deps
    },[CategoryName])


    console.log(filterproducts)

  return (
    <div className='name-category' style={{marginTop:"80px"}}>
{filterproducts.length > 0 ? (
    filterproducts.map((item)=>(
        <div className='product' key={item.id} >
       <img src={item.images[0]} alt="...." onClick={()=>navigate(`/products/${item.id}`)}/>
       <h2>{item.title.slice(0,10)}...</h2>
       <p>$ {item.price} </p>
       <button  onClick={()=>addproduct(item)}> <MdOutlineShoppingCart/> add cart</button> 
       </div>
    )
)
) 
: (
    <p>loading</p>
)
}
    </div>
  )
}

export default CategoryName