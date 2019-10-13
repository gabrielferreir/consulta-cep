import React from 'react';
import ConnectMaps, {Maps, Icon} from './maps';
import thunk from 'redux-thunk';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureStore from 'redux-mock-store';

const mockStore = configureStore([thunk]);
const initialState = {};

let store;

beforeEach(() => {
    configure({adapter: new Adapter()});
    store = mockStore(initialState);
});

it('Deve renderizar o mapa storie', () => {
    const wrapper = shallow(<ConnectMaps store={store}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('Deve renderizar a mensagem de loading', () => {
    const wrapper = shallow(<Maps opened={false} isLoading={true}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('Deve renderizar com o mapa', () => {
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
    const wrapper = shallow(<Maps opened={true} address={address}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('Deve renderizar o icone', () => {
    const icon = shallow(<Icon/>);
    expect(toJson(icon)).toMatchSnapshot();
});

it('Deve renderizar vazio', () => {
    const wrapper = shallow(<Maps opened={true} isLoading={true}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
});