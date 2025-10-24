import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./products.css"
import { MdOutlineShoppingCart } from 'react-icons/md';
import { creatingCart } from '../context/CartContext';

const SingleData = () => {

        const { addproduct   , cart} = useContext(creatingCart);
    
    const {ID} = useParams();
    const [single ,setsingle] = useState(null)
    const navigate =useNavigate("");
    console.log(ID)

    const url = `https://dummyjson.com/products/${ID}`;
    const fetchSingleProduct = async()=>{
        try{
            const res = await axios.get(url) ;
            console.log(res.data) ;
                setsingle(res.data);
        }catch(e){
            console.log({e})
        }
    }
    useEffect(()=>{
        fetchSingleProduct();
// eslint-disable-next-line react-hooks/exhaustive-deps
    },[ID])

    const getquantity = cart.find(item=>item.id === single.id) ;

return (
    <div className='section-singledata'>
        <button className='back' onClick={()=>navigate("/products")}>back</button>
        <div className='content'>
            <div className='image-single'>
            <img src={single?.images[0]} alt="...."/>
            </div>
            <div className='info'>
                <h1>{single?.title}</h1>
                <h3>the brand is : {single?.brand}</h3>
                <h5>price : <span>${single?.price}</span> </h5>
                <p>{single?.description}</p>
                <div>Quantity : <input type='number' value={ getquantity ? getquantity.quantity : 1} readOnly/></div>
                <button onClick={()=>addproduct(single)}> <MdOutlineShoppingCart/> add cart</button>
            </div>
        </div>
    </div>
  )
}

export default SingleData