import types from './actionsTypes';
import axios from 'axios';

export const cepRequest = (cep) => async dispatch => {

    dispatch({type: types.CEP_REQUEST});

    try {
        console.log('AQUI');
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        console.log('AOOO', response);
        dispatch({
            type: types.CEP_SUCCESS,
            payload: {
                cep: '14402-336'
            }
        });

    } catch (e) {
        console.log('AEEE');
        dispatch({
            type: types.CEP_FAILURE,
            payload: {
                message: 'Tivemos um problema tente novamente mais tarde'
            }
        });
    }

};