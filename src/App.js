import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import firebase from "./firebase";
import { GROUPS } from './shared/groups';
import Main from './components/MainComponent';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Main />
            </div>
        );
    };
}

export default App;
