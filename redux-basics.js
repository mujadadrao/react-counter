// State
const initialState = {
    counter: 0,
}

// Reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC_COUNTER':
            return {
                ...state,
                counter: state.counter + 1,
            }
        case 'ADD_COUNTER':
            return {
                ...state,
                counter: state.counter + action.value,
            }
        default:
            return state;
    }
}

// Store
const redux = require('redux');
const createStore = redux.createStore;
const store = createStore(rootReducer);

// Subscription Action
store.subscribe(() => {
    console.log('State updated: ', store.getState());
})

// Dispatching Action
store.dispatch({
    type: 'INC_COUNTER',
})

store.dispatch({
    type: 'ADD_COUNTER',
    value: 5,
})

console.log('Manual State: ', store.getState());