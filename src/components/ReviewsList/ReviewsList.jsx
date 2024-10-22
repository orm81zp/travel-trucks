import ReviewerCard from "../ReviewerCard/ReviewerCard";
import Message from "../Message/Message";
import css from "./ReviewsList.module.css";

const ReviewsList = ({ reviews }) => {
  const empty = reviews.length === 0;

  if (empty) {
    return <Message>No reviews yet</Message>;
  }

  return (
    <div className={css.wrapper}>
      {reviews.map((review) => (
        <ReviewerCard key={review.reviewer_name} review={review} />
      ))}
    </div>
  );
};

export default ReviewsList;
