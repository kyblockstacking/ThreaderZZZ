import React from 'react';
import axios from 'axios';

let style = {
  Component: {
    border: '2px solid #2e849e',
    background: '#dedede',
    width: '90%',
    margin: 'auto',
    marginTop: '1em',
    marginBottom: '1em',
    padding: '20px',
    borderRadius: '10px',
    height: '190px',
  },
  button: {
    float: 'right',
    background: '#2e849e',
    color: 'white',
    padding: '5px 20px 5px 20px',
    borderRadius: '10px',
    cursor: 'pointer',
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
    userData: {},
  };

  componentDidMount() {
    axios.get('/auth').then((res) => {
      this.setState({
        userData: res.data,
      });
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get('/logout')
      .then((response) => {
        this.props.setLogin(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div style={style.Component} className="SignInContainer">
        <img style={style.banner} src="/images/banner.jpg" alt="" />
        <form>
          <div style={style.SignIn}>
            {`Welcome back ${this.state.userData.firstName}`}
          </div>
          <button
            type="submit"
            style={style.button}
            onClick={this.handleSubmit}
          >
            Logout
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
