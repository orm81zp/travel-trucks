import { useId, useState } from "react";
import { BsMap } from "react-icons/bs";
import fieldsCss from "../styles/fields.module.css";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { changeLocation } from "../../redux/filters/slice";
import { useSearchParams } from "react-router-dom";

const SearchBox = ({ onChange, value }) => {
  const dispatch = useDispatch();
  const [, setSearchParams] = useSearchParams();
  const [focused, setFocused] = useState(false);
  const searchFieldId = useId();

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  const handleFocus = (value) => () => {
    setFocused(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.elements.search.value;
    dispatch(changeLocation(location));
    setSearchParams((params) => {
      params.set("location", location);
      return params;
    });
  };

  const fieldClassName = clsx(
    fieldsCss.field,
    focused && fieldsCss.fieldFocused
  );

  return (
    <div className={fieldsCss.fieldRow}>
      <form onSubmit={handleSubmit}>
        <label htmlFor={searchFieldId}>Location</label>
        <div className={fieldClassName}>
          <BsMap className="icon" />
          <input
            onFocus={handleFocus(true)}
            onBlur={handleFocus(false)}
            type="text"
            name="search"
            value={value}
            id={searchFieldId}
            onChange={handleChange}
            placeholder="City"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
