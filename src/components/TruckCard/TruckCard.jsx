import css from "./TruckCard.module.css";
import { BsMap, BsDiagram3, BsCupHot } from "react-icons/bs";
import { FaRegHeart, FaStar } from "react-icons/fa";
import Badge from "../Badge/Badge";

const TruckCard = ({ data, onFavorite }) => {
  console.log(data);
  const {
    id,
    name,
    description,
    location,
    price,
    reviews,
    rating,
    kitchen,
    TV,
    bathroom,
    AC,
    refrigerator,
    transmission,
    gallery = [],
  } = data;
  const reviewsCount = reviews?.length || 0;
  const firstImage = gallery.length > 0 ? gallery[0]["thumb"] : null;

  const handleFavorite = (event) => {
    event.preventDefault();
    onFavorite(id);
  };

  return (
    <div className={css.wrapper}>
      {firstImage && (
        <img
          className={css.image}
          src={firstImage}
          alt={name}
          width="292"
          height="320"
        />
      )}
      <div className={css.card}>
        <div className={css.header}>
          <div className={css.headerRow}>
            <h3>{name}</h3>
            <div className={css.priceRow}>
              {price}
              <a className={css.favoriteLink} href="#" onClick={handleFavorite}>
                <FaRegHeart />
              </a>
            </div>
          </div>
          <div className={css.info}>
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
        </div>
        <div className={css.description}>{description}</div>
        <div className={css.features}>
          {kitchen && <Badge icon={<BsCupHot />}>kitchen</Badge>}
          {transmission && <Badge icon={<BsDiagram3 />}>{transmission}</Badge>}
          <span>Automatic</span> <span>Petrol</span>
        </div>
      </div>
    </div>
  );
};

export default TruckCard;
