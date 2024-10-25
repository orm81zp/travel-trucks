import { BsMap } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import css from "./Rating.module.css";
import { ROUTERS, TAB_NAMES } from "../../const";
import { Link } from "react-router-dom";

const Rating = ({
  id,
  location,
  reviewsCount,
  rating,
  ratingAsLink = false,
}) => {
  const renderReviews = () => {
    if (ratingAsLink && reviewsCount > 0) {
      return (
        <Link
          to={`${ROUTERS.CATALOG}/${id}?tab=${TAB_NAMES.REVIEWS}#${TAB_NAMES.REVIEWS}`}
        >
          {rating} ({reviewsCount} Reviews)
        </Link>
      );
    }

    return `${rating} (${reviewsCount} Reviews)`;
  };

  return (
    <div className={css.wrapper}>
      <span className={css.rating}>
        <span className={css.star}>
          <FaStar />
        </span>{" "}
        {renderReviews()}
      </span>
      <span className={css.location}>
        <BsMap />
        {location}
      </span>
    </div>
  );
};

export default Rating;
