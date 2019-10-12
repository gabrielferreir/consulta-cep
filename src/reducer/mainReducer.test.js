import types from '../actions/actionsTypes';
import reducer from '../reducer/mainReducer';

it('Deve alterar o estado quando iniciar a busca', () => {
    const cepRequest = {
        type: types.CEP_REQUEST
    };

    expect(reducer({}, cepRequest)).toEqual({
        address: null,
        error: null,
        isLoading: true,
        opened: false
    });
});

it('Deve alterar o estado quando houver uma falha na busca', () => {
    const cepRequest = {
        type: types.CEP_FAILURE,
        payload: {
            message: 'Tivemos um problema, tente novamente mais tarde'
        }
    };

    expect(reducer({}, cepRequest)).toEqual({
        error: "Tivemos um problema, tente novamente mais tarde",
        isLoading: false
    });
});

it('Deve alterar o estado quando houver sucesso na busca', () => {

    const address = {
        "cep": "14402-336",
        "logradouro": "Rua Francisco Miglioranza",
        "complemento": "",
        "bairro": "Jardim Palestina",
        "localidade": "Franca",
        "uf": "SP",
        "unidade": "",
        "ibge": "3516200",
        "gia": "3104",
        "lat": -20.5353875,
        "lng": -47.3588774
    };
    const cepRequest = {
        type: types.CEP_SUCCESS,
        payload: {
            address
        }
    };

    expect(reducer({}, cepRequest)).toEqual({
        address: address,
        isLoading: false,
        opened: true
    });
});

it('Deve limpar o estado', () => {
    const cepRequest = {
        type: types.CLEAR
    };

    expect(reducer({}, cepRequest)).toEqual({
        isLoading: false,
        address: null,
        error: null,
        cepValue: '',
        opened: false
    });
});

it('Deve atualizar o valor do CEP', () => {
    const cep = '14402-336';
    const cepRequest = {
        type: types.UPDATE_CEP,
        payload: {
            newCep: cep
        }
    };

    expect(reducer({}, cepRequest)).toEqual({
        cepValue: cep
    });
});

it('Deve retornar o estado inicial', () => {
    const cepRequest = {type: 'default'};

    const INITIAL_STATE = {
        isLoading: false,
        address: null,
        error: null,
        cepValue: '',
        opened: false
    };

    expect(reducer(undefined, cepRequest)).toEqual(INITIAL_STATE);
});