import React from "react";
import axios from "axios";

let style = {
    threadQuestions: {
        borderTopRightRadius: "10px",
        borderTopLeftRadius: "10px",
        padding: "15px",
        background: "#2e849e",
        color: "white",
        marginBottom: "1em"
    }
}

class JsThreadContent extends React.Component {
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
                    <button className="btn btn-primary active" onClick={() => this.upVote(item)} disabled={content[content.length - 1].notUser}><i class="fas fa-chevron-up"></i></button>
                    <div>{this.totalVotes(item)}&nbsp;&nbsp;{item.replies}</div>
                    <button className="btn btn-primary active" onClick={() => this.downVote(item)} disabled={content[content.length - 1].notUser}><i class="fas fa-chevron-down"></i></button>
                    <br></br>
                    <hr></hr>
                </div>
            )
        })
        return thread;
    }

    render() {
        return (
            <div style={{ margin: "5%" }}>
                <div style={style.threadQuestions}>Thread Questions</div>
                {this.threadContent()}

                <div style={{ background: "#2e849e", padding: "20px", borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px", marginBottom: "2%" }}></div>

            </div >
        );
    }
}

export default JsThreadContent;