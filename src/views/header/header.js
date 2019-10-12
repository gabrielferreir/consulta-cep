import React from 'react';
import {cepRequest, updateCpf} from "../../actions/mainActions";
import {connect} from "react-redux";
import './header.scss';

class Header extends React.Component {

    render() {
        const {cepValue, error, cepRequest, updateCep} = this.props;
        return (
            <header className="header">
                <div className="header__wrapper-title">
                    <h4 className="header__title">Consultar</h4>
                </div>

                <div className="header__wrapper-field">
                    <label className="header__label-field">CEP</label>
                    <input type="text" placeholder="02050-010" value={cepValue} onChange={updateCep}
                           className="header__field"/>
                    <button onClick={() => cepRequest(cepValue)} className="header__search-button">Buscar
                    </button>
                </div>

                {error && <span className="header__error">{error}</span>}
            </header>
        );
    }

}

const mapStateToProps = (state) => {
    const {mainReducer} = state;
    return mainReducer;
};

const mapDispatchToProps = dispatch => ({
    cepRequest: cep => dispatch(cepRequest(cep)),
    updateCep: el => dispatch(updateCpf(el.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
