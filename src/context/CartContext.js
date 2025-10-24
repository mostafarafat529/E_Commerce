import React, { useState } from 'react'
import { createContext } from "react";
import { toast } from 'react-toastify';


export const creatingCart =  createContext();

const FunctionCart = ({children}) => {

    const [cart ,setcart]  = useState([]);


    // first function  add to cart 

    const addproduct = (product)=>{
        const exit =  cart.find(item => item.id === product.id);
        if(!exit){
            setcart([...cart , {...product , quantity : 1 }]) ;
            toast.success("product is added to cart")
        }else{
            setcart(cart.map((item)=>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ))
         toast.info("🛒 Product quantity increased");
        }
    }
    // second function remove to cart 

    const removeproduct = (id)=>{
const filterdcart = cart.filter((item)=>item.id !==id);
setcart(filterdcart)
toast.error("🗑️ Product removed from cart");
    }
    // third fun increase  , decrease product 

    const increaseproduct = (id)=>{
        setcart(cart.map((item)=>item.id === id ? {...item , quantity : item.quantity + 1} : item))
        toast.info("⬆️ Product quantity increased");
    }

    const decreaseproduct = (id)=>{
        setcart(cart.map((item)=>item.id === id ? 
        item.quantity > 1 ? 
        {...item , quantity : item.quantity - 1} : item : item  ))
        toast.warning("⬇️ Product quantity decreased");
    }


    // calc total price 
    const totalprice = ()=>{
        return cart.reduce((total ,item)=>  total + (item.price * item.quantity),0) 
    }
    // calc total quantity 
    const totalquantity = () => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};


  return (
<creatingCart.Provider value={{cart , setcart , addproduct ,removeproduct , totalprice , increaseproduct  , decreaseproduct , totalquantity}}>
{children}
</creatingCart.Provider>
  )
}

export default FunctionCart