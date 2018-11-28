import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

class EmailSystem extends Component {
    state = {
        inbox: [],
    };

    componentDidMount() {
        this.retrieveEmail();
    }

    deleteEmail = (id) => {
        axios
            .delete(`/delete/email/${id}`)
            .then(response => {
                this.retrieveEmail();
            })
    }

    retrieveEmail = () => {
        const { username } = this.props.userData;
        axios
            .get(`/emailin/${username}`)
            .then((response) => {
                this.setState({ inbox: response.data });
                console.log(this.state.inbox)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleClick = (id, recipient) => {
        axios
            .put(`/email/read/${id}`)
            .then(() => {
                axios
                    .get(`/emailin/${recipient}`)
                    .then((response) => {
                        this.setState({ inbox: response.data });
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        const sideBar = {
            height: "100vh",
            backgroundColor: "rgb(46, 132, 158)",
            borderRadius: "0px 30px 0px 0px"
        }
        const aLink = {
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            color: "white"
        }
        const emailIcon = {
            fontSize: "22px"
        }

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2" style={sideBar}>
                        <br />
                        <row style={aLink}>
                            <i class="fas fa-pen" style={emailIcon}>&nbsp;</i><a style={aLink} href="/emailsystem">Compose</a>
                        </row>
                        <br />
                        <row style={aLink}>
                            <i className="fas fa-inbox" style={emailIcon}>&nbsp;</i> <a style={aLink} href="/email/inbox">Inbox</a>
                        </row>
                        <br />
                        <row style={aLink}>
                            <i className="far fa-share-square" style={emailIcon}>&nbsp;</i><a style={aLink} href="/email/outbox">Sent</a>
                        </row>
                        <br />
                        <row style={aLink}>
                            <i class="fas fa-exclamation-circle" style={emailIcon}>&nbsp;</i><a style={aLink} href="#">Spam</a>
                        </row>
                        <br />
                        <row style={aLink}>
                            <i class="fas fa-backspace" style={emailIcon}>&nbsp;</i><a style={aLink} href="#">Delete</a>
                        </row>
                        <br />
                        <row style={aLink}>
                            <i class="fas fa-trash" style={emailIcon}>&nbsp;</i><a style={aLink} href="#">Trash</a>
                        </row>
                        <br />
                    </div>
                    <div className="col-lg-10 mainEmail">
                        {this.state.inbox.map(item => {
                            return (
                                <div>
                                    {item.userRead === false ?
                                        <div className="row emailRow" onClick={() => this.handleClick(item.id, item.recipient)}>
                                            <div className="col-lg-1">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="col-lg-2" style={{ fontWeight: 'bold' }}>
                                                {item.User.userName}
                                            </div>
                                            <div className="col-lg-7 emailContent" style={{ fontWeight: 'bold' }}>
                                                {item.title}
                                                : &nbsp;
                                                {item.message}
                                            </div>
                                            <div className="col-lg-2" style={{ fontWeight: 'bold' }}>
                                                {moment(item.createdAt).calendar()}
                                            </div>
                                        </div>
                                        :
                                        <div className="row emailRow" onClick={() => this.handleClick(item.id, item.recipient)}>
                                            <div className="col-lg-1">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="col-lg-2">
                                                {item.User.userName}
                                            </div>
                                            <div className="col-lg-7 emailContent">
                                                {item.title}
                                                : &nbsp;
                                                {item.message}
                                            </div>
                                            <div className="col-lg-2">
                                                {moment(item.createdAt).calendar()}
                                            </div>
                                        </div>
                                    }
                                </div>
                            )
                        })
                        }
                    </div>
                </div>

            </div>
        )
    }
}

export default EmailSystem;