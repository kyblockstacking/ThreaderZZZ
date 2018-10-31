import React, { Component } from 'react';
import axios from 'axios';

const styles = {
  small: {
    color: 'red',
  },
  fixed: {
    height: '10px',
  },
};

class Signup extends Component {
  state = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    isFirstNameValid: true,
    isLastNameValid: true,
    isUserNameValid: true,
    isEmailValid: true,
    isPasswordValid: true,
    isConfirmPasswordValid: true,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleValidation = () => {
    const {
      firstName,
      lastName,
      userName,
      email,
      password,
      confirmPassword,
    } = this.state;

    if (firstName.match(/./)) {
      this.setState({ isFirstNameValid: true });
    } else {
      this.setState({ isFirstNameValid: false });
    }
    if (lastName.match(/./)) {
      this.setState({ isLastNameValid: true });
    } else {
      this.setState({ isLastNameValid: false });
    }
    if (userName.match(/.{4,12}/)) {
      this.setState({ isUserNameValid: true });
    } else {
      this.setState({ isUserNameValid: false });
    }
    if (
      email.match(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
    ) {
      this.setState({ isEmailValid: true });
    } else {
      this.setState({ isEmailValid: false });
    }
    if (
      password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      )
    ) {
      this.setState({ isPasswordValid: true });
    } else {
      this.setState({ isPasswordValid: false });
    }
    if (confirmPassword === password) {
      this.setState({ isConfirmPasswordValid: true });
    } else {
      this.setState({ isConfirmPasswordValid: false });
    }
  };

  handleSubmit = (event) => {
    const {
      firstName,
      lastName,
      userName,
      email,
      password,
      confirmPassword,
    } = this.state;

    event.preventDefault();
    this.handleValidation();

    if (
      firstName.match(/./) &&
      lastName.match(/./) &&
      userName.match(/.{4,12}/) &&
      email.match(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/) &&
      password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      ) &&
      confirmPassword === password
    ) {
      axios
        .post('/api/signup', { firstName, lastName, userName, email, password })
        .then((response) => {
          if (response.data) {
            console.log('Account created');
          } else {
            console.log('There was a problem creating your account');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    const {
      firstName,
      lastName,
      userName,
      email,
      password,
      confirmPassword,
      isFirstNameValid,
      isLastNameValid,
      isUserNameValid,
      isEmailValid,
      isPasswordValid,
      isConfirmPasswordValid,
    } = this.state;

    return (
      <div className="container">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              id="firstName"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={this.handleChange}
            />
            <div style={styles.fixed}>
              {isFirstNameValid === false ? (
                <small style={styles.small}>First Name is required</small>
              ) : null}
            </div>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              id="lastName"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
            />
            <div style={styles.fixed}>
              {isLastNameValid === false ? (
                <small style={styles.small}>Last Name is required</small>
              ) : null}
            </div>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              id="userName"
              placeholder="Username"
              name="userName"
              value={userName}
              onChange={this.handleChange}
              data-toggle="tooltip"
              data-placement="left"
              title="Username must be at least 4 characters in length"
            />
            <div style={styles.fixed}>
              {isUserNameValid === false ? (
                <small style={styles.small}>Username is invalid</small>
              ) : null}
            </div>
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <div style={styles.fixed}>
              {isEmailValid === false ? (
                <small style={styles.small}>Email is invalid</small>
              ) : null}
            </div>
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control form-control-lg"
              id="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.handleChange}
              data-toggle="tooltip"
              data-placement="left"
              data-html="true"
              title="Password must be at least 8 characters in length and include one each of the following: uppercase, lowercase, number, special character"
            />
            <div style={styles.fixed}>
              {isPasswordValid === false ? (
                <small style={styles.small}>Password is invalid</small>
              ) : null}
            </div>
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control form-control-lg"
              id="confirmPassword"
              placeholder=" Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
            />
            <div style={styles.fixed}>
              {isConfirmPasswordValid === false ? (
                <small style={styles.small}>Passwords must match</small>
              ) : null}
            </div>
          </div>

          <button
            type="button"
            value="Submit"
            className="btn btn-lg btn-primary"
            onClick={this.handleSubmit}
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
