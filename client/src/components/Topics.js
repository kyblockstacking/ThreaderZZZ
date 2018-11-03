import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CreateThread from "./CreateThread"

class Topic extends React.Component {
    state = {
        threadsArray: []
    };

    componentDidMount() {
        axios.get(`/api/${this.props.match.params.category}`).then(res => {
            this.setState({ threadsArray: res.data });
            console.log("KEVIN", this.state.threadsArray)
        })
    }

    render() {
        return (
            <div>
                <div style={{ borderRadius: "10px", padding: '5px', background: '#2e849e', color: 'white', width: "60%", marginRight: "auto", marginLeft: "auto", marginBottom: "1em", textAlign: "center" }}><i className="fab fa-js-square">&nbsp;&nbsp;</i><span style={{cursor: "default"}}>Javascript ThreadZZZ</span></div>
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
                            <span style={{ fontSize: "0.75em", color: "lightgray" }}><i className="far fa-clipboard">&nbsp;</i>Posted By: !USER!{items.UserId} at !DATE!{items.submitDate}</span>
                            <br></br>
                            <Link style={{ fontSize: "1.75em" }} to={`/forum/category/thread=${items.id}`}>
                                {items.threadName}
                            </Link>
                            <br></br>
                            <span style={{ fontSize: "0.75em" }}><i className="far fa-comment-alt"></i>&nbsp;{items.Comments.length} replies</span>
                            <br></br>
                        </div>
                    )
                })}
            </div>
        );
    };
};

export default Topic;