import types from '../actions/actionsTypes';

const INITIAL_STATE = {
    isLoading: false,
    address: null,
    error: null,
    cepValue: '',
    opened: false
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.CEP_REQUEST:
            return {...state, isLoading: true};
        case types.CEP_SUCCESS:
            return {...state, isLoading: false, address: action.payload.address, opened: true};
        case  types.CEP_FAILURE:
            return {...state, isLoading: false, error: action.payload.message};
        case types.UPDATE_CEP:
            return {...state, cepValue: action.payload.newCep};
        default:
            return state;
    }
};
export default reducer;
