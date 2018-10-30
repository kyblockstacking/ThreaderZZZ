import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class javascriptForum extends React.Component {
    state = {
        threadsArray: []
    };

    componentDidMount() {
        axios.get("/api/threads").then(res => {
            console.log(res);
            this.setState({ threadsArray: res.data });
        })
    }


    render() {
        return (
            <div>
                {this.state.threadsArray.map(items => {
                    return (
                        <div key={items.id}>
                            <Link to={`/forum/Javascript/thread=${items.id}`}>{items.threadName}</Link>
                            <br></br>
                            <span>{items.Comments.length} replies</span>
                            <br></br>
                            <span>Posted on: {items.submitDate}</span>
                            <hr></hr>
                        </div>
                    )
                })}
            </div>
        );
    };
};

export default javascriptForum;