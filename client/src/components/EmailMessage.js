import React, { Component } from 'react';
import axios from 'axios';
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

class EmailMessage extends Component {
  state = {
    UserId: this.props.userData.id,
    sender: this.props.userData.username,
    recipient: '',
    title: '',
    message: '',
    ShowEmailModal: false,
  };

  constructor(props) {
    super(props);
    this.initialState = {
      UserId: this.props.userData.id,
      sender: this.props.userData.username,
      recipient: '',
      title: '',
      message: '',
    };
    this.state = this.initialState;
  }

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
      .catch((error) => {
        console.log(error);
      });
    this.setState(this.initialState);
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
              name="title"
              value={title}
              onChange={this.handleChange}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              className="form-control mb-1"
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
            onClick={() => {
              this.setState({
                ShowEmailModal: true
              })
            }}
          >
            Submit
          </button>
        </form>

        <Modal
          isOpen={this.state.ShowEmailModal}
          style={submittedMessage}>
          <span
            style={{
              fontSize: "1.25em",
              cursor: "default",
              padding: "0 1.5em 0 1.5em"
            }}
          >Email Sent&nbsp;<i className="fas fa-plane-departure"></i></span>
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
              this.setState({ ShowEmailModal: false })
            }}>Close</span>
        </Modal>

      </div>
    );
  }
}
export default EmailMessage;
