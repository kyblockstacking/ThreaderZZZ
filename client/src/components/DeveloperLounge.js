import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class DeveloperLounge extends React.Component {
  state = {};

  render() {
    return (
      <div
        style={{
          width: '60%',
          background: 'white',
          borderTopRightRadius: '10px',
          borderTopLeftRadius: '10px',
          borderBottomRightRadius: '10px',
          borderBottomLeftRadius: '10px',
          marginBottom: '1em',
          marginLeft: 'auto',
          marginRight: 'auto',
          border: '2px solid #2e849e',
          padding: '1em',
        }}
      >
        <span style={{ fontSize: '0.75em', color: 'lightgray' }}>
          <i className="far fa-clipboard">&nbsp;</i>
          Posted By: !USER! {moment().fromNow()}
        </span>
        <br />
        <Link style={{ fontSize: '1.75em' }} to={`/forum/category/thread`}>
          Help me with react.js
        </Link>
        <br />
      </div>
    );
  }
}

export default DeveloperLounge;
