import produce from 'immer';
import {
  CHANGE_SSN,
  CHANGE_PHONE,
  CHANGE_EMAIL,
  CHANGE_COUNTRY,
  CLEAR_ALL,
} from './constants';
import { State, StateActions } from './interfaces';

const initialState = {
  ssn: '',
  phone: '',
  email: '',
  country: 'SWE',
};

export default (state: State = initialState, action: StateActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CHANGE_SSN:
        draft.ssn = action.text;
        break;
      case CHANGE_PHONE:
        draft.phone = action.text;
        break;
      case CHANGE_EMAIL:
        draft.email = action.text;
        break;
      case CHANGE_COUNTRY:
        draft.country = action.text;
        break;
      case CLEAR_ALL:
        draft = initialState;
        break;
    }
  });
