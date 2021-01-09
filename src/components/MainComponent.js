import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import GroupInfo from './GroupInfo'
import { GROUPS } from '../shared/groups';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            groups: GROUPS,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                    group={this.state.groups.filter(group => group.featured)[0]}
                    promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.state.partners.filter(partner => partner.featured)[0]}
                />
            );
        }

        const GroupWithId = ({match}) => {
            return (
                <GroupInfo 
                    group={this.state.groups.filter(group => group.id === +match.params.groupId)[0]}
                    comments={this.state.comments.filter(comment => comment.groupId === +match.params.groupId)}
                />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/directory/:groupId' component={GroupWithId} />
                    <Route exact path='/directory' render={() => <Directory groups={this.state.groups} />} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;