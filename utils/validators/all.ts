import { vSSN, vPhone, vEmail } from '.';

const validate = (ssn: string, phone: string, email: string, country: string) =>
  ssn.length > 0 &&
  phone.length > 0 &&
  email.length > 0 &&
  country &&
  vSSN(ssn) &&
  vPhone(phone.replace(/-|\s/g, '').substring(3)) &&
  vEmail(email);

export default validate;
