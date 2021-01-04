import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import GroupInfo from './GroupInfo';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
                <Header />
                <Directory groups={this.state.groups} onClick={groupId => this.onGroupSelect(groupId)}/>
                <GroupInfo group={this.state.groups.filter(group => group.id === this.state.selectedGroup)[0]} />
                <Footer />
            </div>
        );
    };
}

export default Main;