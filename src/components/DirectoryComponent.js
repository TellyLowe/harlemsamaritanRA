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
                <div className="row">
                    {directory}
                </div>
                <GroupInfo group={this.state.selectedGroup}/>
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