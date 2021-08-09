import { BASE_URL } from '../../constants';

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';

export const getAllCountries = () => {
    return async function (dispatch) {
        // const response = await fetch(`${BASE_URL}/countries`);
        const response = await fetch(`http://localhost:3001/countries`);
        console.log('getAllCountries actions');
        const data = await response.json();
        console.log('data', data);
        return dispatch({
            type: GET_ALL_COUNTRIES,
            payload: data
        });
    }
};

