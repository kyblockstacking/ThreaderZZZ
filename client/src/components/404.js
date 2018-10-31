import React from "react";
import { Link } from "react-router-dom";

let style = {
    PageNotFound: {
        textAlign: "center",
        background: "url('/images/404.jpg') no-repeat center fixed",
        backgroundSize: "cover",
        width: "100%",
        height: "400px",
        fontFamily: "Oswald"
    },
    h4: {
        marginBottom: "0"
    },
    white: {
        color: "white"
    }
};

class NotFound extends React.Component {
    state = {};

    render() {
        return (
            <div style={style.PageNotFound} className="container-fluid">
                <h1 style={{ color: "white", paddingTop: "4%" }}>Error 404</h1>
                <br></br>
                <h4 style={style.white}>Oh No. You Are Lost.</h4>
                <br></br>
                <h5 style={style.white}>Go Home</h5>
                <Link style={{ color: "gold", fontSize: "50px" }} to="/" className="fab fa-fort-awesome"></Link>
            </div>
        );
    };
};

export default NotFound;