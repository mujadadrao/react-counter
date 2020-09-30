import * as actionTypes from '../actions/counter'

const initialState = {
    counter: 0,
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value,
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value,
            }
        case actionTypes.RESET:
            return {
                ...state,
                counter: 0,
                results: [],
            }
        default:
            return state;
    }
}

export default counter;