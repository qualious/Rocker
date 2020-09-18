export interface State {
  ssn: string;
  phone: string;
  email: string;
  country: string;
}

export interface IChangeSSNAction {
  readonly type: '@state/CHANGE_SSN';
  readonly text: string;
}

export interface IChangePhoneAction {
  readonly type: '@state/CHANGE_PHONE';
  readonly text: string;
}

export interface IChangeEmailAction {
  readonly type: '@state/CHANGE_EMAIL';
  readonly text: string;
}

export interface IChangeCountryAction {
  readonly type: '@state/CHANGE_COUNTRY';
  readonly text: string;
}

export interface IClearAll {
  readonly type: '@state/CLEAR_ALL';
}

export type StateActions =
  | IChangeSSNAction
  | IChangePhoneAction
  | IChangeEmailAction
  | IChangeCountryAction
  | IClearAll;
