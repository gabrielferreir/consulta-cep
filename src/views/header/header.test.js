import React from 'react';
import ConnectHeader, {Header} from './header';
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

it('Deve renderizar o cabeçalho', () => {
    const wrapper = shallow(<ConnectHeader store={store}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
});

it("Deve atualizar o valor do CEP", () => {
    const updateCep = jest.fn();

    const app = shallow(<Header updateCep={updateCep}/>);

    const input = app.find('input');
    input.simulate('change', { target: { value: '14402-336' } });

    expect(updateCep.mock.calls.length).toBe(1)
});

it("Deve chamar a função que busca o endereço ao apertar Enter", () => {
    const cepRequest = jest.fn();

    const app = shallow(<Header cepRequest={cepRequest}/>);

    const input = app.find('input');
    input.simulate('keydown', {keyCode: 13});

    expect(cepRequest.mock.calls.length).toBe(1)
});

it("Deve chamar a função que busca o endereço ao clicar no botão", () => {
    const cepRequest = jest.fn();

    const app = shallow(<Header cepRequest={cepRequest}/>);

    const input = app.find('button');
    input.simulate('click');

    expect(cepRequest.mock.calls.length).toBe(1)
});

it("Deve exibir a mensagem de erro", () => {
    const error = 'Tivemos um problema, tente novamente mais tarde';
    const app = shallow(<Header error={error}/>);

    expect(toJson(app)).toMatchSnapshot();
});