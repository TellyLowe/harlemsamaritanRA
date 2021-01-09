import React from 'react';
import { Card, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({ group }) {
    return (
        <Card>
            <Link to={`/directory/${group.id}`}>
                <CardImg width="100%" src={group.image} alt={group.name} />
            </Link>
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
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr />
                </div>
            </div>
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }

export default Directory;