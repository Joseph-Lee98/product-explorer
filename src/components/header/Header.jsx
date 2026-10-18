import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <h2 className="header-title">Product Explorer</h2>

        <ul className="header-links">
          <li className="header-link">Products</li>
          <li className="header-link">Basket</li>
        </ul>
      </nav>
    </header>
  );
}
