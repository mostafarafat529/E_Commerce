import { useEffect, useState } from "react";
import "./products.css"

const FilterProducts = ({categories , data , filterByCategory ,setfilterproducts ,filterProducts  }) => {


      const [valueInp, setValueInp] = useState("");
      const [activeCat , setActiveCat] = useState("ALL")

  useEffect(() => {
    if (valueInp.trim() === "") {
      setfilterproducts(data);
    } else {
      const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(valueInp.toLowerCase())
      );
      setfilterproducts(filteredData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueInp, data]); 

return (
<div className='filters'>
  <input
    type='text'
    placeholder='Search category...'
    value={valueInp}
    className='srch-category'
    onChange={(e) => setValueInp(e.target.value)}
  />
  
  <h1>Category</h1>

  {categories && categories.length > 0 ? (
    <div className='category-buttons'>
      {categories.map((item, index) => (
        <button
          key={index}
          className={`category-btn ${activeCat === item ? "active" : ""}`}
          onClick={() => {setActiveCat(item) ; filterByCategory(item)}}
        >
          {item}
        </button>
      ))}
    </div>
  ) : (
    <p>Loading...</p>
  )}
</div>

)
}

export default FilterProducts