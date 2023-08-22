import * as yup from 'yup';

const createAccountSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(8).max(20),
});

const aboutYouSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  nickName: yup.string().required(),
  phoneNumber: yup.string().required(),
  dateOfBirth: yup.string().required(),
});

export {createAccountSchema, aboutYouSchema};
