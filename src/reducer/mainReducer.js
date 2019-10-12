import types from '../actions/actionsTypes';
import maskCep from "../utils/mask-cep";

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
            return {...state, isLoading: true, address: null, opened: false, error: null};
        case types.CEP_SUCCESS:
            return {...state, isLoading: false, address: action.payload.address, opened: true};
        case  types.CEP_FAILURE:
            return {...state, isLoading: false, error: action.payload.message};
        case types.UPDATE_CEP:
            return {...state, cepValue: maskCep(action.payload.newCep)};
        case types.CLEAR:
            return INITIAL_STATE;
        default:
            return state;
    }
};
export default reducer;
