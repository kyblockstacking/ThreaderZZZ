import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

class Inbox extends Component {
  state = {
    inbox: [],
  };

  componentDidMount() {
    const { username } = this.props.userData;
    axios
      .get(`/emailin/${username}`)
      .then((response) => {
        this.setState({ inbox: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleClick = (id, recipient) => {
    axios
      .put(`/email/read/${id}`)
      .then(() => {
        axios
          .get(`/emailin/${recipient}`)
          .then((response) => {
            this.setState({ inbox: response.data });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const tableStyle = {
        width: "100%"
    };
    const sideBar = {
        height: "100vh",
        backgroundColor: "black",
        borderRadius: "15px 50px 30px"
    }
    const aLink = {
        textAlign: "center",
        display: "flex",
        flexDirection: "column"
    }
    const { inbox } = this.state;

    <div>
        hey baby
    </div>
    return inbox.map((email, iterator) => {
      return (
        <div
          key={iterator}
          onClick={() => this.handleClick(email.id, email.recipient)}
          style={{
            border: '2px dashed #2e849e',
            padding: '1em',
            fontSize: '0.65em',
            borderRadius: '5px',
          }}
          className="container"
        >
          <p style={{ marginTop: '1em' }}>
            Sent by {email.User.userName} {moment(email.createdAt).fromNow()}
          </p>
          <hr />
          {email.userRead === false ? (
            <p style={{ fontWeight: 'bold', fontSize: '3em' }}>{email.title}</p>
          ) : (
            <p style={{ fontSize: '3em' }}>{email.title}</p>
          )}
          <br />
          <p>{email.message}</p>
          <a href={email.chatLink ? email.chatLink : null}>{email.chatLink ? email.chatLink : null}</a>
        </div>
      );
    });
  }
}

export default Inbox;



// class EmailSystem extends Component {
//     state = {
//       inbox: [],
//     };

   

//     render () {
//         const tableStyle = {
//             width: "100%"
//         };
//         const sideBar = {
//             height: "100vh",
//             backgroundColor: "black",
//             borderRadius: "15px 50px 30px"
//         }
//         // const emailRow = {
//         //     // backgroundColor: "white",
//         //     &:hover {
//         //         backgroundColor: "yellow"
//         //     }
//         // }
//         const aLink = {
//             textAlign: "center",
//             display: "flex",
//             flexDirection: "column"
//         }
//         return (
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-lg-2" style={sideBar}>
//                         <a style={aLink} href="#">inbox</a>
//                         <br />
//                         <a style={aLink} href="#">outbox</a>
//                         <br />
//                         <a style={aLink} href="#">delete</a>
//                         <br />
//                         <a style={aLink} href="#">trash</a>
//                         <br />
//                     </div>
//                     <div className="col-lg-10">
//                         <div className="row">
//                             <table style={tableStyle}>
//                                 <tr id="emailRow">
//                                     <input type="checkbox" /> kjhlkhkljjh
//                                 </tr>
//                                 <tr id="emailRow">
//                                     <input type="checkbox" /> kjhlkhkljjh
//                                 </tr>
//                                 <tr id="emailRow">
//                                     <input type="checkbox" /> kjhlkhkljjh
//                                 </tr>
//                                 <tr id="emailRow">
//                                     <input type="checkbox" /> kjhlkhkljjh
//                                 </tr>
//                                 <tr id="emailRow">
//                                     <input type="checkbox" /> kjhlkhkljjh
//                                 </tr>
//                                 <tr id="emailRow">
//                                     <input type="checkbox" /> kjhlkhkljjh
//                                 </tr>
//                                 <tr id="emailRow">
//                                     <input type="checkbox" /> kjhlkhkljjh
//                                 </tr>
//                                 <tr id="emailRow">
//                                     <input type="checkbox" /> kjhlkhkljjh
//                                 </tr>
//                                 <tr id="emailRow">
//                                     <input type="checkbox" /> kjhlkhkljjh
//                                 </tr>
//                                 <tr id="emailRow">
//                                     <input type="checkbox" /> kjhlkhkljjh
//                                 </tr>
//                                 <tr id="emailRow">
//                                     <input type="checkbox" /> kjhlkhkljjh
//                                 </tr>

//                             </table>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         )
//     }
// }

// export default EmailSystem;