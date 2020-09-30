export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const saveResult = (value) => {
    return {
        type: STORE_RESULT,
        value,
    }
}

export const storeResult = (value) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(value))
        }, 2000)
    }
}

export const deleteResult = (value) => ({
    type: DELETE_RESULT,
    value,
})