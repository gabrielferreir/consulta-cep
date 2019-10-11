import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import MainPage from "./views/mainPage";


const store = createStore(
    reducer,
    applyMiddleware(thunk),
);

export default class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                <MainPage/>
            </Provider>);
    }

}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
