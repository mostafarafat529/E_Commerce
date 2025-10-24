import React, { useContext, useState } from 'react'
import "./navbar.css"
import { MdOutlineShoppingCart } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { IoMenu } from 'react-icons/io5'
import { creatingCart } from '../context/CartContext'
const Nav = ({location}) => {

    const { totalquantity } = useContext(creatingCart);


    // const     [islocation , setislocation] = useState(false);
const [active, setActive] = useState("home")
const [menuOpen, setMenuOpen] = useState(false)  // ✅ للتحكم في المنيو
const navigate = useNavigate()

// console.log(active)
// console.log(location)

return (
<div className='navbar-section'>
{/* left side the name and location  */}
    <div className='left-side'>

        <div className='title'>
<h1>M<span>egaShop</span></h1>
        </div>

    <div className='location' style={{display:"flex" ,alignItems:"center" ,gap:"1rem"}}>
        <FaLocationDot  className='icon-location text-red-500'/>
        <span>
        {location ? (
            <div>
            <h3 > {location.components.country}</h3>
            <h5> {location.components.city}</h5>
            </div>
        ) : (
            "add location"
        )}
        </span>
        </div>
    </div>


{/* right side the menu items  */}
        <div className='right-side'>
                    <div className='icon-menu' onClick={() => setMenuOpen(!menuOpen)}>
        <IoMenu />
        </div>
    <ul className={menuOpen ? "menu-open" : ""}> 
        <li onClick={() => { setActive("home"); navigate("/") }} className={active === "home" ? "active" : ""}>Home</li>
        <li onClick={() => { setActive("products"); navigate("/products") }} className={active === "products" ? "active" : ""}>Products</li>
        <li onClick={() => { setActive("about"); navigate("/about") }} className={active === "about" ? "active" : ""}>About</li>
        <li onClick={() => { setActive("contact"); navigate("/contact") }} className={active === "contact" ? "active" : ""}>Contact</li>

<div 
  className={`shopping ${active === "cart" ? "active" : ""}`} 
  onClick={() => { setActive("cart"); navigate("/cart"); }}
>
  <MdOutlineShoppingCart className='icon-cart' />
  <span className='count-shopping'>{totalquantity()}</span>
</div>
        <div className='signin'>
        <SignedOut>
            <SignInButton className="sign" />
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
        </div>

    </ul>
    </div>
    </div>

)
}

export default Nav