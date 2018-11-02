import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CreateThread from "./CreateThread"

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
                <div style={{ borderRadius: "10px", padding: '5px', background: '#2e849e', color: 'white', width: "60%", marginRight: "auto", marginLeft: "auto", marginBottom: "1em", textAlign: "center" }}>Javascript ThreadZZZ</div>
                <CreateThread />
                {this.state.threadsArray.map(items => {
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
                        }} key={items.id}>
                            <Link to={`/forum/Javascript/thread=${items.id}`}>
                                {items.threadName}
                                <br></br>
                                <span>{items.Comments.length} replies</span>
                                <br></br>
                                <span>Posted on: {items.submitDate}</span>
                            </Link>
                        </div>
                    )
                })}
            </div>
        );
    };
};

export default javascriptForum;