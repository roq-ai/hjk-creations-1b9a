import * as yup from 'yup';

export const campaignValidationSchema = yup.object().shape({
  name: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  budget: yup.number().integer().required(),
  client_id: yup.string().nullable().required(),
});
