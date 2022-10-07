//Required imports
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
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

export const Review = () => {
  const { id } = useParams();
  const { loading, data, error } = useQuery(REVIEW, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data.review.data.attributes);

  return (
    <div className="review-card">
      <div className="rating">{data.review.data.attributes.Rating}</div>
      <h2>{data.review.data.attributes.Name}</h2>

      {data.review.data.attributes.categories.data.map((c) => (
        <small key={c.id}>{c.attributes.Category}</small>
      ))}

      <p>{data.review.data.attributes.Body}</p>
    </div>
  );
};
