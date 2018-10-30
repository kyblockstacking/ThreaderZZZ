import React from "react";
import { Link } from "react-router-dom";

class pythonForum extends React.Component {
    state = {};

    render() {
        return (
            <div>
                <Link to={"forum/Python/thread=1"}>Fake Python Thread #1</Link>
                <br></br>
                <hr></hr>
                <Link to={"forum/Python/thread=2"}>Fake Python Thread #2</Link>
                <br></br>
                <hr></hr>
                <Link to={"forum/Python/thread=3"}>Fake Python Thread #3</Link>
                <br></br>
                <hr></hr>
                <Link to={"forum/Python/thread=4"}>Fake Python Thread #4</Link>
                <br></br>
                <hr></hr>
                <Link to={"forum/Python/thread=5"}>Fake Python Thread #5</Link>
                <br></br>
                <hr></hr>
                <Link to={"forum/Python/thread=6"}>Fake Python Thread #6</Link>
                <br></br>
                <hr></hr>
                <Link to={"forum/Python/thread=7"}>Fake Python Thread #7</Link>
                <br></br>
                <hr></hr>
                <Link to={"forum/Python/thread=8"}>Fake Python Thread #8</Link>
                <br></br>
                <hr></hr>
            </div>
        );
    };
};

export default pythonForum;