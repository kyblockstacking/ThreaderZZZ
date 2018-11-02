import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

let images = {
  javascript: '/images/javascript_logo.jpg',
  php: '/images/php_logo.png',
  python: '/images/python_logo.jpg',
};

let style = {
  forum: {
    borderTopRightRadius: '10px',
    borderTopLeftRadius: '10px',
    padding: '15px',
    background: '#2e849e',
    color: 'white',
  },
};

class forum extends React.Component {
  state = {
    Javascript_numberOfThreads: '',
    PHP_numberOfThreads: '',
    Python_numberOfThreads: '',
  };

  componentDidMount() {
    axios.get("/threadCount").then((res) => {
      this.setState(res.data[0] ? { Javascript_numberOfThreads: res.data[0].Threads.length } : {});
      this.setState(res.data[1] ? { PHP_numberOfThreads: res.data[1].Threads.length } : {});
      this.setState(res.data[2] ? { Python_numberOfThreads: res.data[2].Threads.length } : {});
    });
  }

  render() {
    return (
      <div className="container">
        <div
          className="hello"
          style={{
            width: '100%',
            background: 'white',
            borderTopRightRadius: '10px',
            borderTopLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            borderBottomLeftRadius: '10px',
          }}
        >
          <div style={style.forum}>Forum Categories</div>
          <div style={{ marginTop: '2%' }}>
            <img style={{ paddingLeft: "1em", paddingRight: "1em" }} alt="logo" src={images.javascript} />
            <Link style={{ fontSize: "1.5em" }} to="/forum/1">Enter Javascript Forum</Link>
            <br />
            <span style={{ marginLeft: '9%', color: "#65737e", cursor: "default" }}>
              <i className="fas fa-bed" /> Threadcount:{' '}
              {this.state.Javascript_numberOfThreads}
            </span>
            <hr />
          </div>

          <div>
            <img style={{ paddingLeft: "1em", paddingRight: "1em" }} alt="logo" src={images.php} />
            <Link style={{ fontSize: "1.5em" }} to="/forum/2">Enter PHP Forum</Link>
            <br />
            <span style={{ marginLeft: '9%', color: "#65737e", cursor: "default" }}>
              <i className="fas fa-bed" /> Threadcount:{' '}
              {this.state.PHP_numberOfThreads}
            </span>
            <hr />
          </div>

          <div>
            <img style={{ paddingLeft: "1em", paddingRight: "1em" }} alt="logo" src={images.python} />
            <Link style={{ fontSize: "1.5em" }} to="/forum/3">Enter Python Forum</Link>
            <br />
            <span style={{ marginLeft: '9%', color: "#65737e", cursor: "default" }}>
              <i className="fas fa-bed" /> Threadcount:{' '}
              {this.state.Python_numberOfThreads}
            </span>
          </div>
          <div
            style={{
              background: '#2e849e',
              padding: '15px',
              borderBottomRightRadius: '10px',
              borderBottomLeftRadius: '10px',
              marginBottom: "1em"
            }}
          />
        </div>
      </div >
    );
  }
}

export default forum;
