import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import debugMiddleware from 'redux-debug';
import debug from 'debug';

import { fetchLanding as cfFetchLanding } from './services/Contentful';

const defaultState = {};

export const RECEIVE_LANDING = 'RECEIVE_LANDING';

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case RECEIVE_LANDING: {
            return {
                ...state,
                landing: action.landing,
            };
        }

        default:
            return state;
    }
};

function receiveLanding(landing) {
    return {
        type: RECEIVE_LANDING,
        landing,
    };
}

function fetchLandingThunk() {
    return dispatch => {
        return cfFetchLanding().then(results =>
            dispatch(receiveLanding(results))
        );
    };
}

export function fetchLanding() {
    return (dispatch, getState) => {
        const { landing } = getState();
        if (!landing) {
            return dispatch(fetchLandingThunk());
        } else {
            return Promise.resolve();
        }
    };
}

const composeEnhancers =
    typeof window === 'undefined'
        ? compose
        : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * @param {object} initialState
 * @param {boolean} options.isServer indicates whether it is a server side or client side
 * @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
 * @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
 * @param {boolean} options.debug User-defined debug mode param
 * @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
 */
export function makeStore(initialState /*, options*/) {
    return createStore(
        reducer,
        initialState,
        composeEnhancers(
            applyMiddleware(thunkMiddleware),
            applyMiddleware(debugMiddleware(debug('redux')))
        )
    );
}
