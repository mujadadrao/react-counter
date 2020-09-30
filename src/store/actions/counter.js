export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const RESET = 'RESET';

export const increment = () => ({
    type: INCREMENT,
})

export const decrement = () => ({
    type: DECREMENT,
})

export const addValue = (value) => ({
    type: ADD,
    value,
})

export const subtractValue = (value) => ({
    type: SUBTRACT,
    value,
})

export const reset = () => ({
    type: RESET,
})

