import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
import * as geocoding from './geocoding';


it('Deve buscar as coordenadas com sucesso', async () => {
    const cep = '14402-336';

    const mock = new MockAdapter(axios);

    const mockResult = {
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

    const expectedResponse = {lat: -20.5353875, lng: -47.3588774};

    mock.onGet(`https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=${process.env.REACT_APP_KEY}`)
        .reply(200, mockResult);

    const res = await geocoding.search(cep);

    expect(res).toEqual(expectedResponse);
});

it('Deve tratar falha ao buscar as coordenadas', async () => {
    const cep = '14402-336';

    const mock = new MockAdapter(axios);

    mock.onGet(`https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=${process.env.REACT_APP_KEY}`)
        .reply(500);

    try {
        await geocoding.search(cep);
        expect(true).toBeFalsy()
    } catch (e) {
        expect(e instanceof Error).toBeTruthy()
    }
});