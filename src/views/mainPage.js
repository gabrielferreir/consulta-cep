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

                <iframe
                    src="https://maps.google.com/maps?q=14402336&amp;z=15&amp;output=embed"
                    width="800" height="600" frameborder="0" allowfullscreen></iframe>

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
