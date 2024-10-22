import { FaStar } from "react-icons/fa";
import css from "./ReviewerCard.module.css";

const ReviewerCard = ({ review }) => {
  const { reviewer_name, reviewer_rating, comment } = review;
  const stars = Math.floor(reviewer_rating);

  const renderStars = () => {
    const starsArray = [];
    for (let i = 1; i <= 5; i++) {
      const isActive = i <= stars;
      starsArray.push(
        <span key={i} className={isActive ? css.activeStar : css.star}>
          <FaStar />
        </span>
      );
    }

    return starsArray;
  };

  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <span className={css.logo}>{reviewer_name[0]}</span>
        <span className={css.name}>
          <div>{reviewer_name}</div>
          <div>{renderStars()}</div>
        </span>
      </div>
      <p>{comment}</p>
    </div>
  );
};

export default ReviewerCard;
