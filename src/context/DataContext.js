
import axios from 'axios';
import {createContext, useState } from 'react'

export const CreateDataContext = createContext();
const DataContext = ({children}) => {
  //start  states  ...................................................

  const [data ,setdata] = useState([]);
  const [categories , setcategories] = useState([]);
  const [filterproducts , setfilterproducts] = useState([]);

  //end  states  ......................................................
  
const url = "https://dummyjson.com/products?limit=100" ;

// fetch products  .......................................
    const fetchAllData =async ()=>{
      try{
const res = await axios.get(url);
setdata(res.data.products)
setfilterproducts(res.data.products);
      }catch(e){
        console.log({e})
      } }

    // fetch Categories ............................................
const fetch_category =()=>{
    try{
        const  uniqueCategories = ["All" , ...new Set(data.map(item => item.category))]
        console.log(uniqueCategories)
        setcategories(uniqueCategories)
    }catch(e){
        console.log({e})
    }
}


const filterByCategory = (category) => {
  if (category === "All") {
    setfilterproducts(data);
  } else {
    const filtered = data.filter((item) => item.category === category);
    setfilterproducts(filtered);
  }
};

const  filteredByInput = (valueinp)=>{
  if(!valueinp.trim()){
    setfilterproducts(data)
  }else{

    const filterbyvalue = filterproducts.filter(item=>item.title.toLowerCase().includes(valueinp.toLowerCase()))
    setfilterproducts(filterbyvalue);
  }
}




  return (
    <CreateDataContext.Provider value={{data ,setdata , fetchAllData , categories , setcategories,
    fetch_category, filterByCategory   ,filterproducts ,setfilterproducts , filteredByInput }} >
        {children}
    </CreateDataContext.Provider>
  )
}

export default DataContext