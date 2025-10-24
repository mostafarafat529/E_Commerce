import React, { useContext, useEffect } from 'react'
import "./cart.css"
import { creatingCart } from '../context/CartContext';
import CartsProduct from './CartsProduct';
import { useNavigate } from 'react-router-dom';
import { GiShoppingBag } from 'react-icons/gi';
import { MdDeliveryDining } from 'react-icons/md';
import { LuNotebookText } from 'react-icons/lu';
import { useUser } from '@clerk/clerk-react';

const Cart = () => {

      const {user} = useUser()

  const {cart ,setcart ,totalprice} = useContext(creatingCart);
  const navigate = useNavigate("")

  useEffect(()=>{
const storedcart = JSON.parse(localStorage.getItem("savecart"));
if(storedcart && storedcart.length > 0 ){
setcart(storedcart)
}
// eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(()=>{
localStorage.setItem("savecart" , JSON.stringify(cart));
  },[cart])
  return (
    <div className='cart'>
      {cart.length > 0 &&  <h1 className="text-center my-4 mt-5 pt-5">🛒 Shopping Cart</h1>}

      {cart.length > 0 ? (
        cart.map((item)=> <CartsProduct item={item} key={item.id}/> ) )
    : (
<div className="d-flex flex-column gap-3 justify-content-center align-items-center " style={{ height: "600px" }}>
  <h1 className="text-danger fw-bold display-1">Oh no! Your cart is empty</h1>
  <img src="/assets/empty-cart.png" alt="Empty Cart" className="img-fluid" style={{ maxWidth: "400px" }} />
  <button  onClick={() => navigate('/products')}  className="btn btn-danger">  Continue Shopping</button>
</div>
    )
    }
    {cart.length > 0 && 
    <h2 className="text-center fw-bold text-primary" > Total products: {totalprice().toFixed(2)} $</h2>
    }

    
             <div className="container my-5">
      <div className="row g-4">
        {/* 🧾 Delivery Info Section */}
        <div className="col-12 col-md-6">
          <div className="bg-light rounded p-4 shadow-sm">
            <h4 className="fw-bold text-dark mb-3">Delivery Info</h4>

            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={user?.fullName || ""}
                readOnly
              />
            </div>



            <div className="row">

              <div className="col-6 mb-3">
                <label className="form-label">Phone No</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your number"
                />
              </div>
            </div>

            <button className="btn btn-danger w-100 mb-3">Submit</button>

            <div className="text-center text-muted my-3">--------- OR ---------</div>


          </div>
        </div>

        {/* 💰 Bill Details Section */}
        <div className="col-12 col-md-6">
          <div className="bg-white border rounded p-4 shadow-sm">
            <h4 className="fw-bold text-dark mb-3">Bill Details</h4>

            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="text-secondary d-flex align-items-center gap-1">
                <LuNotebookText /> Items Total
              </h6>
              <p className="m-0">${totalprice()}</p>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="text-secondary d-flex align-items-center gap-1">
                <MdDeliveryDining /> Delivery Charge
              </h6>
              <p className="text-danger fw-semibold m-0">
                <span className="text-muted text-decoration-line-through">$25</span> FREE
              </p>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="text-secondary d-flex align-items-center gap-1">
                <GiShoppingBag /> Handling Charge
              </h6>
              <p className="text-danger fw-semibold m-0">$5</p>
            </div>

            <hr />

            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-semibold">Grand Total</h5>
              <p className="fw-semibold">${totalprice() + 5}</p>
            </div>

            <div className="mb-3">
              <h6 className="fw-semibold text-secondary mb-2">Apply Promo Code</h6>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter code" />
                <button className="btn btn-outline-dark">Apply</button>
              </div>
            </div>

            <button className="btn btn-danger w-100">Proceed to Checkout</button>
          </div>
        </div>
    </div>
    </div>

    </div>
  )
}

export default Cart