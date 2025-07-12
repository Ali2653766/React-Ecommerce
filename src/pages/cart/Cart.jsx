import React, { useContext } from "react";
import "./cart.css";
import { FaTrashAlt } from "react-icons/fa";
import { CardContext } from "../../components/context/CardContext";

function Cart() {
  // Get cart items, removeFromCart, and updateCount functions from context
  const [cart, , removeFromCart, updateCount] = useContext(CardContext);

  // Calculate the total price of all items in the cart
  const totalPrice = cart.reduce((sum, item) => {
    const price = Number(item.price);
    return sum + (isNaN(price) ? 0 : price);
  }, 0);

  return (
    <div className="checkout">
      <div className="ordersummery">
        <h1>Order Summery</h1>
        <div className="items">
          {/* Show message if cart is empty, otherwise list all cart items */}
          {cart.length === 0 ? (
            <p>Your Cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="item_cart">
                {/* Product image */}
                <div className="image_cart">
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                {/* Product details and quantity controls */}
                <div className="details_cart">
                  <h2>{item.title}</h2>
                  <p className="price">
                    Price: ${item.price ? item.price : "N/A"}
                  </p>
                  <div className="quantity">
                    {/* Decrease quantity */}
                    <button onClick={() => updateCount(item.id, -1)}>-</button>
                    {/* Show current quantity */}
                    <span className="quantity">{item.count}</span>
                    {/* Increase quantity */}
                    <button onClick={() => updateCount(item.id, 1)}>+</button>
                  </div>
                </div>
                {/* Delete item from cart */}
                <div className="delete_cart">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="delete"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        {/* Show total price if cart is not empty */}
        {cart.length > 0 && (
          <div
            style={{
              marginTop: "32px",
              textAlign: "right",
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "var(--main-color)",
            }}
          >
            Total: ${totalPrice.toFixed(2)}
          </div>
        )}
        {/* Place Order button */}
        <div className="button_div">
          <button type="submit">Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;