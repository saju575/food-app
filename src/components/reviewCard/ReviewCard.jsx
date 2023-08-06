import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const ReviewCard = ({ review }) => {
  return (
    <div className="flex flex-col items-center md:w-2/3 mx-auto">
      <Rating
        style={{ maxWidth: 180, marginBottom: "2.5rem" }}
        value={review.rating}
        readOnly
      />
      <FontAwesomeIcon className="mb-4 text-3xl " icon={faComment} />
      <p className="mb-2 md:w-4/5 text-center">{review.details}</p>
      <h4 className="text-2xl text-yellow-500">{review.name}</h4>
    </div>
  );
};

export default ReviewCard;
