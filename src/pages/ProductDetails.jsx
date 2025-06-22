import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SlideProduct from '../components/slideProduct/SlideProduct';

function ProductDetails() {
  const [product,setproduct] = useState(null);
  const [loading,setloading] = useState(true);
  const [similar, setSimilar] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    const fetchproduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setproduct(data);
        
        // Fetch similar products from the same category
        const catRes = await fetch(`https://dummyjson.com/products/category/${data.category}`);
        const catData = await catRes.json();
        // Exclude the current product
        const filtered = catData.products.filter(p => p.id !== data.id);
        setSimilar(filtered);
        
      } catch (err) {
        console.error(err);
      }
      finally {
        setloading(false);
      }
      
    }
    fetchproduct();
  }, [id]);
  console.log(product);

  

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!product) return <p>Product not found</p>;
  
  return (
    <>
      <div className="container-details">
        <div ><img className='product-details-img' src={product.images[0]} alt={product.title} /></div>
        <div className='product-details-info'>
          <h2>{product.title}</h2>
          <p className='stars'>{Array(Math.round(product.rating)).fill('⭐').join('')}</p>
          <p className='price'>${product.price}</p>
          <p>Brand <span>{product.brand}</span></p>
          <p>Category <span>{product.category}</span></p>
          <p>{product.description}</p>
          
          
          
          
          <button className='add-to-cart'>Add to Cart</button>
        </div>


      </div>
      
        {similar.length > 0 && (
          <SlideProduct data={similar} title="Similar Products" />
        )}
      
    </>
  )
}

export default ProductDetails
