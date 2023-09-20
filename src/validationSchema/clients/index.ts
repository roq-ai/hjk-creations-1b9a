import * as yup from 'yup';

export const clientValidationSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  contact_number: yup.string().required(),
  contact_person: yup.string().required(),
  agency_id: yup.string().nullable().required(),
});
