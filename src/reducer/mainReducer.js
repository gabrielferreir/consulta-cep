import types from '../actions/actionsTypes';

const INITIAL_STATE = {
    isLoading: false,
    address: null,
    error: null
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.CEP_REQUEST:
            return {...state, isLoading: true};
        case types.CEP_SUCCESS:
            return {...state, isLoading: false, address: action.payload};
        case  types.CEP_FAILURE:
            return {...state, isLoading: false, error: action.payload.message};
        default:
            return state;
    }
};
export default reducer;
