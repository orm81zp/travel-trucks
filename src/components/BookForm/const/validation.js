import * as yup from "yup";
import { text } from "../../../utils/validation";

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, text.min(3))
    .max(50, text.max(50))
    .required(text.required()),
  email: yup
    .string()
    .min(3, text.min(3))
    .max(50, text.max(50))
    .email("Invalid email address")
    .required(text.required()),
  date: yup
    .string()
    .matches(
      /^\d{2}\/\d{2}\/\d{4}$/g,
      "Invalid date format (example: DD/MM/YYYY)"
    )
    .required(text.required()),
  comment: yup.string().min(3, text.min(3)).max(250, text.max(250)),
});
