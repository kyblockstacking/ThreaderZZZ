import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Profile extends Component {
  state = {};

  componentDidMount() {
    axios
      .get(`/api/profile/${this.props.match.params.user}`)
      .then((response) => {
        this.setState(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const {
      firstName,
      lastName,
      userName,
      email,
      upvote,
      downvote,
    } = this.state;

    return (
      <div className="container" style={{marginTop: "10%", minHeight: "100vh"}}>
        <div className="card m-5">
          <div className="card-header">Profile</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Name: </strong>
              <div className="float-right">{`${firstName} ${lastName}`}</div>
            </li>
            <li className="list-group-item">
              <strong>Username: </strong>
              <div className="float-right">{userName}</div>
            </li>
            <li className="list-group-item">
              <strong>Email: </strong>
              <div className="float-right">{email}</div>
            </li>
            <li className="list-group-item">
              <strong>Points: </strong>
              <div className="float-right">{upvote - downvote}</div>
            </li>
          </ul>
          <Link to="/emailsystem">
            <button
              className="btn btn-primary"
              style={{ backgroundColor: 'teal' }}
            >
              Message {userName}
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Profile;
