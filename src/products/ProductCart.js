import React, { useContext } from 'react'
import "./products.css"
import { MdOutlineShoppingCart } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { creatingCart } from '../context/CartContext'

const ProductCart = ({data }) => {

const navigate = useNavigate("");
  const {cart , addproduct } = useContext(creatingCart);
  console.log(cart)

  return (
    <div className='products'>
        {data && data.length > 0 ? (
            data.map((item ,index)=>(
        <div className='product' key={index} >
<img src={item.images[0]} alt="...." onClick={()=>navigate(`/products/${item.id}`)}/>
<h2>{item.title.slice(0,10)}...</h2>
<p>$ {item.price} </p>
<button  onClick={()=>addproduct(item)}> <MdOutlineShoppingCart/> add cart</button>
        </div>
            ))
        )
    : (    
        <div className='load'style={{width:"900px" , height:"700px" , display:"flex" , justifyContent:"center",alignItems:"center"}}>
            <div className='image'>
    <img src="/assets/Loading.gif" style={{width:"100%" , }} alt='.......'/>
            </div>
        </div>
)
    }
    </div>
)
}

export default ProductCart