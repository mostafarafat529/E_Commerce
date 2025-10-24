import React from 'react'
import banner from '../images/banner1.jpg'
import "./home.css"

const MidBanner = () => {

    console.log(banner)
    return (
    <section class="bg-light py-5 py-md-5">
    <div class="middle position-relative text-center text-white">
    <div  class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded-4"></div>
    <div class="position-absolute top-50 start-50 translate-middle w-75" style={{zIndex:2 ,display:"flex" ,flexDirection:"column" ,color:"#fff"}}>
    <h1 class="fw-bold display-5 mb-3">
        Next-Gen Electronics at Your Fingertips
    </h1>
    <p class="fs-5 m-5">
        Discover the latest tech innovations with unbeatable prices and free
        shipping on all orders.
    </p>
    <a href="/#" class="btn btn-danger btn-lg px-4">Shop Now</a>
    </div>
    </div>
    </section>
    )
    }

export default MidBanner