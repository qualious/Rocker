import { store } from '../';
import { REQUEST, RESPONSE } from './constants';

export const request = () => ({
  type: REQUEST,
  loading: true,
});

export const response = (data: any) => ({
  type: RESPONSE,
  loading: false,
  data,
});

export const get = () => (dispatch: any) => {
  const {
    country: { loading, data },
  } = store.getState();
  if (loading || data.length > 0) return;
  dispatch(request());
  fetch('https://restcountries.eu/rest/v2/all')
    .then((resp) => resp.json())
    .then((json) =>
      dispatch(
        response(
          json.map(({ name, alpha3Code }: any) => ({
            label: name,
            value: alpha3Code,
          })),
        ),
      ),
    );
};
