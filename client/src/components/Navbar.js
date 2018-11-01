import React from "react";
import { Link } from "react-router-dom";

let box = {
    background: "#2e849e",
    color: "white",
    margin: "10px",
    padding: "0px 5px 0px 100px",
    borderRadius: "8px",
    // float: "right",
    cursor: "pointer",
    display: "inline-block"
}

class NavBar extends React.Component {
    state = {};

    scroll = () => {
        window.scrollTo({ top: 400, behavior: "smooth" })
    };

    render() {
        return (
            <div>
                <Link to="/"><box style={box}><i className="fas fa-home"></i>&nbsp;&nbsp;Home</box></Link>
                <Link to="/DeveloperLounge"><box style={box}><i className="fas fa-couch"></i>&nbsp;&nbsp;Lounge</box></Link>
                <box onClick={() => this.scroll()} style={box}><i className="far fa-comments"></i>&nbsp;&nbsp;Forums</box>
                <Link to="/AboutUs"><box style={box}><i className="fas fa-info-circle"></i>&nbsp;&nbsp;About Us</box></Link>
            </div>
        )
    }
}

export default NavBar;