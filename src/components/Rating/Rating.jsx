import { BsMap } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import css from "./Rating.module.css";

const Rating = ({ location, reviewsCount, rating }) => {
  return (
    <div className={css.wrapper}>
      <span className={css.rating}>
        <span className={css.star}>
          <FaStar />
        </span>{" "}
        {rating} ({reviewsCount} Reviews)
      </span>
      <span className={css.location}>
        <BsMap />
        {location}
      </span>
    </div>
  );
};

export default Rating;
