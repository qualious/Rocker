export interface State {
  data: any[];
  loading: boolean;
}

export interface IRequestAction {
  readonly type: '@country/REQUEST_DATA';
}

export interface IResponseAction {
  readonly type: '@country/RECEIVED_DATA';
  readonly data: any;
}

export type CountryActions = IRequestAction | IResponseAction;
