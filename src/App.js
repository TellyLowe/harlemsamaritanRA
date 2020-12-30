import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import firebase from "./firebase";
import { GROUPS } from './shared/groups';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: GROUPS
        };
    }

    render() {
        return (
            <div className="App">
                <Navbar dark color="danger">
                <div className="container">
                    <NavbarBrand href="/">Harlem Samaritan</NavbarBrand>
                </div>
                </Navbar>
                <Directory groups={this.state.groups} />
            </div>
        );
    }
}

export default App;
