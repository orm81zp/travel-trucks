import Features from "../Features/Features";
import SectionName from "../SectionName/SectionName";
import css from "./DetailFeatures.module.css";

const DetailFeatures = ({ data }) => {
  const { form, length, width, height, tank, consumption } = data;

  return (
    <div className={css.wrapper}>
      <Features data={data} />
      <div>
        <SectionName>Vehicle details</SectionName>
        <ul className={css.list}>
          <li className={css.item}>
            <span className={css.name}>Form</span>
            <span className={css.value}>{form}</span>
          </li>
          <li className={css.item}>
            <span className={css.name}>Length</span>
            <span className={css.value}>{length}</span>
          </li>
          <li className={css.item}>
            <span className={css.name}>Width</span>
            <span className={css.value}>{width}</span>
          </li>
          <li className={css.item}>
            <span className={css.name}>Height</span>
            <span className={css.value}>{height}</span>
          </li>
          <li className={css.item}>
            <span className={css.name}>Tank</span>
            <span className={css.value}>{tank}</span>
          </li>
          <li className={css.item}>
            <span className={css.name}>Consumption</span>
            <span className={css.value}>{consumption}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailFeatures;
