import { Form, Formik } from "formik";

import { successNotification } from "../../utils/notification";
import Button from "../Button/Button";
import FieldInput from "../FieldInput/FieldInput";
import DataPickerInput from "../DataPickerInput/DataPickerInput";
import { initialValues } from "./const";
import { validationSchema } from "./const/validation";
import css from "./BookForm.module.css";

const BookForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(
      "BookForm submitted successfully with the following values",
      values
    );
    actions.resetForm();
    successNotification("Book request sent successfully!");
  };

  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.description}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik
        validateOnBlur={false}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <FieldInput name="name" label="Name" required />
          <FieldInput name="email" label="Email" required />
          <DataPickerInput name="date" label="Booking date" required />
          <FieldInput as="textarea" name="comment" label="Comment" />
          <div className={css.actions}>
            <Button type="submit">Send</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default BookForm;
