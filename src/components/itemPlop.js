import React from "react";

class ItemPlop extends React.Component {
    render() {
        return (
            <div className={`rounded mb-4 row mx-1 itemPlop ${this.props.bgcolor}`}>
                <div className="col-12 position-relative py-3 py-sm-4 itemPlop-container">
                    <img src={this.props.icon} alt="" className="position-absolute itemPlop-icon"/>
                </div>
                <div className="col-12 rounded bg-primary">
                    <div className="row p-3">
                        <div className="col-12 mb-1 mb-sm-3 mt-0 mt-sm-3">
                            <h2>{this.props.title}</h2>
                        </div>
                        <div className="col-12">
                            <div className="row justify-content-between align-items-center">
                                <div className="col col-sm-12 text-white">
                                    <h3>{this.props.hrs}hrs</h3>
                                </div>
                                <div className="col col-sm-12 text-end text-sm-start px-1 px-sm-3">
                                    <span>Last Week - {this.props.week}hrs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemPlop