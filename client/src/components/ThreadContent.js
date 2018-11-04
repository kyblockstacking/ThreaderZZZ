import React from "react";
import axios from "axios";
import ReplyTextbox from "../components/ReplyTextbox";
import { Link } from "react-router-dom";

class ThreadContent extends React.Component {
    state = {
        content: []
    };

    componentDidMount() {
        this.getContent();
    }

    getContent = () => {
        axios.get(`/api/threads/${this.props.match.params.id}`).then(res => {
            this.setState({
                content: res.data
            });
        })
    }

    upVote = (item) => {
        let upVoteData = {
            id: item.id,
            newUpVoteCount: item.upvotes + 1
        }
        axios.post("/api/upvote", upVoteData).then(res => {
            this.getContent();
        })
    }

    downVote = (item) => {
        let downVoteData = {
            id: item.id,
            newDownVoteCount: item.downvotes + 1
        }
        axios.post("/api/downvote", downVoteData).then(res => {
            this.getContent();
        })

    }

    totalVotes = (item) => {
        return (item.upvotes - item.downvotes);
    }

    threadContent = () => {
        let content = this.state.content;
        let filteredArr = this.state.content.filter(item => {
            return (item.id);
        })
        let thread = filteredArr.map(item => {
            return (
                <div key={item.id}>

                    <button className="btn btn-primary row" onClick={() => this.upVote(item)} disabled={!this.props.authenticated}><i className="far fa-thumbs-up"></i></button>
                    <div className="row">
                        {this.totalVotes(item)}
                        <p style={{ margin: "0 0 0 1.5em", fontSize: "1em", color: "lightgray" }}>
                            <Link to="/">!USER!{item.UserId}</Link>
                        </p>
                    </div>
                    <button className="btn btn-primary active row" onClick={() => this.downVote(item)} disabled={!this.props.authenticated}><i className="far fa-thumbs-down"></i></button>

                    <p className="col-lg-11" style={{ fontSize: "1em", paddingLeft: "2em" }}>
                        {item.replies}KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN
                        </p>
                    <br></br>
                    <div style={{ fontSize: "0.75em", color: "lightgray" }}>
                        <i className="far fa-clipboard"></i>&nbsp;Posted on:&nbsp;DATEHERE
                    </div>
                    <hr></hr>
                </div>
            )
        })
        return thread;
    }

    render() {
        return (
            <div style={{ margin: "1em 8em 1em 8em" }}>
                <div style={{ padding: "1em 2.5em 1em 2.5em" }}>
                    <span style={{ fontSize: "0.75em", color: "lightgray", padding: "1em 0 1em 0" }}><i className="far fa-clipboard">&nbsp;</i>Posted By: 'USERNAME' at 'TIMEHERE'</span>
                    <div>
                        <span style={{ padding: "0.5em 0 0.5em 0", fontSize: "2em" }}>THIS IS MY QUESTION/TITLE</span>
                        <br></br>
                        <span style={{ padding: "1em 0 1em 0", fontSize: "1em" }}>THIS IS A LONGER DESCRIPTION OF MY QUESTION WITH CODE BLOCK AND SUCH AND BOLD AND ITALIC AND KEVIN IS AWESOME AND STUFF AND MORE STUFF AND JAVASCRIPT IS MEH AND DOGS AND PUPPIES</span>
                    </div>
                    <div style={{ fontSize: "0.75em", color: "gray", padding: "0.5em 0 0.5em 0" }}>
                        <i className="far fa-share-square"></i>&nbsp;Share&nbsp;&nbsp;<i className="far fa-flag"></i>&nbsp;Report
                    </div>
                    <ReplyTextbox authenticated={this.props.authenticated}/>
                    <br></br>
                </div>
                <hr></hr>

                {this.threadContent()}
            </div>
        );
    }
}

export default ThreadContent;