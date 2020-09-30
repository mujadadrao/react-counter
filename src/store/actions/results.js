export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const storeResult = (value) => ({
    type: STORE_RESULT,
    value,
})

export const deleteResult = (value) => ({
    type: DELETE_RESULT,
    value,
})