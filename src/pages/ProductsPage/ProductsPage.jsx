import react from "react";
import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ProductsPage.css";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=30");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data.products);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
        setErrorMessage(
          "Sorry, but there was an error fetching the products :(",
        );
      }
    };
    fetchProducts();
  }, []);

  return (
    <main className="products-page">
      <h1 className="products-page-title">Explore Products</h1>

      <p className="products-page-description">
        Discover products from a variety of categories.
      </p>

      {isLoading && <p className="products-loading">Loading products...</p>}

      {errorMessage && <p className="products-error">{errorMessage}</p>}

      {!isLoading && !errorMessage && (
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              thumbnail={product.thumbnail}
              id={product.id}
            />
          ))}
        </div>
      )}
    </main>
  );
}
