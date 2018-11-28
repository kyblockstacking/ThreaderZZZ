import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

class Outbox extends Component {
  state = {
    outbox: [],
  };

  componentDidMount() {
    const { id } = this.props.userData;
    axios
      .get(`/emailout/${id}`)
      .then((response) => {
        this.setState({ outbox: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { outbox } = this.state;
    return outbox.map((email, iterator) => {
      return (
        <div
          key={iterator}
          style={{
            border: '2px dashed teal',
            padding: '1em',
            fontSize: '0.65em',
            borderRadius: '5px',
          }}
          className="container"
        >
          <p style={{ marginTop: '1em' }}>
            Sent to {email.recipient} {moment(email.createdAt).fromNow()}
          </p>
          <hr />
          <p  style={{ fontSize: '3em' }}>{email.title}</p>
          <br />
          <p>{email.message}</p>
        </div>
      );
    });
  }
}

export default Outbox;
