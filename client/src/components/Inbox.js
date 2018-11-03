import React from "react";
import axios from "axios";

class Inbox extends React.Component {
    state = {};

    componentDidMount() {
        //hardcode 
        var user = "kaydo"
        axios.get(`/emailin/${user}`).then((res) => {
            console.log(res)
        })
    }

    render() {
        return (
            <div style={{ margin: "2% 50% 2% 2%", border: "2px dashed #2e849e", padding: "1em", fontSize: "0.65em", borderRadius: "5px" }}>
                <p style={{ marginTop: "1em" }}>Sent by USER at TIME</p>
                <hr></hr>
                <h6>INBOX Message title</h6>
                <br></br>
                <p>RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE RECIEVED MESSAGE </p>
            </div>
        )
    }

}

export default Inbox;