import React, { Component } from 'react';
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
      <div className="container">
        <div className="card m-5">
          <div className="card-header">Profile</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Name: </strong>
              {`${firstName} ${lastName}`}
            </li>
            <li className="list-group-item">
              <strong>Username: </strong>
              {userName}
            </li>
            <li className="list-group-item">
              <strong>Email: </strong>
              {email}
            </li>
            <li className="list-group-item">
              <strong>Points: </strong>
              {upvote - downvote}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;
