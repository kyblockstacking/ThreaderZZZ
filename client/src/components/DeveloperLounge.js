import React from "react";
import { Link } from "react-router-dom";

let style = {
    title: {
        background: "#262626",
        color: "#2e849e",
        width: "100%",
        borderTopRightRadius: "2px",
        borderTopLeftRadius: "2px"
    },
    banner: {
        paddingTop: "1%",
        paddingBottom: "1%",
        marginLeft: "25%",
        height: "8em",
        width: "50%"
    }
}

class DeveloperLounge extends React.Component {
    state = {};

    render() {
        return (    
            <div style={{border: "3px solid gold", width: "100%"}}>
                <div style={style.title}>SOME KIND OF TITLE HERE</div>
                <Link to="/DeveloperLounge"><img style={style.banner} src="/images/DeveloperLounge.jpg"></img></Link>
            </div>
        );
    };
};

export default DeveloperLounge;