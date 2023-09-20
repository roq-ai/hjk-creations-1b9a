import * as yup from 'yup';

export const dataValidationSchema = yup.object().shape({
  name: yup.string().required(),
  value: yup.string().required(),
  report_id: yup.string().nullable().required(),
});
