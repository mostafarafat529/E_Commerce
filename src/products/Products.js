import React, { useContext, useEffect } from 'react'
import "./products.css"
import { CreateDataContext } from '../context/DataContext'
import FilterProducts from './FilterProducts'
import ProductCart from './ProductCart'
const Products = () => {

  const {data , fetchAllData, categories , fetch_category , filterproducts  ,setfilterproducts ,  filterByCategory , filteredByInput} = useContext(CreateDataContext)

  useEffect(()=>{
fetchAllData();
fetch_category()
// eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <div className='section-products'>
<FilterProducts setfilterproducts={setfilterproducts} filterproducts={filterproducts} categories = {categories} data ={data} filterByCategory ={filterByCategory} filteredByInput={filteredByInput} />
<ProductCart data ={filterproducts}   />
    </div>
  )
}

export default Products