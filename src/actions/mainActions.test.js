import axios from "axios";
import types from './actionsTypes';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import {updateCep, clear, cepRequest} from '../actions/mainActions';
import thunk from 'redux-thunk'


const mockStore = configureMockStore([thunk]);


it('Deve atualizar o valor do CEP', () => {

    const cep = '14402-336';

    const expectedActions = [
        {
            type: types.UPDATE_CEP, payload: {
                newCep: cep
            }
        }
    ];

    const store = mockStore({});

    return store.dispatch(updateCep(cep)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    });
});

it('Deve realizar uma busca de cep com sucesso', () => {

    const cep = '14402-336';

    const mockResultMaps = {
        results: [
            {
                "address_components": [
                    {
                        "long_name": "14402-336",
                        "short_name": "14402-336",
                        "types": [
                            "postal_code"
                        ]
                    },
                    {
                        "long_name": "Jardim Palestina",
                        "short_name": "Jardim Palestina",
                        "types": [
                            "political",
                            "sublocality",
                            "sublocality_level_1"
                        ]
                    },
                    {
                        "long_name": "Franca",
                        "short_name": "Franca",
                        "types": [
                            "administrative_area_level_2",
                            "political"
                        ]
                    },
                    {
                        "long_name": "São Paulo",
                        "short_name": "SP",
                        "types": [
                            "administrative_area_level_1",
                            "political"
                        ]
                    },
                    {
                        "long_name": "Brazil",
                        "short_name": "BR",
                        "types": [
                            "country",
                            "political"
                        ]
                    }
                ],
                "formatted_address": "Jardim Palestina, Franca - SP, 14402-336, Brazil",
                "geometry": {
                    "bounds": {
                        "northeast": {
                            "lat": -20.5349081,
                            "lng": -47.3573852
                        },
                        "southwest": {
                            "lat": -20.539981,
                            "lng": -47.3593058
                        }
                    },
                    "location": {
                        "lat": -20.5353875,
                        "lng": -47.3588774
                    },
                    "location_type": "APPROXIMATE",
                    "viewport": {
                        "northeast": {
                            "lat": -20.5349081,
                            "lng": -47.3569965197085
                        },
                        "southwest": {
                            "lat": -20.539981,
                            "lng": -47.3596944802915
                        }
                    }
                },
                "place_id": "ChIJP0VRc1mvsJQRYwYmVPd681M",
                "types": [
                    "postal_code"
                ]
            }
        ],
        status: "OK"
    };
    const mockResultViacep = {
        "cep": "14402-336",
        "logradouro": "Rua Francisco Miglioranza",
        "complemento": "",
        "bairro": "Jardim Palestina",
        "localidade": "Franca",
        "uf": "SP",
        "unidade": "",
        "ibge": "3516200",
        "gia": "3104"
    };

    const expectedActions = [
        {type: types.CEP_REQUEST},
        {
            type: types.CEP_SUCCESS,
            payload: {
                address: {
                    ...mockResultViacep,
                    "lat": -20.5353875,
                    "lng": -47.3588774
                }
            }
        },
    ];

    const mock = new MockAdapter(axios);

    mock.onGet(`https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=${process.env.REACT_APP_KEY}`)
        .reply(200, mockResultMaps);


    mock.onGet(`https://viacep.com.br/ws/${cep}/json/`)
        .reply(200, mockResultViacep);

    const store = mockStore({});

    return store.dispatch(cepRequest(cep)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    });
});

it('Deve realizar uma busca de cep com falha', () => {

    const cep = '14402-336';

    const mockResultViacep = {
        "cep": "14402-336",
        "logradouro": "Rua Francisco Miglioranza",
        "complemento": "",
        "bairro": "Jardim Palestina",
        "localidade": "Franca",
        "uf": "SP",
        "unidade": "",
        "ibge": "3516200",
        "gia": "3104"
    };

    const expectedActions = [
        {type: types.CEP_REQUEST},
        {
            type: types.CEP_FAILURE,
            payload: {
                message: "Tivemos um problema, tente novamente mais tarde"
            }
        },
    ];

    const mock = new MockAdapter(axios);

    mock.onGet(`https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=${process.env.REACT_APP_KEY}`)
        .reply(500);

    const store = mockStore({});

    return store.dispatch(cepRequest(cep)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    });
});

it('Deve restaurar os valores', () => {

    const expectedActions = [{type: types.CLEAR}];

    const store = mockStore({});

    return store.dispatch(clear()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    })
});