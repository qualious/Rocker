const validate = (ssn: string, phone: string, email: string, country: string) =>
  ssn.length > 0 && phone.length > 0 && email.length > 0 && country;

export default validate;
