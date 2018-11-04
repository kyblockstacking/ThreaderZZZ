import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CreateThread from "./CreateThread"

class EmailMessage extends React.Component {
    state = {
        UserId: "",
        recipient: "",
        title: "",
        message: ""
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        this.setState(() => ({
            [name]: value
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        axios({
            url: "/emailout",
            method: "POST",
            data: { ...this.state }
        })
            .then((data) => {
                this.setState(() => ({
                    UserId: "",
                    recipient: "",
                    title: "",
                    message: ""
                }));
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="UserId">From</label>
                        <input name="UserId" type="text" className="form-control" id="UserId" aria-describedby="UserId" onChange={this.handleInputChange} value={this.state.UserId} />

                        <label htmlFor="recipient">To</label>
                        <input name="recipient" type="text" className="form-control" id="recipient" aria-describedby="recipient" onChange={this.handleInputChange} value={this.state.recipient} />

                          <label htmlFor="title">Title</label>
                        <input name="title" type="text" className="form-control" id="title" aria-describedby="title" onChange={this.handleInputChange} value={this.state.title} />

                        <label htmlFor="message">Message</label>
                        <input name="message" type="text" className="form-control" id="message" aria-describedby="message" onChange={this.handleInputChange} value={this.state.message} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
export default EmailMessage;