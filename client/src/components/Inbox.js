import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

class Inbox extends Component {
  state = {
    inbox: [],
  };

  componentDidMount() {
    const { username } = this.props.userData;
    axios
      .get(`/emailin/${username}`)
      .then((response) => {
        this.setState({ inbox: response.data });
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
    const { inbox } = this.state;
    return inbox.map((email, iterator) => {
      return (
        <div
          key={iterator}
          onClick={() => this.handleClick(email.id, email.recipient)}
          style={{
            border: '2px dashed teal',
            padding: '1em',
            fontSize: '0.65em',
            borderRadius: '5px',
          }}
          className="container"
        >
          <p style={{ marginTop: '1em' }}>
            Sent by {email.User.userName} {moment(email.createdAt).fromNow()}
          </p>
          <hr />
          {email.userRead === false ? (
            <p style={{ fontWeight: 'bold', fontSize: '3em' }}>{email.title}</p>
          ) : (
            <p style={{ fontSize: '3em' }}>{email.title}</p>
          )}
          <br />
          <p>{email.message}</p>
          <a href={email.chatLink ? email.chatLink : null}>{email.chatLink ? email.chatLink : null}</a>
        </div>
      );
    });
  }
}

export default Inbox;
