import React from "react";

let style = {
    Component: {
        border: "2px solid #2e849e",
        background: "#dedede",
        width: "90%",
        margin: "auto",
        marginTop: "1em",
        marginBottom: "1em",
        padding: "20px",
        borderRadius: "10px"
    },
    SignIn: {
        float: "right",
        color: "#2e849e",
        cursor: "default"
    },
    button: {
        float: "right",
        background: "#2e849e",
        color: "white",
        padding: "5px 20px 5px 20px",
        borderRadius: "10px",
        cursor: "pointer"
    },
    inputBox: {
        float: "right",
        borderRadius: "5px",
        fontStyle: "italic"
    },
    forgotPassword: {
        float: "right",
        fontSize: "10pt",
        cursor: "pointer"
    },
    register: {
        float: "right",
        fontSize: "10pt",
        cursor: "pointer",
        marginRight: "3%"
    },
    banner: {
        height: "9em",
        width: "72%",
        float: "left",
        borderRadius: "10px",
        border: "2px solid black"
    }
}

class SignIn extends React.Component {

    state = {};

    forgotPassword = () => {
        alert("haha, what a loser")
    }

    render() {
        return (
            <div style={style.Component} className="SignInContainer">
            <img style={style.banner} src="/images/banner.jpg"></img>
                <div style={style.SignIn}>Username &nbsp;<input style={style.inputBox} placeholder=" Username"></input></div>
                <br></br>
                <br></br>
                <div style={style.SignIn}>Password &nbsp;<input type="password" style={style.inputBox} placeholder=" Password"></input></div>
                <br></br>
                <br></br>
                <a onClick={() => this.forgotPassword()} style={style.forgotPassword}>Forgot Password?</a>
                <strong><a style={style.register}>Register</a></strong>
                <br></br>
                <div style={style.button}>Login</div>
                <br></br>
            </div>
        );
    };

};

export default SignIn;