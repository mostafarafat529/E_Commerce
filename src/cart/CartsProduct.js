import React, { useContext } from 'react'
import { creatingCart } from '../context/CartContext'
import "./cart.css"

const CartsProduct = ({item}) => {


    const { increaseproduct , decreaseproduct , removeproduct} = useContext(creatingCart);
  return (
    <div className='cart'>
    <div className='shopping d-flex align-items-center border p-3 mb-3'>
<img src={item?.images[0]} alt='...' style={{ width: "300px", height: "150px", borderRadius: "8px" }} />
 <div className="ms-3">
                <h2>{item.title}</h2>
                <p>Quantity: {item.quantity}</p>
                <p  style={{fontWeight:"700"}}>price: {item.price}</p>
                <p>total : {(item.price * item.quantity).toFixed(2)}</p>
                <button className="btn btn-success me-2" onClick={() => increaseproduct(item.id)}>+</button>
                <button className="btn btn-warning me-2" onClick={() => decreaseproduct(item.id)}>-</button>
                <button className="btn btn-danger" onClick={() => removeproduct(item.id)}>Remove</button>
            </div>
            </div>

</div>

  )
}

export default CartsProduct