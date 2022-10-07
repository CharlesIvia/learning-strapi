//Required imports
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      data {
        id
        attributes {
          Category
          reviews {
            data {
              id
              attributes {
                Name
                Rating
                Body
                categories {
                  data {
                    id
                    attributes {
                      Category
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const Categories = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(CATEGORY, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>{data.category.data.attributes.Category} Games</h2>
      {data.category.data.attributes.reviews.data.map((review) => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.attributes.Rating}</div>
          <h2>{review.attributes.Name}</h2>

          {review.attributes.categories.data.map((c) => (
            <small key={c.id}>{c.attributes.Category}</small>
          ))}

          <p>{review.attributes.Body.substring(0, 200)}...</p>
          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};
