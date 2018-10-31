import React from "react";
import "./blink.css";

let jumbotronStyle = {
    textAlign: "center",
    background: "#262626",
    color: "#2e849e",
    paddingTop: "1%",
    height: "150px",
    width: "100%",
    slogan: {
        margin: "0",
        cursor: "default"
    },
    brand: {
        fontFamily: "Oswald",
        cursor: "default"
    },
    zzz: {
        cursor: "default",
        fontSize: "20pt"
    }
};

class jumbotron extends React.Component {

    state = {};

    render() {
        return (
            <div style={jumbotronStyle} className="JUMBO">
                <h1 style={jumbotron.brand} className="display-4"><blinker style={{ fontSize: "25pt", color: "gray" }} className="fas fa-terminal"></blinker>Threader <sup style={jumbotronStyle.zzz}> z<sup> z<sup> z</sup></sup></sup></h1>
                <p style={jumbotronStyle.slogan}> A developmental environment for developers to develop their developing skills </p>
            </div >
        )
    };
};

export default jumbotron;
