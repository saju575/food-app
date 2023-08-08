import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css"; // Import Rating component styles

// ReviewCard component to display a review with rating, comment, and name
const ReviewCard = ({ review }) => {
  return (
    <div className="flex flex-col items-center mx-auto">
      {/* Rating component to display the review's rating */}
      <Rating
        style={{ maxWidth: 180, marginBottom: "2.5rem" }}
        value={review.rating}
        readOnly // Make the rating display as read-only
      />

      {/* FontAwesomeIcon to display a comment icon */}
      <FontAwesomeIcon className="mb-4 text-4xl " icon={faComment} />

      {/* Display the review details */}
      <p className="mb-2 w-11/12 md:w-4/5 text-center">{review.details}</p>

      {/* Display the reviewer's name */}
      <h4 className="text-2xl text-yellow-500">{review.name}</h4>
    </div>
  );
};

export default ReviewCard;
