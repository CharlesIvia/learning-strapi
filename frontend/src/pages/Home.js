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
        }
      }
    }
  }
`;

export const Home = () => {
  const { loading, data, error } = useQuery(REVIEWS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (data) {
    console.log(data.reviews.data);
  }

  return (
    <div>
      {data &&
        data.reviews.data.map((review) => (
          <div key={review.id} className="review-card">
            <div className="rating">{review.attributes.Rating}</div>
            <h2>{review.attributes.Name}</h2>

            <small>console list</small>

            <p>{review.attributes.Body.substring(0, 200)}...</p>
            <Link to={`/details/${review.attributes.id}`}>Read more</Link>
          </div>
        ))}
    </div>
  );
};
