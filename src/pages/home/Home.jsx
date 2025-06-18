import React, { useEffect, useState } from 'react'
import Slider from '../../components/Slider'
import './home.css'
import SlideProduct from '../../components/slideProduct/SlideProduct'
import { data } from 'react-router-dom'

function Home() {
  
        const [products,setproducts] = useState({})
        const [loading,setloading] = useState(true);

  const categories = [
    'smartphones',
    'mobile-accessories',
    'sports-accessories',
    'laptops',
    'womens-watches',
  ]


  useEffect(() => {
    const fetchproducts = async () => {
      try{
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(`https://dummyjson.com/products/category/${category}`)
            const data = await res.json();
            return{[category] : data.products}
          })
          
        )
        

        const productData = Object.assign({},...results);
        
        
        setproducts(productData);
        
      }catch(err) {
        console.error(err);
      } finally {
        setloading(false)
      }
    }


    fetchproducts()
  },[])

  
 
  return (
    <div>
      <Slider />
      
      {loading ? (<p>Loading...</p>) : (
        categories.map(category => (
          
        <SlideProduct key={category} data={products[category]} title={category.replace('-',' ')} />
      ))
      )}

    </div>
  )
}

export default Home
