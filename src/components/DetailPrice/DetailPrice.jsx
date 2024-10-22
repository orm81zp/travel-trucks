import css from "./DetailPrice.module.css";

const DetailPrice = ({ price }) => {
  return (
    <span className={css.price}>{price}</span>
  );
};

export default DetailPrice;
