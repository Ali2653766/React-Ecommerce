import React, { useState } from 'react'
import { FaStar,FaStarHalfAlt,FaCartArrowDown,FaShare,FaRegHeart } from "react-icons/fa";


function Product({thumbnail,price,title}) {
  return (
    <>
    <div className='product'>
      <div className="img-product">
        <img src={thumbnail} alt={title} />
        
      </div>

      <p className='name'>{title}</p>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div>

        <p className="price">$ {price}</p>

        
        <div className="icons">
            <span><FaCartArrowDown /></span>
            <span><FaRegHeart /></span>
            <span><FaShare /></span>
        </div>
    </div>
    </>
  )
}

export default Product
