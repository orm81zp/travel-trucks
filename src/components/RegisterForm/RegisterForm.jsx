import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "../../const";
import { register } from "../../redux/auth/operations";
import {
  errorNotification,
  successNotification,
} from "../../utils/notification";
import Button from "../Button/Button";
import FieldInput from "../FieldInput/FieldInput";
import { initialValues } from "./const";
import { validationSchema } from "./const/validation";
import css from "./RegisterForm.module.css";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (contact, actions) => {
    dispatch(register(contact))
      .unwrap()
      .then(() => {
        actions.resetForm();
        navigate(ROUTERS.LOGIN);
        successNotification("Success registration");
      })
      .catch((error) => {
        errorNotification(error);
      });
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
          <FieldInput name="name" label="Name" />
          <FieldInput name="email" label="Email" />
          <FieldInput type="password" name="password" label="Password" />
          <div className={css.actions}>
            <Button type="submit" variant={Button.variants.CONTAINED}>
              Register
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
