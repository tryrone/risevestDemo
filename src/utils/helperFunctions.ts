import {PasswordContitions} from 'utils/types';

const checkIfPasswordFullFillsConfition = (
  password: string,
  condition: PasswordContitions,
): boolean => {
  switch (condition) {
    case PasswordContitions.HAS_AT_LEAST_EIGHT_CHARACTERS:
      return password.length >= 8;
    case PasswordContitions.HAS_AT_LEAST_ONE_UPPERCASE_LETTER:
      return /[A-Z]/.test(password);
    case PasswordContitions.HAS_ONE_UNIQUE_CHARACTER:
      return /(?=(.*[!@#$%^&*()\-_=+{};:,<.>]){1})/.test(password);
    default:
      return false;
  }
};

export {checkIfPasswordFullFillsConfition};
