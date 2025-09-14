import React from "react";
import { useContext } from "react";
import { CardContext } from "../context/CardContext";
import { Link } from "react-router-dom";

import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import "./header.css";
import SearchBox from "./SearchBox.jsx";

import PageTransition from "../PageTransition.jsx";

function Topheader() {
  const [cart, addToCart, removeFromCart, updateCount,addToFavorites, favorites,removeFromFavorites] = useContext(CardContext);
  return (
    <div className="top-header">
      <div className="container">
        <Link to="/" className="logo">
          <img src="/img/logo.png" alt="logo" />
        </Link>

        <SearchBox />

        <div className="header-icon">
          <div className="icon">
            <Link to="/favorites">
              <FaRegHeart />
              <span className="count">{favorites.length || 0}</span>
            </Link>
          </div>
          <div className="icon">
            <Link to="/cart">
              <TiShoppingCart />
              <span className="count">{cart.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topheader;
