import React from 'react';
import axios from 'axios';

let images = {
  javascript: '/images/javascript_logo.jpg',
  php: '/images/php_logo.png',
  python: '/images/python_logo.jpg',
};

let style = {
  forumCategory: {
    borderTopRightRadius: '10px',
    borderTopLeftRadius: '10px',
    padding: '15px',
    background: '#2e849e',
    color: 'white',
  },
};

class forumCategory extends React.Component {
  state = {
    Javascript_numberOfThreads: '',
    PHP_numberOfThreads: '',
    Python_numberOfThreads: '',
  };

  componentDidMount() {
    axios.get(`/api/realthreads`).then((res) => {
      console.log(res.data);
      this.setState({ Javascript_numberOfThreads: res.data[0].Threads.length });
      this.setState({ PHP_numberOfThreads: res.data[1].Threads.length });
      this.setState({ Python_numberOfThreads: res.data[2].Threads.length });
    });
  }

  render() {
    return (
      <div className="container">
        <div
          className="hello"
          style={{
            width: '60%',
            background: 'white',
            borderTopRightRadius: '10px',
            borderTopLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            borderBottomLeftRadius: '10px',
          }}
        >
          <div style={style.forumCategory}>Forum Categories</div>
          <div style={{ marginTop: '2%' }}>
            <img alt="logo" src={images.javascript} />
            <a href="/forum/javascript"> Enter Javascript Forum</a>
            <br />
            <span style={{ marginLeft: '11%' }}>
              <i className="fas fa-bed" /> Threadcount:{' '}
              {this.state.Javascript_numberOfThreads}
            </span>
            <hr />
          </div>

          <div>
            <img alt="logo" src={images.php} />
            <a href="/forum/PHP"> Enter PHP Forum</a>
            <br />
            <span style={{ marginLeft: '11%' }}>
              <i className="fas fa-bed" /> Threadcount:{' '}
              {this.state.PHP_numberOfThreads}
            </span>
            <hr />
          </div>

          <div>
            <img alt="logo" src={images.python} />
            <a href="/forum/Python"> Enter Python Forum</a>
            <br />
            <span style={{ marginLeft: '11%' }}>
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
      </div>
    );
  }
}

export default forumCategory;
