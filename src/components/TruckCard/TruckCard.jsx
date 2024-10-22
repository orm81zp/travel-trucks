import { useMemo } from "react";
import clsx from "clsx";
import { FaRegHeart } from "react-icons/fa";
import Button from "../Button/Button";
import Features from "../Features/Features";
import Rating from "../Rating/Rating";
import DetailName from "../DetailName/DetailName";
import DetailPrice from "../DetailPrice/DetailPrice";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/favorite/slice";
import { selectFavorites } from "../../redux/favorite/selectors";

import css from "./TruckCard.module.css";
import DetailImage from "../DetailImage/DetailImage";

const TruckCard = ({ data }) => {
  const dispath = useDispatch();
  const favorites = useSelector(selectFavorites);
  const {
    id,
    name,
    description,
    location,
    price,
    reviews,
    rating,
    gallery = [],
  } = data;
  const isFavorite = favorites.includes(id);
  const firstImage = gallery.length > 0 ? gallery[0]["thumb"] : null;

  const handleFavorite = (event) => {
    event.preventDefault();
    dispath(toggleFavorite(id));
  };

  return (
    <div className={css.wrapper}>
      <DetailImage gallery={gallery} showFirst />
      <div className={css.card}>
        <div className={css.header}>
          <div className={css.headerRow}>
            <DetailName name={name} />
            <div className={css.priceRow}>
              <DetailPrice price={price} />
              <a
                className={clsx(css.favoriteLink, {
                  [css.favorited]: isFavorite,
                })}
                href="#"
                onClick={handleFavorite}
              >
                <FaRegHeart />
              </a>
            </div>
          </div>
          <Rating rating={rating} reviews={reviews} location={location} />
        </div>
        <div className={css.description}>{description}</div>
        <Features data={data} />
        <div>
          <Button to={`/catalog/${id}`}>Show more</Button>
        </div>
      </div>
    </div>
  );
};

export default TruckCard;
