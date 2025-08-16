import { useContext, useState } from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaCartArrowDown,
  FaShare,
  FaRegHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { CardContext } from "../context/CardContext";
import "./slide-product.css";
function Product({ item, thumbnail, price, title, id }) {
  const [cart, addToCart, removeFromCart, updateCount,addToFavorites, favorites,removeFromFavorites] = useContext(CardContext);

  const isInCart = cart.some((i) => i.id === id);
  const isInFavorites = favorites.some((i) => i.id === id);

  const handleFavorites = (item) => {
  if (favorites.some((favorites) => favorites.id === item.id)) {
    removeFromFavorites(item.id);
  } else {
    addToFavorites(item);
  }
}

  return (
    <>
      <div className={`product ${isInFavorites ? 'in-fav' : ''} ${isInCart ? "in-cart" : ""}`}>
        <Link to={`/products/${id}`}>
          <span className="check-cart">Added to cart ✅</span>

          <div className="img-product">
            <img src={thumbnail} alt={title} />
          </div>

          <p className="name">{title}</p>
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
          <span className="btn-cart" onClick={() => addToCart(item)}>
            <FaCartArrowDown />
          </span>
          <span className= {`btn-favorite `} onClick={() => handleFavorites(item)}>
            <FaRegHeart />
          </span>
          <span>
            <FaShare />
          </span>
        </div>
      </div>
    </>
  );
}

export default Product;
