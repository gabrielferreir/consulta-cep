import types from './actionsTypes';
import * as viacep from '../api/viacep'
import * as geocoding from '../api/geocoding'

export const cepRequest = cep => async dispatch => {

    dispatch({type: types.CEP_REQUEST});

    try {
        const address = await viacep.search(cep);

        const latLng = await geocoding.search(cep);

        dispatch({
            type: types.CEP_SUCCESS,
            payload: {
                address: {
                    ...address,
                    ...latLng
                }
            }
        });

    } catch (e) {
        dispatch({
            type: types.CEP_FAILURE,
            payload: {
                message: e.message
            }
        });
    }

};

export const updateCpf = value => async dispatch => {
    dispatch({
        type: types.UPDATE_CEP,
        payload: {
            newCep: value
        }
    });
};

export const clear = () => async dispatch => {
    dispatch({type: types.CLEAR});
};