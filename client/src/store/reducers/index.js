import { GET_ALL_COUNTRIES } from '../actions';

const initial_state = {
    countries: [],
}

function countries(state = initial_state, action) {
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