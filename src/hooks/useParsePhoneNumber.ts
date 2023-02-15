// Awesome Phone Number
import { parsePhoneNumber, getRegionCodeForCountryCode } from 'awesome-phonenumber';

// Type 
import { UseParsePhoneNumberProp } from '../types/hooks/useParsePhoneNumberType';

export function useParsePhoneNumber({
  phoneNumber,
  countryCode = 62,
  formatType = 'national',
  returnDetailValues = false
}: UseParsePhoneNumberProp) {
  if (!phoneNumber) return;
  const formatedPhoneNumber = parsePhoneNumber(phoneNumber, {
    regionCode: getRegionCodeForCountryCode(countryCode)
  });
  
  if (returnDetailValues) {
    return formatedPhoneNumber;
  }

  return formatedPhoneNumber.number![formatType];
}