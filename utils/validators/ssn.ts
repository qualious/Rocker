const invalid = [
  '0000000000',
  '2222222222',
  '4444444444',
  '5555555555',
  '7777777777',
  '9999999999',
];

const validate = (text: string) => {
  if (text === undefined || text === null || invalid.includes(text))
    return false;
  const chars = text.replace(/\D/g, '').split('').reverse().slice(0, 10);
  if (chars.length !== 10) return false;
  const sum = chars
    .map((char: string) => +char)
    .reduce((acc: number, val: number, i: number) => {
      if (i % 2) val *= 2;
      if (val > 9) val -= 9;
      return acc + val;
    });

  return sum % 10 === 0;
};

export default validate;
