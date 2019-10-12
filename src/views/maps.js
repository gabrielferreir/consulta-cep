import React from 'react';
import {connect} from "react-redux";
import GoogleMapReact from 'google-map-react';
import './header.scss';

const AnyReactComponent = () => <img src="icon-location.svg" />;

class Maps extends React.Component {

    render() {
        const {opened, address} = this.props;

        return (opened && <section style={{
            border: '2px solid #CCC',
            padding: '32px',
            margin: '8px'
        }}>
            <h1>{address.logradouro}</h1>
            <h1>{address.bairro}</h1>
            <h3>{address.localidade} - {address.uf}</h3>
            <h4>{address.cep}</h4>
            <div style={{height: '600px', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: process.env.REACT_APP_KEY}}
                    defaultCenter={{
                        lat: address.lat,
                        lng: address.lng
                    }}
                    defaultZoom={18}
                >
                    <AnyReactComponent
                        lat={address.lat}
                        lng={address.lng}
                    />
                </GoogleMapReact>
            </div>
        </section>);
    };
}

const mapStateToProps = (state) => {
    const {mainReducer} = state;
    return mainReducer;
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Maps);
