import React from "react";
import { Link } from "react-router-dom";

let box = {
    color: "white",
    fontSize: "1em",
    padding: "2%",
    background: "teal",
    position: "fixed",
    top: "0",
    width: "100%",
    zIndex: "100",
    opacity: "0.8"
}
class NavBar extends React.Component {

    render() {
        return (
            <div>
                <div style={box}>
                    <div>
                        <Link style={{ color: "white" }} to="/"><i className="fas fa-home">&nbsp;&nbsp;</i>Home</Link>
                        &nbsp;|&nbsp;

                                            {
                            this.props.authenticated ?
                                <Link style={{ color: "white" }} to="/generalemail"><i className="fas fa-envelope">&nbsp;</i>Email<span>&nbsp;|&nbsp;</span></Link>
                                : null
                        }

                        {
                            this.props.authenticated ?
                                <Link style={{ color: "white" }} to="/DeveloperLounge"><i className="fas fa-pray">&nbsp;</i>Mentor<span>&nbsp;|&nbsp;</span></Link>
                                : null
                        }

                        <span className="dropdown show">
                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <Link style={{ color: "white" }} to="/home" onUpdate={() => this.scroll()}>Forums</Link>
                            </a>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <Link className="dropdown-item" to="/forum/1">Javascript</Link>
                                <Link className="dropdown-item" to="/forum/2">PHP</Link>
                                <Link className="dropdown-item" to="/forum/3">Python</Link>
                            </div>
                        </span>

                        <Link style={{ color: "white", cursor: "help", float: "right" }} to="/signup"><i className="fas fa-user-plus">&nbsp;&nbsp;</i>Sign Up</Link>

                    </div>

                </div>
            </div >
        )
    }
}

export default NavBar;