import React from "react";
import axios from "axios";
import moment from 'moment';

class Outbox extends React.Component {
    state = {
        outbox: []
    };

    componentDidMount() {
        //hardcode 
        var user = 1
        axios.get(`/emailout/${user}`)
        .then((res) => {
            this.setState({ outbox: res.data });
        }).then( () => {
            console.log(this.state.outbox);
        })
    }

    render() {
        return (
            this.state.outbox.map(item => {
                return (
                <div style={{ margin: "2% 50% 2% 2%", border: "2px dashed #2e849e", padding: "1em", fontSize: "0.65em", borderRadius: "5px" }}>
                    <p style={{ marginTop: "1em" }}>Sent to {item.recipient} {moment(item.createdAt).fromNow()}</p>
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

export default Outbox;