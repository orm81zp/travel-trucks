import ReviewerCard from "../ReviewerCard/ReviewerCard";
import Message from "../Message/Message";
import css from "./ReviewsList.module.css";

const ReviewsList = ({ reviews }) => {
  const empty = reviews.length === 0;

  return (
    <div className={css.wrapper}>
      {empty && <Message>No reviews yet</Message>}
      {reviews.map((review) => (
        <ReviewerCard key={review.reviewer_name} review={review} />
      ))}
    </div>
  );
};

export default ReviewsList;
