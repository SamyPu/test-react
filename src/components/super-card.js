import React from "react";
import ProfilePicture from "../img/image-jeremy.png"

class SuperCard extends React.Component {
    navigation = (destination) => {
        this.props.onNavigation(destination)
    }
    render() {
        return(
            <div className="row rounded superCard mx-1">
                <div className="col-12 bg-blue rounded p-4 d-flex justify-content-center flex-column">
                    <div className="row">
                        <div className="col-3 col-sm-12">
                            <div className="img-container">
                                <img src={ProfilePicture} alt="" className="rounded-circle border border-3 border-light"/> 
                            </div>
                        </div>
                        <div className="col col-sm-12 ms-2 ms-sm-0 py-0 py-sm-3">
                            <span>Report for</span>
                            <h1>Jeremy Robson</h1>
                        </div>
                    </div>
                </div>
                <div className="col-12 pt-3 pt-sm-3 px-sm-4 d-flex justify-content-evenly">
                    <div className="row justify-content-evenly pt-0 p-sm-3">
                        <div className="col col-sm-12">
                            <p onClick={()=>this.navigation("daily")}>Daily</p>
                        </div>
                        <div className="col col-sm-12">
                            <p onClick={()=>this.navigation("weekly")}>Weekly</p>
                        </div>
                        <div className="col col-sm-12">
                            <p onClick={()=>this.navigation("monthly")}>Monthly</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SuperCard