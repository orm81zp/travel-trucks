import { formatPrice } from "../../utils/format";
import css from "./DetailPrice.module.css";

const DetailPrice = ({ price }) => {
  return <span className={css.price}>{formatPrice(price)}</span>;
};

export default DetailPrice;
