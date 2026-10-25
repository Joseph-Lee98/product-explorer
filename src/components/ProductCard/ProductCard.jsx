import { Link } from "react-router";
import "./ProductCard.css";

export default function ProductCard({ id, title, price, thumbnail }) {
  return (
    <article className="product-card">
      <div className="product-card-image-container">
        <img className="product-card-image" src={thumbnail} alt={title} />
      </div>

      <div className="product-card-content">
        <h2 className="product-card-title">{title}</h2>

        <p className="product-card-price">${price.toFixed(2)}</p>

        <div className="product-card-actions">
          <button type="button" className="product-card-basket-button">
            Add to Basket
          </button>

          <Link to={`/products/${id}`} className="product-card-details-button">
            View Product
          </Link>
        </div>
      </div>
    </article>
  );
}
