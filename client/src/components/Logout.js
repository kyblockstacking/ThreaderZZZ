import React from 'react';
import axios from 'axios';

let style = {
  Component: {
    border: '2px solid teal',
    background: '#dedede',
    width: '90%',
    margin: 'auto',
    marginTop: '10%',
    marginBottom: '1em',
    padding: '20px',
    borderRadius: '10px'
  },
  button: {
    background: 'teal',
    color: 'white',
    padding: '5px 20px 5px 20px',
    borderRadius: '10px',
    cursor: 'pointer',
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
        this.props.setLogout(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div style={style.Component} className="SignInContainer container">
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-lg-8 col-md-8" align="center">
            <img style={style.banner} src="/images/banner.jpg" alt="" />
          </div>
          <div className="col-lg-4 col-md-4">
            <form style={{ display: "inline-block" }} id="signInForm">
              <div style={style.SignIn}>
                {`Welcome ${this.state.userData.firstName}`}
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
        </div>

      </div>
    );
  }
}

export default SignIn;
