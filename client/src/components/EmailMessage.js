import React, { Component } from 'react';
import axios from 'axios';

class EmailMessage extends Component {
  state = {
    sender: this.props.userData.username,
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
    const { recipient, title, message } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="recipient">To:</label>
            <input
              type="text"
              className="form-control mb-1"
              id="recipient"
              aria-describedby="recipient"
              name="recipient"
              value={recipient}
              onChange={this.handleChange}
              required
            />

            <label htmlFor="title">Title:</label>
            <input
              type="text"
              className="form-control mb-1"
              id="title"
              aria-describedby="title"
              name="title"
              value={title}
              onChange={this.handleChange}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              class="form-control mb-1"
              id="message"
              rows="10"
              name="message"
              value={message}
              onChange={this.handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mb-5"
            style={{ backgroundColor: '#2e849e' }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default EmailMessage;
