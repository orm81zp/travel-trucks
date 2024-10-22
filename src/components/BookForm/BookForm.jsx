import { Form, Formik } from "formik";
import { successNotification } from "../../utils/notification";
import Button from "../Button/Button";
import FieldInput from "../FieldInput/FieldInput";
import { initialValues } from "./const";
import { validationSchema } from "./const/validation";
import css from "./BookForm.module.css";

const BookForm = () => {
  const handleSubmit = (contact, actions) => {
    actions.resetForm();
    successNotification("Success registration");
  };

  return (
    <div className={css.wrapper}>
      <Formik
        validateOnBlur={false}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <FieldInput name="name" label="Name" required />
          <FieldInput name="email" label="Email" required />
          <FieldInput type="date" name="date" label="Booking date" required />
          <FieldInput name="comment" label="Comment" />
          <div className={css.actions}>
            <Button type="submit">Send</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default BookForm;
