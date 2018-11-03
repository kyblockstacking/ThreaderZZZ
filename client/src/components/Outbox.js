import React from "react";
import axios from "axios";

class Outbox extends React.Component {
    state = {};

    componentDidMount() {

    }

    render() {
        return (
            <div style={{ margin: "2% 50% 2% 2%", border: "2px dashed #2e849e", padding: "1em", fontSize: "0.65em", borderRadius: "5px" }}>
                <p style={{ marginTop: "1em" }}>Sent to USER at TIME</p>
                <hr></hr>
                <h6>OUTBOX Message title</h6>
                <br></br>
                <p>SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE SENT MESSAGE </p>
            </div>
        )
    }

}

export default Outbox;