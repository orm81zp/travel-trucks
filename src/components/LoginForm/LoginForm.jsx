import { Form, Formik } from "formik";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTERS } from "../../const";
import { login } from "../../redux/auth/operations";
import { errorNotification } from "../../utils/notification";
import Button from "../Button/Button";
import FieldInput from "../FieldInput/FieldInput";
import { initialValues } from "./const";
import { validationSchema } from "./const/validation";
import css from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectUrl = useRef(location.state?.pathname || ROUTERS.HOME);

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {
        actions.resetForm();
        navigate(redirectUrl.current);
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
          <FieldInput name="email" label="Email" />
          <FieldInput type="password" name="password" label="Password" />
          <div className={css.actions}>
            <Button type="submit" variant={Button.variants.CONTAINED}>Login</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
