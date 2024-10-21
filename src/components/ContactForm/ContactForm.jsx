import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "../../const";
import { addContact, updateContact } from "../../redux/contacts/operations";
import {
  errorNotification,
  successNotification,
} from "../../utils/notification";
import Button from "../Button/Button";
import FieldInput from "../FieldInput/FieldInput";
import { initialValues } from "./const";
import { validationSchema } from "./const/validation";
import css from "./ContactForm.module.css";

const ContactForm = ({ contact, onUpdateClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUpdate = !!contact;

  const handleSubmit = (values, actions) => {
    dispatch(
      isUpdate
        ? updateContact({ id: contact.id, ...values })
        : addContact(values)
    )
      .unwrap()
      .then(() => {
        actions.resetForm();
        successNotification(isUpdate ? "Contact updated" : "New contact added");

        if (isUpdate) {
          onUpdateClose();
        }
      })
      .catch((error) => {
        if (error === "You are not authorized") {
          return navigate(ROUTERS.LOGIN);
        }
        errorNotification(error);
      });
  };

  return (
    <div className={css.wrapper}>
      <Formik
        validateOnBlur={false}
        initialValues={isUpdate ? contact : initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <FieldInput name="name" label="Name" />
          <FieldInput name="number" label="Number" placeholder="111-222-3333" />
          <div className={css.actions}>
            <Button type="submit" variant={Button.variants.CONTAINED}>
              {isUpdate ? "Update" : "Add contact"}
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
