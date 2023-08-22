export interface RegisterUserParams {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  country_code: string;
  phone_number: string;
  date_of_birth: string;
  address: string;
  country: string;
  city: string;
  nationality: string;
}

export interface UserExistsParams {
  email: string;
  country_code: string;
  country: string;
}
