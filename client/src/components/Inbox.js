import React from "react";
import axios from "axios";

class Inbox extends React.Component {
    state = {
        inbox: []
    };

    componentDidMount() {
        //hardcode 
        var user = "kaydo"
        axios.get(`/emailin/${user}`)
        .then((res) => {
            this.setState({ inbox: res.data });
        }).then( () => {
            console.log(this.state.inbox);
        })
    }

    render() {
        return (
            this.state.inbox.map(item => {
                return (
                <div style={{ margin: "2% 50% 2% 2%", border: "2px dashed #2e849e", padding: "1em", fontSize: "0.65em", borderRadius: "5px" }}>
                    <p style={{ marginTop: "1em" }}>Sent by {item.User.userName} at {item.createdAt}</p>
                    <hr></hr>
                    <h6>{item.title}</h6>
                    <br></br>
                    <p>{item.message}</p>
                </div>
                )
            })

        )
    }

}

export default Inbox;