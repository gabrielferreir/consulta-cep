import React, {Component} from 'react';
import {connect} from "react-redux";
import {cepRequest} from "../actions/mainActions";
import Header from "./header";


class MainPage extends Component {
    render() {
        console.log(this.props);
        const {cepRequest} = this.props;

        return (
            <main className="main">
                <Header/>

                <section style={{
                    border: '2px solid #CCC',
                    padding: '32px',
                    marginTop: '8px'
                }}>
                    <h1>Rua Miguel Mentem</h1>
                    <h2>Vila Guilherme</h2>
                    <h3>São Paulo - SP</h3>
                    <h4>02050-010</h4>
                    <iframe
                        src="https://maps.google.com/maps?q=14402336&amp;z=15&amp;output=embed"
                        width="800" height="600" frameborder="0" allowfullscreen></iframe>
                </section>

            </main>
        );
    }
}

const mapStateToProps = (state) => {
    const {mainReducer} = state;
    return mainReducer;
};

const mapDispatchToProps = dispatch => ({
    cepRequest: () => dispatch(cepRequest('14402336'))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
