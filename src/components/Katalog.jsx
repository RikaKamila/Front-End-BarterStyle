import React from 'react'
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { ImInsertTemplate } from 'react-icons/im';

function Katalog(props) {
  const [products, setProducts] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    const response1 = await fetch("https://fakestoreapi.com/products/category/men's%20clothing");
    const response2 = await fetch("https://fakestoreapi.com/products/category/women's%20clothing");
    const data1 = await response1.json();
    const data2 = await response2.json();
    setProducts([...data1, ...data2]); // Combine both datasets
  };
  fetchData();
}, []);
  
  return (
<div class="container mx-auto px-4 p-5 sm:px-6 lg:px-8">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">   

    {products.map(prod => (
      <div class="bg-white rounded shadow-md p-4 hover:bg-gray-100 flex flex-col items-center justify-center" key={prod.id}>
        <Link to={`/Detail`} state={{ product: prod }}>
          <img src={prod?.image} alt={prod?.title} class="w-full h-[200px] object-cover rounded-t-lg" />
          <div class="p-4 text-center">
            <h3 class="text-xl font-bold">{prod?.title}</h3>
          </div>
        </Link>
      </div>
    ))}
  </div>
</div>

  )
}


export default Katalog

