import React from "react";
import { Link } from "react-router-dom";

class phpForum extends React.Component {
    state = {};

    render() {
        return (
            <div>
                <Link to={"forum/PHP/thread=1"}>Fake PHP Thread #1</Link>
                <br></br>
                <hr></hr>
                <Link to={"forum/PHP/thread=2"}>Fake PHP Thread #2</Link>
                <br></br>
                <hr></hr>
                <Link to={"forum/PHP/thread=3"}>Fake PHP Thread #3</Link>
                <br></br>
                <hr></hr>
                <Link to={"forum/PHP/thread=4"}>Fake PHP Thread #4</Link>
                <br></br>
                <hr></hr>
            </div>
        );
    };
};

export default phpForum;