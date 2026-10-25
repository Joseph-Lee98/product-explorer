import { Link } from "react-router";
import "./ProductCard.css";
import { useBasket } from "../../context/BasketContext";

export default function ProductCard({ id, title, price, thumbnail }) {
  const { basket, setBasket } = useBasket();
  const isInBasket = basket.some((item) => item.id === id);
  const addToBasketHandler = () => {
    setBasket([
      ...basket,
      {
        id,
        quantity: 1,
        title,
        price,
        thumbnail,
      },
    ]);
  };
  return (
    <article className="product-card">
      <div className="product-card-image-container">
        <img className="product-card-image" src={thumbnail} alt={title} />
      </div>

      <div className="product-card-content">
        <h2 className="product-card-title">{title}</h2>

        <p className="product-card-price">${price.toFixed(2)}</p>

        <div className="product-card-actions">
          {!isInBasket && (
            <button
              type="button"
              className="product-card-basket-button"
              onClick={addToBasketHandler}
            >
              Add to Basket
            </button>
          )}

          <Link to={`/products/${id}`} className="product-card-details-button">
            View Product
          </Link>
        </div>
      </div>
    </article>
  );
}
