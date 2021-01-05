import React from 'react';
import { Card, CardImg } from 'reactstrap';

function RenderDirectoryItem({ group, onClick }) {
    return (
        <Card>
            <CardImg width="100%" src={group.image} alt={group.name} />
        </Card>
    )
}
function Directory(props) {

        const directory = props.groups.map(group => {
            return (
                <div key={group.id} className="col-md-5 m-1">
                    <RenderDirectoryItem group={group} />
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

export default Directory;