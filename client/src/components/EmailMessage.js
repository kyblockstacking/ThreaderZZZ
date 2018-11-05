import React, { Component } from 'react';
import axios from 'axios';

class EmailMessage extends Component {
  state = {
    userId: '',
    recipient: '',
    title: '',
    message: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/emailout', { ...this.state })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { userId, recipient, title, message } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="userId">From</label>
            <input
              type="text"
              className="form-control"
              id="userId"
              aria-describedby="userId"
              name="userId"
              value={userId}
              onChange={this.handleChange}
            />

            <label htmlFor="recipient">To</label>
            <input
              type="text"
              className="form-control"
              id="recipient"
              aria-describedby="recipient"
              name="recipient"
              value={recipient}
              onChange={this.handleChange}
            />

            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="title"
              name="title"
              value={title}
              onChange={this.handleChange}
            />

            <label htmlFor="message">Message</label>
            <input
              type="text"
              className="form-control"
              id="message"
              aria-describedby="message"
              name="message"
              value={message}
              onChange={this.handleChange}
            />
            <text-area></text-area>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default EmailMessage;
