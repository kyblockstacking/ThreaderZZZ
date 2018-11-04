import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

let style = {
  Component: {
    border: '2px solid #2e849e',
    background: '#c0c5ce',
    width: '90%',
    margin: 'auto',
    marginTop: '1em',
    marginBottom: '1em',
    padding: '20px',
    borderRadius: '10px',
  },
  SignIn: {
    float: 'right',
    color: '#2e849e',
    cursor: 'default',
  },
  button: {
    float: 'right',
    background: '#2e849e',
    color: 'white',
    padding: '5px 20px 5px 20px',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  inputBox: {
    float: 'right',
    borderRadius: '5px',
    fontStyle: 'italic',
  },
  forgotPassword: {
    float: 'right',
    fontSize: '10pt',
    cursor: 'pointer',
  },
  register: {
    float: 'right',
    fontSize: '10pt',
    cursor: 'pointer',
    marginRight: '3%',
  },
  banner: {
    height: '9em',
    width: '72%',
    float: 'left',
    borderRadius: '10px',
    border: '2px solid black',
  },
};

class SignIn extends React.Component {
  state = {
    userName: '',
    password: '',
    error: null,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  forgotPassword = () => {
    alert('haha, what a loser');
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { userName, password } = this.state;
    axios
      .post('/login', { userName, password })
      .then((response) => {
        if (response.data.loggedIn === true) {
          this.props.setLogin(response.data);
        } else {
          this.setState({
            error: "Username or password did not match",
          })
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { userName, password } = this.state;
    return (
      <div style={style.Component} className="SignInContainer">
        <img style={style.banner} src="/images/banner.jpg" alt="" />
        <form>
          <div style={style.SignIn}>
            Username &nbsp;
            <input
              style={style.inputBox}
              placeholder=" Username"
              name="userName"
              value={userName}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <br />
          <div style={style.SignIn}>
            Password &nbsp;
            <input
              type="password"
              style={style.inputBox}
              placeholder=" Password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <div>{this.state.error}</div>
          <br />
          <br />
          <a onClick={() => this.forgotPassword()} style={style.forgotPassword}>
            Forgot Password?
          </a>
          <strong>
            <Link style={style.register} to="/signup">Register</Link>
          </strong>
          <br />
          <button
            type="submit"
            style={style.button}
            onClick={this.handleSubmit}
          >
            Login
          </button>
          <br />
        </form>
      </div>
    );
  }
}

export default SignIn;
