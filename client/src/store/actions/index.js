import { BASE_URL } from '../../constants';

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';

export const getAllCountries = () => {
    console.log('getAllCountries actions');
    return async function (dispatch) {
        const response = await fetch(`${BASE_URL}/countries`);
        const data = await response.json();
        console.log(data.slice(1,4));
        return dispatch({
            type: GET_ALL_COUNTRIES,
            payload: data
        });
    }
};

