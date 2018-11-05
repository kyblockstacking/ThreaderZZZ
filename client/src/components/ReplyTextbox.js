import React, { Component } from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'
import "./codeBlock.css";
import axios from "axios";
import Modal from 'react-modal';

const submittedMessage = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        color: "#2e849e"
    }
};

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            showModal: false,
            ShowSubmitModal: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(value) {
        this.setState({ text: value })
        // this.props.onChange(this.state.text)
    }

    modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }, { 'align': 'center' }],
            ['link', 'image', 'video', 'code-block'],
        ],
    }
    formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent', 'align',
        'link', 'image', 'video', 'code-block'
    ]

    handleSubmit(e) {
        e.preventDefault();
        // On submit of the form, send a POST request with the data to the server.
        let createThread = {
            replies: this.state.text.replace("<p>", "").replace("</p>", ""),
            UserId: this.props.userData.id,
            ThreadId: this.props.threadId
        }

        axios.post('/comments/api/comments/', createThread)
            .then(function (response) {
                console.log("aidan did it");
                return response
            }).then(() => {
                this.setState({
                    ShowSubmitModal: true
                })
            })
    }

    render() {
        return (
            <div>
                <form>
                    <div className="text-editor" style={{ width: "80%", height: "200pt", margin: "0 auto" }}>
                        <br></br><br></br><br></br>
                        <ReactQuill value={this.state.text} theme="snow"
                            modules={this.modules}
                            style={{ width: "80%", height: "60%", margin: "0 auto" }}
                            formats={this.formats}
                            onChange={this.handleChange}>
                        </ReactQuill>
                        <div className="container">
                            <div style={{ marginTop: "0.5em", float: "right" }}>
                                <button type="submit" style={{ color: "white", background: "#2e849e", borderRadius: "10px", padding: "0.5em" }} onClick={this.handleSubmit} disabled={!this.props.authenticated}>Reply</button>
                            </div>
                        </div>

                        <Modal
                            isOpen={this.state.ShowSubmitModal}
                            style={submittedMessage}>
                            <span
                                style={{
                                    fontSize: "1.25em",
                                    cursor: "default",
                                    padding: "0 1.5em 0 1.5em"
                                }}
                            >Reply posted!</span>
                            <hr></hr>
                            <span
                                style={{
                                    border: "2px solid #2e849e",
                                    float: "right",
                                    borderRadius: "5px",
                                    fontSize: "0.85em",
                                    padding: "0.25em 0.5em 0.25em 0.5em",
                                    cursor: "pointer"
                                }}
                                onClick={() => {
                                    this.setState({ ShowSubmitModal: false })
                                }}>Close</span>
                        </Modal>

                    </div>
                </form>
            </div>
        );
    }
}
export default Editor;