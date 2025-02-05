import React from 'react';
import {cepRequest, updateCep} from "../../actions/mainActions";
import {connect} from "react-redux";
import './header.scss';

export class Header extends React.Component {

    render() {
        const {cepValue, error, cepRequest, updateCep} = this.props;
        return (
            <header className="header">
                <div className="header__wrapper-title">
                    <h4 className="header__title">Consultar</h4>
                </div>

                <div className="header__wrapper-field">
                    <label className="header__label-field">CEP</label>
                    <input type="tel" placeholder="02050-010" value={cepValue}
                           onChange={event => {
                               updateCep(event.target.value)
                           }}
                           onKeyDown={(event) => event.keyCode === 13 && cepRequest(cepValue)}
                           className="header__field"/>
                    <button onClick={() => cepRequest(cepValue)} className="header__search-button">Buscar
                    </button>
                </div>

                {error && <span className="header__error">{error}</span>}
            </header>
        );
    }

}

const mapStateToProps = state => {
    const {mainReducer} = state;
    return {...mainReducer};
};

export default connect(mapStateToProps, {cepRequest, updateCep})(Header);
