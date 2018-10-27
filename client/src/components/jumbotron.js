import React from "react";

let jumbotronStyle = {
    textAlign: "center",
    background: "teal",
    p: {
        margin: "0"
    }
};

class jumbotron extends React.Component {

    state = {};

    render() {
        return (
            <div style={jumbotronStyle} className="JUMBO">
                <h1 className="display-4">Coding Forum Board</h1>
                <hr className="my-4" />
                <p style={jumbotronStyle.p}> A developmental environment for developers to develope their developing skills </p>
            </div>
        )
    };
};

export default jumbotron;