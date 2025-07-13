import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/slideProduct/Product";
import "./category.css";
import PageTransition from "../../components/PageTransition";
function CategoryPage() {
  const category = useParams().category;
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category/${category}`
        );
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [category]);

  return (
    <PageTransition key={category}>
      <div className="categoryy">
        <div className="category-header">
          <h1>{category.replace(/-/g, " ")}</h1>
          <p>{products.length} products found</p>
        </div>
        <div className="container">
          <div className="products">
            {products.map((product, index) => (
              <Product
                id={product.id}
                thumbnail={product.thumbnail}
                price={product.price}
                title={product.title}
                item={product}
                key={index}
              ></Product>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default CategoryPage;
