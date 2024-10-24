import { useId } from "react";
import clsx from "clsx";
import DatePicker from "react-datepicker";
import { ErrorMessage, useField, useFormikContext } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import fieldsCss from "../styles/fields.module.css";
import { formatDate } from "../../utils/format";
import "./customStyles.css";

const FieldInput = ({ label, required, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  const fieldId = useId();
  const className = clsx(fieldsCss.field, { [fieldsCss.required]: required });

  const handleDateChange = (value) => {
    setFieldValue(field.name, formatDate(value));
  };

  return (
    <>
      <div className={className}>
        {label && <label htmlFor={fieldId}>{label}</label>}
        <DatePicker
          id={fieldId}
          {...field}
          {...props}
          minDate={new Date()}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          autoComplete="off"
        />
      </div>
      <ErrorMessage
        className={fieldsCss.error}
        name={field.name}
        component="span"
      />
    </>
  );
};

export default FieldInput;
