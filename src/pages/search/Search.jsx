import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Product from "../../components/slideProduct/Product";
import PageTransition from "../../components/PageTransition";

function Search() {
  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);

  const query = new URLSearchParams(useLocation().search).get("query");

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        );
        const data = await response.json();
        setProducts(data.products || []); // Handle the search results as needed
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };
    if (query) {
      fetchSearch();
    }
  }, [query]);

  return (
    <div>
      <PageTransition key={query}>
        <div className="categoryy">
          {products.length > 0 ? (
            <>
              <div className="category-header">
                <h1>Results For {query}</h1>
                <p>{products.length} products found</p>
              </div>
              <div className="container">
                <div className="products">
                  {products.map((product) => (
                    <Product
                      id={product.id}
                      thumbnail={product.thumbnail}
                      price={product.price}
                      title={product.title}
                      item={product}
                      key={product.id} // <-- unique key
                    />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="category-header">
                <h1 className="no-results">No results found for "{query}"</h1>
            </div>
          )}
        </div>
      </PageTransition>
    </div>
  );
}

export default Search;
