// Awesome Phone Number
import { PhoneNumberFormat } from 'awesome-phonenumber';

type UseParsePhoneNumberProp = {
  phoneNumber: string | undefined,
  countryCode?: number,
  formatType?: PhoneNumberFormat,
  returnDetailValues?: boolean
};

export {
  UseParsePhoneNumberProp
}
