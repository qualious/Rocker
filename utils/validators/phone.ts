const validate = (text: string) =>
  /\+?(?:0{0,2}[46]*){1}7{1}[0-9]{8}/.test(text);

export default validate;
