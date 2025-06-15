import React from 'react'
import Product from './Product'
import './slide-product.css'

function SlideProduct() {
  return (
    <div className='slide-products slide'>
        <div className="container">
            <div className="top-slide">
                <h2>Smart Phones</h2>
                <p>Find Smart Phones Here!</p>
            </div>
            <Product/>
        </div>
    </div>
  )
}

export default SlideProduct
