import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import GroupInfo from './GroupInfo';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedGroup: null
        }
    }

    onGroupSelect(group) {
        this.setState({ selectedGroup: group })
    }

    render() {
        const directory = this.props.groups.map(group => {
            return (
                <div key={group.id} className="col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(group.id)}>
                        <CardImg width="100%" src={group.image} alt={group.name} />
                        {/* <CardImgOverlay>
                            <CardTitle>{group.name}</CardTitle>
                        </CardImgOverlay> */}
                    </Card>
                </div>
            )
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}
export default Directory;