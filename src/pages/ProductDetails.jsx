import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import SlideProduct from "../components/slideProduct/SlideProduct";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaStarHalfAlt,
  FaCartArrowDown,
  FaShare,
  FaRegHeart,
} from "react-icons/fa";
import Loading from "../components/loading/Loading";
import { CardContext } from "../components/context/CardContext";
import AutoScrollTop from "../components/AutoTop";




function ProductDetails() {
  const [cart, addToCart, removeFromCart, updateCount] = useContext(CardContext);

  const [product, setproduct] = useState(null);
  const [loading, setloading] = useState(true);
  const [similar, setSimilar] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchproduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setproduct(data);

        // Fetch similar products from the same category
        const catRes = await fetch(
          `https://dummyjson.com/products/category/${data.category}`
        );
        const catData = await catRes.json();
        // Exclude the current product
        const filtered = catData.products.filter((p) => p.id !== data.id);
        setSimilar(filtered);
      } catch (err) {
        console.error(err);
      } finally {
        setloading(false);
      }
    };
    fetchproduct();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!product) return <p>Product not found</p>;

  return (
    <>
      <div className="container-details">
        <div>
          <img
            className="product-details-img"
            src={product.images[0]}
            alt={product.title}
          />
        </div>
        <div className="product-details-info">
          <h2>{product.title}</h2>
          <p className="stars">
            {Array(Math.round(product.rating)).fill("⭐").join("")}
          </p>
          <p className="price">${product.price}</p>
          <p>
            Brand <span>{product.brand}</span>
          </p>
          <p>
            Category <span>{product.category}</span>
          </p>
          <p>{product.description}</p>

          <button onClick={() => addToCart(product)} className={'add-to-cart' + (cart.some(i => i.id === product.id) ? ' in-cart' : '')}>
            {cart.some(i => i.id === product.id) ? <p>Added To Cart</p> : <p>Add to Cart</p>}{" "}
            
            <span>
              <FaCartArrowDown />
            </span>
          </button>

          <div className="icons">
            <span>
              <FaRegHeart />
            </span>
            <span>
              <FaShare />
            </span>
          </div>

          <div className="images">
            <div className="im-product">
              {product.images.map((img, index) => (
                <Link to={`/products/${id}`} key={index}>
                  <img src={img} alt={product.title} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {similar.length > 0 && (
        <SlideProduct data={similar} title="Similar Products" />
      )}
    </>
  );
}

export default ProductDetails;
