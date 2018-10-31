import React from 'react';

let date = new Date()

class ReplyToThread extends React.Component {
    state = {};

    render() {
        return (
            <div className="row">
                <div className="col-lg-1">
                    <div className="row">
                        <i className="fas fa-arrow-alt-circle-up col-lg-1"></i>
                    </div>
                    <div className="row">
                        <div className="col-lg-1">
                            Score
                        </div>
                    </div>
                    <div className="row">
                        <i className="fas fa-arrow-alt-circle-down col-lg-1"></i>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="row">
                        <div className="col-lg-4">
                            <span>username</span>
                        </div>
                        <div className="col-lg-8">
                            Posted on: {date.toLocaleDateString()}
                        </div>
                    </div>
                    <div className="row">
                        <textarea placeholder="The reply context goes here" rows="4" cols="50"></textarea>
                    </div>
                </div>
            </div>
        );
    };
};

export default ReplyToThread;
