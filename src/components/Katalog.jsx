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


  )
}


export default Katalog

