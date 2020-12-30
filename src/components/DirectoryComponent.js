import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

// function RenderDirectoryItem({group}) {
//     return (
//         <Card>
//             <CardImg width="100%" src={group.image} alt={group.name} />
//                 <CardImgOverlay>
//                     <CardTitle>{group.name}</CardTitle>
//                 </CardImgOverlay>
//         </Card>
//     );
// }

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

    renderSelectedGroup(group) {
        if (group) {
            return (
                <Card>
                    <CardImg top src={group.image} alt={group.name} />
                    <CardBody>
                        <CardTitle>{group.name}</CardTitle>
                        <CardText>{group.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
    }

    render() {
        const directory = this.props.groups.map(group => {
            return (
                <div key={group.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onGroupSelect(group)}>
                        <CardImg width="100%" src={group.image} alt={group.name} />
                        <CardImgOverlay>
                            <CardTitle>{group.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });

        return (
            <div className="container">
                {/* <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem></BreadcrumbItem>
                                <BreadcrumbItem active>Directory</BreadcrumbItem>
                            </Breadcrumb>
                            <h2>Directory</h2>
                            <hr />
                        </div>
                    </div> */}
                <div className="row">
                    {directory}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedGroup(this.state.selectedGroup)}
                    </div>
                </div>
            </div>
        );
    }


    // function Directory(props) {

    //     const directory = this.props.groups.map(group => {
    //         return (
    //             <div key={group.id} className="col-md-5 m-1">
    //                 <RenderDirectoryItem campsite={group} />
    //             </div>
    //         );
    //     });

    //     if (props.groups.isLoading) {
    //         return (
    //             <div className="container">
    //                 <div className="row">
    //                     <Loading />
    //                 </div>
    //             </div>
    //         );
    //     }
    //     if (props.groups.errMess) {
    //         return (
    //             <div className="container">
    //                 <div className="row">
    //                     <div className="col">
    //                         <h4>{props.groups.errMess}</h4>
    //                     </div>
    //                 </div>
    //             </div>
    //         );
    //     }
    //     return (
    //         <div className="container">
    //             <div className="row">
    //                 <div className="col">
    //                     <Breadcrumb>
    //                         <BreadcrumbItem></BreadcrumbItem>
    //                         <BreadcrumbItem active>Directory</BreadcrumbItem>
    //                     </Breadcrumb>
    //                     <h2>Directory</h2>
    //                     <hr />
    //                 </div>
    //             </div>
    //             <div className="row">
    //                 {directory}
    //             </div>
    //         </div>
    //     );
    // }
}
export default Directory;