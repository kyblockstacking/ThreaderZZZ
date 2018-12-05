import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

let style = {
  Component: {
    border: '2px solid teal',
    background: '#c0c5ce',
    width: '90%',
    margin: 'auto',
    marginTop: '10%',
    marginBottom: '1em',
    padding: '20px',
    borderRadius: '10px',
  },
  SignIn: {
    color: 'teal',
    cursor: 'default',
  },
  button: {
    background: 'teal',
    color: 'white',
    padding: '5px 20px 5px 20px',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  inputBox: {
    borderRadius: '5px',
    fontStyle: 'italic',
  },
  forgotPassword: {
    fontSize: '10pt',
    cursor: 'pointer',
  },
  register: {
    fontSize: '10pt',
    cursor: 'pointer',
    marginRight: '3%',
  },
  banner: {
    height: '9em',
    width: '100%',
    float: 'left',
    borderRadius: '10px',
    border: '2px solid black',
  },
};

class SignIn extends React.Component {
  state = {
    userName: '',
    password: '',
    error: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  forgotPassword = () => {

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
            error: "Invalid username or password",
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
      <div style={style.Component} className="SignInContainer container">
        <div className="row" style={{textAlign: "center"}}>
          <div className="col-lg-8 col-md-6" align="center">
            <img style={style.banner} src="/images/banner.jpg" alt="" />
          </div>
          <div className="col-lg-4 col-md-6">
            <form style={{display: "inline-block"}} id="signInForm">
              <div style={style.SignIn}>
                Username: &nbsp;
                <input
                  style={style.inputBox}
                  placeholder=" Username"
                  name="userName"
                  value={userName}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <div style={style.SignIn}>
                Password: &nbsp;
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
        </div>
      </div>
    );
  }
}

export default SignIn;
