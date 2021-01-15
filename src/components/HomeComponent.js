import React from 'react';
import pray1 from '../Images/SFC-Praise-God.jpg'
import pray2 from '../Images/360_F_63437433_EH7FM4ZIq54tb8Ur8vg7IEhd6im6HZkM.jpg'
import logo from '../Images/logo.jpg'
import Carousel from 'react-bootstrap/Carousel'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCard({ item }) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pray1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pray2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="container">
                <div className="row">
                    <div className="col-md m-1">
                        <RenderCard item={props.partner} />
                    </div>
                    <div className="col-md m-1">
                        <RenderCard item={props.promotion} />
                    </div>
                    <div className="col-md m-1">
                        <RenderCard item={props.group} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;   