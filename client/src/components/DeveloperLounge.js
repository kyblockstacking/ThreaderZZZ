import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from 'moment';
import CreateAppointment from "./CreateAppointment";
class DeveloperLounge extends React.Component {
    state = {
        classes: [],
    };

    componentDidMount() {
        this.retrievePosts();
    }

    retrievePosts = () => {
        axios.get("/classes").then((res) => {
            this.setState({
                classes: res.data
            })
        })
    }

    renderMentorshipPost = () => {
        axios.get("/classes").then(response => {
            this.setState({ classes: response.data });
        })
    }

    render() {
        return (

            <div>
                <CreateAppointment userData={this.props.userData} renderMentorshipPost={this.renderMentorshipPost}/>
                {this.state.classes.map((item, iterator) => {
                    return (
                        <div 
                            key={iterator}
                            style={{
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
                            <span style={{ fontSize: "0.75em", color: "lightgray" }}><i className="far fa-clipboard">&nbsp;</i>Posted By: <Link to={`/api/profile/${item.User.userName}`}>{item.User.userName}</Link> at {moment(item.createdAt).fromNow()}</span>
                            <br></br>
                            <Link style={{ fontSize: "1.75em" }} to={`/mentorRequest/${item.id}`}>
                                {item.title}
                            </Link>
                            <br></br>

                        </div>
                    )
                })}

            </div>

        )
    }
}

export default DeveloperLounge;
