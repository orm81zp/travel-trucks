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
    .email("Should be correct email")
    .required(text.required()),
  date: yup
    .string()
    .min(8, text.min(8))
    .max(18, text.max(18))
    .required(text.required()),
  comment: yup.string().min(8, text.min(8)).max(150, text.max(150)),
});
