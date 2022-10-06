import { Link } from "react-router-dom";

export function SiteHeader() {
  return (
    <div className="site-header">
      <Link to="/">
        <h1>Ninja Reviews</h1>
      </Link>
    </div>
  );
}
