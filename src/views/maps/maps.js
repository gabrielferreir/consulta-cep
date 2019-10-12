import React from 'react';
import {connect} from "react-redux";
import {clear} from "../../actions/mainActions";
import GoogleMapReact from 'google-map-react';
import './maps.scss';

const Icon = () => <img alt="location" src="icon-location.svg"/>;

class Maps extends React.Component {

    render() {
        const {opened, isLoading, address, clear} = this.props;

        if (opened && !isLoading)
            return <section className="wrapper-map">

                <div className="wrapper-map__clear" onClick={clear}>
                    <i className="material-icons">clear</i>
                </div>

                <h1 className="wrapper-map__title">{address.logradouro}</h1>
                <p className="wrapper-map__info-address">{address.bairro}</p>
                <p className="wrapper-map__info-address">{address.localidade} - {address.uf}</p>
                <p className="wrapper-map__info-address">{address.cep}</p>
                <div className="wrapper-map__map">
                    <GoogleMapReact
                        bootstrapURLKeys={{key: process.env.REACT_APP_KEY}}
                        defaultCenter={{
                            lat: address.lat,
                            lng: address.lng
                        }}
                        defaultZoom={18}
                    >
                        <Icon
                            lat={address.lat}
                            lng={address.lng}
                        />
                    </GoogleMapReact>
                </div>
            </section>;
        if (!opened && isLoading)
            return <div style={{padding: '16px'}}>
                <p>Carregando...</p>
            </div>;
        return <div/>;
    };
}

const mapStateToProps = (state) => {
    const {mainReducer} = state;
    return mainReducer;
};

const mapDispatchToProps = dispatch => ({
    clear: () => dispatch(clear())
});

export default connect(mapStateToProps, mapDispatchToProps)(Maps);
