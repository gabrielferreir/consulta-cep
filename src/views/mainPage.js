import React, {Component} from 'react';
import {connect} from "react-redux";
import {cepRequest, updateCpf} from "../actions/mainActions";
import Header from "./header";
import Maps from "./maps";


class MainPage extends Component {
    render() {
        console.log(this.props);
        const {cepRequest, opened} = this.props;

        return (
            <main className="main">
                <Header/>
                <Maps/>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    const {mainReducer} = state;
    return mainReducer;
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
