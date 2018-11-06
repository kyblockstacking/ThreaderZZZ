import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Modal from 'react-modal';

const submittedMessage = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        color: "#2e849e"
    }
};

class Appointment extends React.Component {

    state = {
        user: "",
        title: "",
        userReqComment: "",
        time: "",
        mentorReplies: [],
        agreeTime: "",
        body: "",
        ShowAcceptAptModal: false,
        MentorSubmit: false
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
        }).then(() => {
            this.setState({
                MentorSubmit: true
            })
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
        }).then(() => {
            this.setState({
                ShowAcceptAptModal: true
            })
        });
    }


    render() {
        return (
            <div style={{ margin: "1em 8em 1em 8em" }}>
                <div style={{ padding: "1em 2.5em 1em 2.5em" }}>
                    <span style={{ fontSize: "0.75em", color: "lightgray", padding: "1em 0 1em 0" }}><i className="far fa-clipboard">&nbsp;</i>Posted By: <Link to={`/api/profile/${this.state.user}`}>{this.state.user}</Link> {moment(this.state.time).fromNow()}</span>
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




                {this.props.userData.admin ? 
                    <div>
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
                    </div>
                : <p>You are not a Mentor. Access Denied</p>}
                








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
                            <span style={{ fontSize: "0.75em", color: "gray" }}>Posted by: <Link to={`/api/profile/${item.User.userName}`}>{item.User.userName}</Link> {moment(item.createdAt).fromNow()}</span>
                            <p>{item.body}</p>
                            <br></br>
                            <button disabled={item.accepted} onClick={() => this.acceptMentor(item.id, item.User.userName, item.agreeTime)}>Accept</button>&nbsp;<span style={{ color: "teal" }}>[{item.agreeTime}]</span>
                        </div>
                    )
                })}

                <Modal
                    isOpen={this.state.ShowAcceptAptModal}
                    style={submittedMessage}>
                    <span
                        style={{
                            fontSize: "1.25em",
                            cursor: "default"
                        }}
                    >You have accepted this appointment. Please check your inbox for more information.&nbsp;<i className="fas fa-inbox"></i></span>
                    <hr></hr>
                    <span
                        style={{
                            border: "2px solid #2e849e",
                            float: "right",
                            borderRadius: "5px",
                            fontSize: "0.85em",
                            padding: "0.25em 0.5em 0.25em 0.5em",
                            cursor: "pointer"
                        }}
                        onClick={() => {
                            this.setState({ ShowAcceptAptModal: false })
                        }}>Close</span>
                </Modal>

                <Modal
                    isOpen={this.state.MentorSubmit}
                    style={submittedMessage}>
                    <span
                        style={{
                            fontSize: "1.25em",
                            cursor: "default"
                        }}
                    >Thank you for mentoring! Your request has been posted.&nbsp;<i className="fas fa-chalkboard-teacher"></i></span>
                    <hr></hr>
                    <span
                        style={{
                            border: "2px solid #2e849e",
                            float: "right",
                            borderRadius: "5px",
                            fontSize: "0.85em",
                            padding: "0.25em 0.5em 0.25em 0.5em",
                            cursor: "pointer"
                        }}
                        onClick={() => {
                            this.setState({ MentorSubmit: false })
                        }}>Close</span>
                </Modal>
            </div>
        );
    }
};

export default Appointment;