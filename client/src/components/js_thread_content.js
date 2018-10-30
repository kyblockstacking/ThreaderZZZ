import React from "react";
import axios from "axios";

class JsThreadContent extends React.Component {
    state = {
        content: []
    };

    componentDidMount() {
        this.getContent();
    }

    getContent = () => {
        axios.get(`/api/threads/${this.props.match.params.id}`).then(res => {
            this.setState({ content: res.data
            });
            console.log("kevkev", this.state.content);
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
                    <h1>{item.replies}</h1>
                    <button className="btn btn-primary" onClick={() => this.upVote(item)} disabled={content[content.length - 1].notUser}>upvote</button>
                    <div>{this.totalVotes(item)}</div>
                    <button className="btn btn-primary active" onClick={() => this.downVote(item)} disabled={content[content.length - 1].notUser}>downvote</button>
                    <br></br>
                    <hr></hr>
                </div>
            )
        })
        return thread;
    }

    render() {
        return (
            <div>
                {this.threadContent()}
            </div>
        );
    }
}

export default JsThreadContent;