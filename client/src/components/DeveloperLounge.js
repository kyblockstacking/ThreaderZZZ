import React from "react";
import { Link } from "react-router-dom";

class DeveloperLounge extends React.Component {
    state = {};

    render() {
        return (
            <div style={{
                width: '60%',
                background: 'white',
                borderTopRightRadius: '10px',
                borderTopLeftRadius: '10px',
                borderBottomRightRadius: '10px',
                borderBottomLeftRadius: '10px',
                marginBottom: "1em",
                marginLeft: "auto",
                marginRight: "auto",
                border: "2px solid #2e849e",
                padding: "1em"
            }}>
                <span style={{ fontSize: "0.75em", color: "lightgray" }}><i className="far fa-clipboard">&nbsp;</i>Posted By: !USER! at !DATE!</span>
                <br></br>
                <Link style={{ fontSize: "1.75em" }} to={`/forum/category/thread`}>Help me with react.js</Link>
                <br></br>

            </div>
        )
    }
}

export default DeveloperLounge;