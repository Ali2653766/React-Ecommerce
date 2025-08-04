import React, { createContext, useEffect, useState } from "react";

// Step 1: Create the FavoriteContext using React.createContext
export const FavoritesContext = createContext();

function FavoriteProvider({ children }) {
  // Step 2: Set up state to hold favorite items
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Step 3: Function to add item to favorites
  function handleFavorites(product) {
    setFavorites((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        showToast("Removed from favorites!");
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, isfavorite: false } : item
        );
      }
      showToast("Added to favorites!");

      return [...prevItems, { ...product, isfavorite: true }];
    });
  }

  // Show toast if it's already there, or confirm it's added
  // State for toast notification
      const [toast, setToast] = useState({ show: false, message: "" });
  
      // Show a toast message for 3 seconds
      const showToast = (message) => {
          setToast({ show: true, message });
          setTimeout(() => setToast({ show: false, message: "" }), 3000);
      };

  // Step 4: Function to remove item from favorites
  // Should filter the item out by ID or unique key
  const removeFromFavorites = (id) => {
        setFavorites((prevItems) => prevItems.filter(item => item.id !== id));
    };


  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  return (
    <div>
      {/* This will be replaced with context logic */}
      <FavoritesContext.Provider value={[ favorites, handleFavorites,removeFromFavorites, showToast ]}>
        {children}
        {toast.show && (
                <div className="cart-toast">
                    {toast.message}
                </div>
        )}
      </FavoritesContext.Provider>
      
    </div>
  );
}

export default FavoriteProvider;
