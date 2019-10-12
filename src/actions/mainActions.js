import types from './actionsTypes';
import axios from 'axios';

export const cepRequest = cep => async dispatch => {

    dispatch({type: types.CEP_REQUEST});

    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        const mapLatLong = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=${process.env.REACT_APP_KEY}`)

        dispatch({
            type: types.CEP_SUCCESS,
            payload: {
                address: {
                    ...response.data,
                    ...mapLatLong.data.results[0].geometry.location
                }
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

export const updateCpf = value => async dispatch => {
    dispatch({
        type: types.UPDATE_CEP,
        payload: {
            newCep: value
        }
    });
};