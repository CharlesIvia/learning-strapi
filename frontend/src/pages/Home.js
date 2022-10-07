//Required imports
import { Link } from "react-router-dom";
//import { useFetch } from "../hooks/useFetch";
import { useQuery, gql } from "@apollo/client";

const REVIEWS = gql`
  query GetReviews {
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
`;

export const Home = () => {
  const { loading, data, error } = useQuery(REVIEWS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <div>
      {data &&
        data.reviews.data.map((review) => (
          <div key={review.id} className="review-card">
            <div className="rating">{review.attributes.Rating}</div>
            <h2>{review.attributes.Name}</h2>

            {review.attributes.categories.data.map((c) => (
              <small key={c.id}>{c.attributes.Category}</small>
            ))}

            <p>{review.attributes.Body.substring(0, 200)}...</p>
            <Link to={`/review/${review.id}`}>Read more</Link>
          </div>
        ))}
    </div>
  );
};
