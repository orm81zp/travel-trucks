import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import fieldsCss from "../styles/fields.module.css";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectSearchFilter);
  const searchFieldId = useId();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchBox}>
      <div className={fieldsCss.field}>
        <label htmlFor={searchFieldId}>Find contacts by name or number</label>
        <input
          type="text"
          name="search"
          value={value}
          id={searchFieldId}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchBox;
