import React, {Component} from 'react';
import Header from "./header/header";
import Maps from "./maps/maps";


export default class MainPage extends Component {
    render() {
        return (
            <main className="main">
                <Header/>
                <Maps/>
            </main>
        );
    }
}
