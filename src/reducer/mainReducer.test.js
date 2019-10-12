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