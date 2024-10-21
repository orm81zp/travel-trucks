import * as yup from "yup";
import { text } from "../../../utils/validation";

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, text.min(3))
    .max(50, text.max(50))
    .required(text.required()),
  number: yup
    .string()
    .min(3, text.min(3))
    .matches(
      /^\d{3}-\d{3}-\d{1,4}$/g,
      "Maximum 10 digits, match format: 111-222-3333"
    )
    .max(50, text.max(50))
    .required(text.required()),
});
