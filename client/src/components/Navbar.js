import React from "react";
import { Link } from "react-router-dom";

let style = {
    navBar: {
        backgroundColor: "#2e849e"
    },
    homeButton: {
        color: "gold"
    },
    list: {
        cursor: "pointer",
        color: "#262626"
    }
}

class Navbar extends React.Component {

    state = {};

    render() {
        return (
            <nav style={style.navBar} className="navbar navbar-expand-lg navbar-light">
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <Link style={style.homeButton} className="homeButton" to={"/"}><i className="fas fa-home"></i></Link>
                        <li className="nav-item dropdown">
                            <div style={style.list} className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                List of Forums
                            </div>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item" to={"/forum/Javascript"}>Javascript Forum</Link>
                                <Link className="dropdown-item" to={"/forum/PHP"}>PHP Forum</Link>
                                <Link className="dropdown-item" to={"/forum/Python"}>Python Forum</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    };
};

export default Navbar;
