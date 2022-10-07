//Required imports
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useQuery, gql } from "@apollo/client";

export const Home = () => {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/reviews"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (data) {
    console.log(data.data);
  }

  return (
    <div>
      {data &&
        data.data.map((review) => (
          <div key={review.id} className="review-card">
            <div className="rating">{review.attributes.Rating}</div>
            <h2>{review.attributes.Name}</h2>

            <small>console list</small>

            <p>{review.attributes.Body.substring(0, 200)}...</p>
            <Link to={`/details/${review.id}`}>Read more</Link>
          </div>
        ))}
    </div>
  );
};
