import * as actionTypes from '../actions/results'

const initialState = {
    results: [],
}

const results = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: [...state.results, action.value],
            }
        case actionTypes.DELETE_RESULT:
            return {
                ...state,
                results: state.results.filter((item, index) => index !== action.value),
            }
        default:
            return state;
    }
}

export default results;