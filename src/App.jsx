import React from "react";
import Home from "./pages/home/Home";
import Topheader from "./components/header/Topheader";
import Bottomheader from "./components/header/Bottomheader";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/cart/Cart";
import AutoScrollTop from "./components/AutoTop";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import CategoryPage from "./pages/category page/CategoryPage";

function App() {
  return (
    <>
      <header>
        <Topheader />
        <Bottomheader />
      </header>
      <AutoScrollTop/>
      <AnimatePresence>
        
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
        
      </AnimatePresence>
    </>
  );
}

export default App;
