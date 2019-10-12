import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
import * as viacep from './viacep';
import {InvalidCodeZip, NotFoundCodeZip} from "../utils/excepitons";


it('Deve buscar o cep com sucesso', async () => {
    const cep = '14402-336';

    const mock = new MockAdapter(axios);

    const mockResult = {
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

    mock.onGet(`https://viacep.com.br/ws/${cep}/json/`)
        .reply(200, mockResult);

    const res = await viacep.search(cep);

    expect(res).toEqual(mockResult);
});

it('Deve identificar um cep inválido', async () => {
    const cep = '14402';

    try {
        await viacep.search(cep);
        expect(true).toBeFalsy();
    } catch (e) {
        expect(e instanceof InvalidCodeZip).toBeTruthy()
    }
});

it('Deve tratar quando o cep não for encontrado', async () => {
    const cep = '14402-999';

    const mock = new MockAdapter(axios);

    const mockResult = {"erro": true};

    mock.onGet(`https://viacep.com.br/ws/${cep}/json/`)
        .reply(200, mockResult);

    try {
        await viacep.search(cep);
        expect(true).toBeFalsy();
    } catch (e) {
        expect(e instanceof NotFoundCodeZip).toBeTruthy()
    }
});

it('Deve tratar quando o houver um erro desconhecido', async () => {
    const cep = '14402-999';

    const mock = new MockAdapter(axios);

    mock.onGet(`https://viacep.com.br/ws/${cep}/json/`)
        .reply(500);

    try {
        await viacep.search(cep);
        expect(true).toBeFalsy();
    } catch (e) {
        expect(e instanceof Error).toBeTruthy()
    }
});