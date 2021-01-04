import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import GroupInfo from './GroupInfo';
import { GROUPS } from '../shared/groups';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: GROUPS,
            selectedGroup: null
        };
    }

    onGroupSelect(groupId) {
        this.setState({selectedGroup: groupId});
    }

    render() {
        return (
            <div>
                <Navbar dark color="danger">
                    <div className="container">
                        <NavbarBrand href="/">Harlem Samaritan</NavbarBrand>
                    </div>
                </Navbar>
                <Directory groups={this.state.groups} onClick={groupId => this.onGroupSelect(groupId)}/>
                <GroupInfo group={this.state.groups.filter(group => group.id === this.state.selectedGroup)[0]} />
            </div>
        );
    };
}

export default Main;