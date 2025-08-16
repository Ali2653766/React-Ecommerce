import React, { createContext, useEffect, useState } from "react";

export const CardContext = createContext();

export default function CardProvider({ children }) {
    // Favorites
const [favorites, setfavorites] = useState(() => {
  const savedFavorites = localStorage.getItem("favorites");
  return savedFavorites ? JSON.parse(savedFavorites) : [];
});


    // Function to remove a product from favorites
const removeFromFavorites = (id) => {
  showToast("Removed from favorites!");
  setfavorites((prevItems) => prevItems.filter((item) => item.id !== id));
};

// Function to add a product to favorites
const addToFavorites = (product) => {
    
    setfavorites((prevItems) => {
      showToast("Added to favorites!");
      return [...prevItems,product];
    });
  };
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    },[favorites]);

    
     














    //CART
  // State for cart items, loaded from localStorage if available
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // State for toast notification
  const [toast, setToast] = useState({ show: false, message: "" });

  // Show a toast message for 3 seconds
  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 3000);
  };

  // Add a product to the cart or increase its quantity if it already exists
  const addToCart = (product) => {
    setCart((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        showToast("Quantity increased in cart!");
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, count: (item.count || 1) + 1 }
            : item
        );
      }
      showToast("Added to cart!");
      return [...prevItems, { ...product, count: 1 }];
    });
  };

  // Remove a product from the cart by its id
  const removeFromCart = (id) => {
    showToast("Removed from cart!");
    setCart((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Update the quantity of a product in the cart
  const updateCount = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, count: Math.max(1, (item.count || 1) + delta) }
          : item
      )
    );
  };

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <CardContext.Provider
        value={[cart, addToCart, removeFromCart, updateCount,addToFavorites, favorites,removeFromFavorites]}
      >
        {children}
      </CardContext.Provider>
      {/* Toast notification popup */}
      {toast.show && <div className="cart-toast">{toast.message}</div>}
    </>
  );
}
