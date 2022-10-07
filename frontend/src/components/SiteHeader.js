import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const CATEGORIES = gql`
  query GetCategories {
    categories {
      data {
        id
        attributes {
          Category
        }
      }
    }
  }
`;

export function SiteHeader() {
  const { loading, data, error } = useQuery(CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="site-header">
      <Link to="/">
        <h1>Ninja Reviews</h1>
      </Link>
      <nav className="categories">
        <span>Filter reviews by category:</span>
        {data.categories.data.map((category) => (
          <Link key={category.id} to={`/categories/${category.id}`}>
            {category.attributes.Category}
          </Link>
        ))}
      </nav>
    </div>
  );
}
