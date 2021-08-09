import { GET_ALL_COUNTRIES } from '../actions';


const initial_state = {
    countriesLoaded: [],
    countriesFilter: [],
    countriesSearch: [],
}

export default function countriesReducer(state = initial_state, action) {
    // console.log('Action in countries reducer:' + action.type);
    // console.log('Action in countries reducer payload:' + action);
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            console.log('Linea');
            return {
                ...state,
                countriesLoaded: action.payload,
            }
        default:
            return state;
    }
}