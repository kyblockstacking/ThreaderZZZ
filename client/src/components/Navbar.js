import React from "react";
import { Link } from "react-router-dom";

let box = {
    background: "#2e849e",
    color: "white",
    margin: "10px",
    padding: "0px 5px 0px 100px",
    borderRadius: "8px",
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
                <div style={box}><Link style={{ color: "white" }} to="/"><i className="fas fa-home">&nbsp;&nbsp;</i>Home</Link></div>
                <div style={box}><Link style={{ color: "white" }} to="/DeveloperLounge"><i class="fas fa-chalkboard-teacher">&nbsp;&nbsp;</i>Class</Link></div>
                <div style={box}><Link onClick={() => this.scroll()} style={{ color: "white" }} to="/" onUpdate={() => this.scroll()}><i className="far fa-comments">&nbsp;&nbsp;</i>Forums</Link></div>
                <div style={box}><Link style={{ color: "white", cursor: "help" }} to="/AboutUs"><i className="fas fa-info-circle">&nbsp;&nbsp;</i>About Us</Link></div>
            </div>
        )
    }
}

export default NavBar;