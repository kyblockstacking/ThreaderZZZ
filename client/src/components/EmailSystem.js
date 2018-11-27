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

    render() {
        const tableStyle = {
            width: "100%"
        };
        const sideBar = {
            height: "100vh",
            backgroundColor: "rgb(46, 132, 158)",
            borderRadius: "15px 50px 30px"
        }
        const aLink = {
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            color: "white"
        }
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2" style={sideBar}>
                        <a style={aLink} href="/emailsystem">Compose</a>
                        <br />
                        <a style={aLink} href="/email/inbox"><i className="fas fa-inbox">Inbox</i></a>
                        <br />
                        <a style={aLink} href="/email/outbox"><i className="far fa-share-square">Sent</i></a>
                        <br />
                        <a style={aLink} href="#">Spam</a>
                        <br />
                        <a style={aLink} href="#">Delete</a>
                        <br />
                        <a style={aLink} href="#">Trash</a>
                        <br />
                    </div>
                    <div className="col-lg-10">
                        <div className="row">
                            <table style={tableStyle}>
                                {this.state.inbox.map(item => {
                                    return (
                                        <div>
                                            {item.userRead === false ?
                                                <tr id="emailRow">
                                                    <td>
                                                        <input type="checkbox" />
                                                    </td>
                                                    <td style={{ fontWeight: 'bold' }}>
                                                        {moment(item.createdAt).fromNow()}
                                                    </td>

                                                    <td style={{ fontWeight: 'bold' }}>
                                                        {item.User.userName}
                                                    </td>


                                                    <td style={{ fontWeight: 'bold' }}>
                                                        {item.title}
                                                    </td>

                                                    <td>
                                                        <i id="emailRead" class="fa fa-envelope-open"></i>
                                                    </td>
                                                    <td>
                                                        <button onClick={() => { this.deleteEmail(item.id) }}>
                                                            <i class="fa fa-trash" alt="mark as read"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                :
                                                <tr id="emailRow">
                                                    <td>
                                                        <input type="checkbox" />
                                                    </td>
                                                    <td>
                                                        {moment(item.createdAt).fromNow()}
                                                    </td>

                                                    <td>
                                                        {item.User.userName}
                                                    </td>


                                                    <td>
                                                        {item.title}
                                                    </td>

                                                    <td>
                                                        <i id="emailRead" class="fa fa-envelope-open"></i>
                                                    </td>
                                                    <td>
                                                        <button onClick={() => { this.deleteEmail(item.id) }}>
                                                            <i class="fa fa-trash" alt="mark as read"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            }
                                        </div>
                                    )
                                })
                                }
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default EmailSystem;