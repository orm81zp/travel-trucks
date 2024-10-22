import { useId, useState } from "react";
import { BsMap } from "react-icons/bs";
import fieldsCss from "../styles/fields.module.css";
import clsx from "clsx";

const SearchBox = ({onChange, value}) => {
  const [focused, setFocused] = useState(false);
  const searchFieldId = useId();

  const handleChange = (event) => {
    onChange(event.target.value)
  };

  const handleFocus = (value) => () => {
    setFocused(value);
  };

  const fieldClassName = clsx(
    fieldsCss.field,
    focused && fieldsCss.fieldFocused
  );

  return (
    <div className={fieldsCss.fieldRow}>
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
    </div>
  );
};

export default SearchBox;
