import React, { useContext } from "react";

import { FaTrashAlt } from "react-icons/fa";
import { CardContext } from "../../components/context/CardContext";
import PageTransition from "../../components/PageTransition";
import { FaCartArrowDown } from "react-icons/fa";

function Favorites() {
  // Get favorites and removeFromFavorites from context
  const [cart, addToCart, removeFromCart, updateCount,addToFavorites, favorites,removeFromFavorites] = useContext(CardContext);

  return (
    <PageTransition>
      <div className="checkout">
        <div className="ordersummery">
          <h1>Favorites</h1>
          <div className="items">
            {favorites.length === 0 ? (
              <p>Your favorites list is empty</p>
            ) : (
              favorites.map((item, index) => (
                <div key={index} className="item_cart">
                  <div className="image_cart">
                    <img src={item.thumbnail} alt={item.title} />
                  </div>
                  <div className="details_cart">
                    <h2>{item.title}</h2>
                    <p className="price">
                      Price: ${item.price ? item.price : "N/A"}
                    </p>
                    <button onClick={() => addToCart(item)} className="buy-btn">
                      <FaCartArrowDown style={{ marginRight: "6px" }} />
                      Buy
                    </button>
                  </div>
                  <div className="delete_cart">
                    <button
                      onClick={() => removeFromFavorites(item.id)}
                      className="delete"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Favorites;
