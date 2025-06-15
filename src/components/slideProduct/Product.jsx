import React from 'react'
import { FaStar,FaStarHalfAlt,FaCartArrowDown,FaShare,FaRegHeart } from "react-icons/fa";


function Product() {
  return (
    <div className='product'>
      <div className="img-product">
        <img src="" alt="" />
      </div>

      <p className='name'>Iphone 12 pro max</p>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div>

        <p className="price">$ 1000</p>

        <div className="icons">
            <span><FaCartArrowDown /></span>
            <span><FaRegHeart /></span>
            <span><FaShare /></span>
        </div>

    </div>
  )
}

export default Product
