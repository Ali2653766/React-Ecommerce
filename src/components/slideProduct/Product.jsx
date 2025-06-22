import React, { useState } from 'react'
import { FaStar,FaStarHalfAlt,FaCartArrowDown,FaShare,FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Product({thumbnail,price,title,id}) {
  return (
    <>
    <div to='/' className='product'>
      <Link to={`/products/${id}`}>
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

      </Link>
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
