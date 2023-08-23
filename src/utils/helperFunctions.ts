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

const commaFormat = (number: string): string => {
  const formatedNumber = Number(number.replace(/,/g, ''));
  return formatedNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const removeCommaFormat = (number: string): number => {
  return parseInt(number.replace(/,/g, ''), 10);
};

const formatCurrency = (
  amount: number | string | undefined,
  country = 'USD',
): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: country,
  }).format(Number(amount) || 0);
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString) || new Date();
  const month = date.toLocaleString('default', {month: 'short'});
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};

const convertInvestedAmountToNaira = (amount: number, sell_rate: number) => {
  const nairaAmount = amount * sell_rate;
  return Number(nairaAmount).toFixed(2);
};

export {
  checkIfPasswordFullFillsConfition,
  commaFormat,
  removeCommaFormat,
  formatCurrency,
  formatDate,
  convertInvestedAmountToNaira,
};
