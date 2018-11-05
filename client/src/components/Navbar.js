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
                {/* <div style={box}><Link style={{ color: "white" }} to="/DeveloperLounge"><i class="fas fa-chalkboard-teacher">&nbsp;&nbsp;</i>Class</Link></div> */}
                <div style={box}><Link onClick={() => this.scroll()} style={{ color: "white" }} to="/" onUpdate={() => this.scroll()}><i className="far fa-comments">&nbsp;&nbsp;</i>Forums</Link></div>
                <div style={box}><Link style={{ color: "white", cursor: "help" }} to="/AboutUs"><i className="fas fa-info-circle">&nbsp;&nbsp;</i>About Us</Link></div>

                {/* TESTING HERE */}
                {this.props.authenticated ? 
                    <div style={box}><Link style={{ color: "white" }} to="/email/inbox"><i className="fas fa-inbox">&nbsp;</i>Inbox</Link></div>
                : null}
                {this.props.authenticated ? 
                    <div style={box}><Link style={{ color: "white" }} to="/email/outbox"><i className="far fa-share-square">&nbsp;</i>Outbox</Link></div>  
                : null}

                {this.props.authenticated ? 
                    <div style={box}><Link style={{ color: "white" }} to="/DeveloperLounge"><i className="fas fa-inbox">&nbsp;</i>Class</Link></div>
                : null}
            </div>
        )
    }
}

export default NavBar;