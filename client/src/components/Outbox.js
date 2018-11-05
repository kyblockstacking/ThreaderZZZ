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
            margin: '2% 50% 2% 2%',
            border: '2px dashed #2e849e',
            padding: '1em',
            fontSize: '0.65em',
            borderRadius: '5px',
          }}
        >
          <p style={{ marginTop: '1em' }}>
            Sent to {email.recipient} {moment(email.createdAt).fromNow()}
          </p>
          <hr />
          <h6>{email.title}</h6>
          <br />
          <p>{email.message}</p>
        </div>
      );
    });
  }
}

export default Outbox;
