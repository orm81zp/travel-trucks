import clsx from "clsx";
import Rating from "../Rating/Rating";
import DetailName from "../DetailName/DetailName";
import DetailPrice from "../DetailPrice/DetailPrice";
import css from "./DetailTruck.module.css";
import DetailImage from "../DetailImage/DetailImage";
import { useState } from "react";
import Tabs from "../Tabs/Tabs";
import BookForm from "../BookForm/BookForm";
import DetailFeatures from "../DetailFeatures/DetailFeatures";
import ReviewsList from "../ReviewsList/ReviewsList";

const TAB_NAMES = {
  FEATURES: "features",
  REVIEWS: "reviews",
};
const TABS = [TAB_NAMES.FEATURES, TAB_NAMES.REVIEWS];

const DetailTruck = ({ data }) => {
  const [currentTab, setCurrentTab] = useState(TABS[0]);
  const {
    name,
    description,
    location,
    price,
    reviews,
    rating,
    gallery = [],
  } = data;

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const renderTabContent = () => {
    if (currentTab === TAB_NAMES.FEATURES) {
      return <DetailFeatures data={data} />;
    } else if (currentTab === TAB_NAMES.REVIEWS) {
      return <ReviewsList reviews={[]} />;
    }
    return <div>Please, choose a tab</div>;
  };

  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <div>
          <DetailName name={name} />
          <Rating rating={rating} reviews={reviews} location={location} />
          <DetailPrice price={price} />
        </div>
        <DetailImage gallery={gallery} />
        <div className={css.description}>{description}</div>
      </div>
      <div className={css.footer}>
        <Tabs tabs={TABS} onChange={handleTabChange} currentTab={currentTab} />
        <div className={css.content}>
          <div className={css.contentSide}>{renderTabContent()}</div>
          <div className={css.contentSide}>
            <BookForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTruck;
