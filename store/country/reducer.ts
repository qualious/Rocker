import produce from 'immer';
import { REQUEST, RESPONSE } from './constants';
import { State, CountryActions } from './interfaces';

const initialState = {
  data: [],
  loading: false,
};

export default (state: State = initialState, action: CountryActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case REQUEST:
        draft.loading = true;
        break;
      case RESPONSE:
        draft.loading = false;
        draft.data = action.data;
        break;
    }
  });
