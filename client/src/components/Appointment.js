import React from "react";
import axios from "axios";

class Appointment extends React.Component {

    state = {
        user: "",
        title: "",
        body: "",
        time: "",
        mentorReplies: []
    };

    componentDidMount() {
        axios.get(`/mentorRequest/${this.props.match.params.id}`).then((res) => {
            this.setState({
                user: res.data.User.userName,
                title: res.data.title,
                body: res.data.body,
                time: res.data.createdAt
            })
        })
    }


    render() {
        return (
            <div style={{ margin: "1em 8em 1em 8em" }}>
                <div style={{ padding: "1em 2.5em 1em 2.5em" }}>
                    <span style={{ fontSize: "0.75em", color: "lightgray", padding: "1em 0 1em 0" }}><i className="far fa-clipboard">&nbsp;</i>Posted By: {this.state.user} at {this.state.time}</span>
                    <div>
                        <span style={{ padding: "0.5em 0 0.5em 0", fontSize: "2em" }}>{this.state.title}</span>
                        <br></br>
                        <span style={{ padding: "1em 0 1em 0", fontSize: "1em" }}>{this.state.body}</span>
                    </div>
                    <div style={{ fontSize: "0.75em", color: "gray", padding: "0.5em 0 0.5em 0" }}>
                        <i className="far fa-share-square"></i>&nbsp;Share&nbsp;&nbsp;<i className="far fa-flag"></i>&nbsp;Report
                    </div>

                </div>
                <hr></hr>

                <p>By committing, you agree to mentor OP or else...</p>
                <div className="form-group">
                    <textarea placeholder="Comment here" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div className="form-group">
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>Please select a time</option>
                        <option>10:00 am</option>
                        <option>10:30 am</option>
                        <option>11:00 am</option>
                        <option>11:30 am</option>
                        <option>12:00 pm</option>
                        <option>12:30 pm</option>
                        <option>1:00 pm</option>
                    </select>
                </div>

            </div>
        );
    }
};

export default Appointment;