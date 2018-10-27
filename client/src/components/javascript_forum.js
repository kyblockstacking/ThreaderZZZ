import React from "react";
import { Link } from "react-router-dom";

class javascriptForum extends React.Component {
    state = {};

    render() {
        return (
            <div>
                <Link to={"/forum/Javascript/thread=1"}>Fake Javascript thread #1</Link>
                <br></br>
                <hr></hr>
                <Link to={"/forum/Javascript/thread=2"}>Fake Javascript thread #2</Link>
                <br></br>
                <hr></hr>
                <Link to={"/forum/Javascript/thread=3"}>Fake Javascript thread #3</Link>
                <br></br>
                <hr></hr>
                <Link to={"/forum/Javascript/thread=4"}>Fake Javascript thread #4</Link>
                <br></br>
                <hr></hr>
                <Link to={"/forum/Javascript/thread=5"}>Fake Javascript thread #5</Link>
                <br></br>
                <hr></hr>
                <Link to={"/forum/Javascript/thread=6"}>Fake Javascript thread #6</Link>
                <br></br>
                <hr></hr>
            </div>
        );
    };
};

export default javascriptForum;