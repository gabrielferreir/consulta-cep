import React from 'react';
import {cepRequest} from "../actions/mainActions";
import {connect} from "react-redux";
import './header.scss';

class Header extends React.Component {

    render() {
        const {cepRequest} = this.props;
        return (
            <header className="header">
                <div style={{width: '100%'}}>
                    <h4 className="header__title">Consultar</h4>
                </div>

                <div>
                    <label className="header__label-field">CEP</label>
                    <input type="text" placeholder="02050-010" className="header__field"/>
                    <button onClick={cepRequest} className="header__search-button">Buscar</button>
                </div>
            </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
