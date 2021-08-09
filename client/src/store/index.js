import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import countriesReducer from './reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    countriesState: countriesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;