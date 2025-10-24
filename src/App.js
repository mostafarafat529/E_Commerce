import About from "./about/About";
import Cart from "./cart/Cart";
import Contact from "./contact/Contact";
// import Footer from "./footer/Footer";
import Home from "./home/Home";
import Nav from "./navbar/Nav";
import { Routes ,Route } from "react-router-dom";
import Products from "./products/Products";
import { useEffect, useState } from "react";
import Footer from "./footer/Footer";
import SingleData from "./products/SingleData";
import CategoryName from "./home/CategoryName";
import ScrollToTop from "./scroll/ScrollToTop";

function App() {

  // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  // in function navbar get on the location 
  
  const [location , setlocation] = useState(null);
  const getlocation = async ()=>{
    navigator.geolocation.getCurrentPosition ( async (res) =>{
      const { latitude, longitude } = res.coords;
      // console.log(" Coordinates:", latitude, longitude);
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.REACT_APP_API_KEY_GETLOCATION}`;
      // console.log(process.env.REACT_APP_API_KEY_GETLOCATION)
      
      try{
        const response = await fetch(url) ;
        const data = await response.json();
        // console.log(data.results[0]);
        setlocation(data.results[0])
      }catch(e){
        console.log({e})
      }})}
      
      useEffect(()=>{
        getlocation()
      },[])
      
      // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
      
      
      
      
      
      
      
      
      
      
      
      return (
        <div className="App">
      <Nav location={location}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/categories/:CategoryName" element={<CategoryName/>}/>
        <Route path="/products/:ID" element={<SingleData/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <ScrollToTop/>
      <Footer/>
    </div>
  );
}

export default App;
