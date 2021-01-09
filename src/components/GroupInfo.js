import React from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderGroup({ group }) {
    return (
        <div className="col-md-5">
            <Card>
                <CardImg top src={group.image} alt={group.name} />
                <CardBody>
                    <CardText>{group.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}
function RenderComments({ comments }) {
    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map(comment => {
                    return (
                        <div key={comment.id}>
                            <p>{comment.text}<br />
                                {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
    return <div />
}
function GroupInfo(props) {
    if (props.group) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.group.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.group.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderGroup group={props.group} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default GroupInfo;