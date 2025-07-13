import React, { useEffect, useState } from "react";
import Slider from "../../components/Slider";
import "./home.css";
import SlideProduct from "../../components/slideProduct/SlideProduct";
import { data } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import PageTransition from "../../components/PageTransition";

function Home() {
  const [products, setproducts] = useState({});
  const [loading, setloading] = useState(true);

  const categories = [
    "smartphones",
    "mobile-accessories",
    "sports-accessories",
    'groceries',
    "laptops",
    "womens-watches",
    "Furniture",
    "mens-shirts",
    "mens-shoes",
    
  ];

  useEffect(() => {
    const fetchproducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`
            );
            const data = await res.json();
            return { [category]: data.products };
          })
        );

        const productData = Object.assign({}, ...results);

        setproducts(productData);
      } catch (err) {
        console.error(err);
      } finally {
        setloading(false);
      }
    };

    fetchproducts();
  }, []);

  return (
    <PageTransition>
      <div>
        <Slider />

        {loading ? (
          <Loading />
        ) : (
          categories.map((category) => (
            <SlideProduct
              key={category}
              data={products[category]}
              title={category.replace("-", " ")}
            />
          ))
        )}
      </div>
    </PageTransition>
  );
}

export default Home;
