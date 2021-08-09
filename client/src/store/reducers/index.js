import { GET_ALL_COUNTRIES } from '../actions';


const initial_state = {
    countries: [],
}

export default function countriesActions(state = initial_state, action) {
    console.log('Action in countries reducer:' + action.type);
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
            }
        default:
            return state;
    }
}