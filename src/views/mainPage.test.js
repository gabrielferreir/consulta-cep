import React from 'react';
import MainPage from './mainPage';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

it("Deve renderizar a pagina principal", () => {

    configure({adapter: new Adapter()});

    const app = shallow(<MainPage/>);

    expect(toJson(app)).toMatchSnapshot();
});