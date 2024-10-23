import clsx from "clsx";
import { ErrorMessage, Field } from "formik";
import { useId } from "react";
import fieldsCss from "../styles/fields.module.css";

const FieldInput = ({ name, label, required, className = "", ...props }) => {
  const fieldId = useId();

  return (
    <>
      <div
        className={clsx(fieldsCss.field, className, {
          [fieldsCss.required]: required,
          [fieldsCss.fieldWithTextarea]: props?.as === "textarea",
        })}
      >
        {label && <label htmlFor={fieldId}>{label}</label>}
        <Field
          type="text"
          name={name}
          id={fieldId}
          autoComplete="off"
          {...props}
        />
      </div>
      <ErrorMessage className={fieldsCss.error} name={name} component="span" />
    </>
  );
};

export default FieldInput;
