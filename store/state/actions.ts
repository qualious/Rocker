import {
  CHANGE_SSN,
  CHANGE_PHONE,
  CHANGE_EMAIL,
  CHANGE_COUNTRY,
  CLEAR_ALL,
} from './constants';

export const ssn = (text: string) => ({
  type: CHANGE_SSN,
  text,
});

export const phone = (text: string) => ({
  type: CHANGE_PHONE,
  text,
});

export const email = (text: string) => ({
  type: CHANGE_EMAIL,
  text,
});

export const country = (text: string) => ({
  type: CHANGE_COUNTRY,
  text,
});

export const clear = () => ({
  type: CLEAR_ALL,
});
