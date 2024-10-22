import clsx from "clsx";
import css from "./Tabs.module.css";

const Tabs = ({ tabs, currentTab, onChange }) => {
  const handleClick = (tabname) => (event) => {
    event.preventDefault();
    onChange(tabname);
  };

  return (
    <div className={css.wrapper}>
      {tabs.map((tab) => (
        <a
          key={tab}
          className={clsx(css.tab, { [css.active]: tab === currentTab })}
          href="#"
          onClick={handleClick(tab)}
        >
          {tab}
        </a>
      ))}
    </div>
  );
};

export default Tabs;
