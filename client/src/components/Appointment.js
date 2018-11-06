import React from "react";
import axios from "axios";
import moment from "moment";
class Appointment extends React.Component {

    state = {
        user: "",
        title: "",
        userReqComment: "",
        time: "",
        mentorReplies: [],
        agreeTime: "",
        body: "",


    };

    componentDidMount() {
        axios.get(`/mentorRequest/${this.props.match.params.id}`).then((res) => {
            this.setState({
                user: res.data.User.userName,
                title: res.data.title,
                userReqComment: res.data.userReqComment,
                time: res.data.createdAt
            })
        }).then(() => {
            this.mentorApplicants();
        })
    }

    mentorCandidatePost = () => {
        let mentorReq = {
            body: this.state.body,
            agreeTime: this.state.agreeTime,
            UserId: this.props.userData.id,
            RequestMentorId: this.props.match.params.id
        }
        axios.post(`/mentorCandidate/${this.props.match.params.id}`, mentorReq).then((res) => {
            this.mentorApplicants();
        })
    }

    mentorApplicants = () => {
        axios.request(`/mentorBoxes/${this.props.match.params.id}`).then(data => {
            this.setState({ mentorReplies: data.data });
            console.log("almost", data.data);
        })
    }

    handleChange = (e) => {
        this.setState({ agreeTime: e.target.value })
    }

    textAreaChange = (e) => {
        this.setState({ body: e.target.value });
    }

    acceptMentor = (threadId, mentorName, appointmentTime) => {
        let data = {
            mentorName: mentorName,
            menteeName: this.props.userData.username,
            aptTime: appointmentTime
        }
        axios.post(`/acceptMentor/${threadId}`, data).then(() => {
            this.mentorApplicants();
        });
    }


    render() {
        return (
            <div style={{ margin: "1em 8em 1em 8em" }}>
                <div style={{ padding: "1em 2.5em 1em 2.5em" }}>
                    <span style={{ fontSize: "0.75em", color: "lightgray", padding: "1em 0 1em 0" }}><i className="far fa-clipboard">&nbsp;</i>Posted By: {this.state.user} at {moment(this.state.time).fromNow()}</span>
                    <div>
                        <span style={{ padding: "0.5em 0 0.5em 0", fontSize: "2em" }}>{this.state.title}</span>
                        <br></br>
                        <span style={{ padding: "1em 0 1em 0", fontSize: "1em" }}>{this.state.userReqComment}</span>
                    </div>
                    <div style={{ fontSize: "0.75em", color: "gray", padding: "0.5em 0 0.5em 0" }}>
                        <i className="far fa-share-square"></i>&nbsp;Share&nbsp;&nbsp;<i className="far fa-flag"></i>&nbsp;Report
                    </div>

                </div>
                <hr></hr>

                <p>By committing, you agree to mentor OP or else...</p>
                <div className="form-group">
                    <textarea onChange={this.textAreaChange} placeholder="Comment here" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div onChange={this.handleChange} className="form-group">
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
                <button type="Submit" onClick={this.mentorCandidatePost}>Submit</button>
                <hr />
                {this.state.mentorReplies.map(item => {
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
                        }}>
                            <span>Posted by: {item.User.userName} at {moment(item.createdAt).fromNow()}</span>
                            <p>{item.body}</p>
                            <button disabled={item.accepted} onClick={() => this.acceptMentor(item.id, item.User.userName, item.agreeTime)}>Accept</button>
                        </div>
                    )
                })}
            </div>
        );
    }
};

export default Appointment;