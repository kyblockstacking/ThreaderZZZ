import React, { Component } from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'
import "./codeBlock.css";
import Modal from 'react-modal';
import axios from "axios";


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

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: "",
            showModal: false,
            ShowSubmitModal: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal(e) {
        e.preventDefault();
        this.setState({ showModal: true });
    }
    handleCloseModal() {
        this.setState({ showModal: false });
    }
    updateInput(event) {
        this.setState({ title: event.target.value })
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
            threadName: this.state.title,
            threadSummary: this.state.text.replace("<p>", "").replace("</p>", ""),
            CategoryId: this.props.categoryId,
            UserId: this.props.userData.id
        }

        axios.post('/threads/api/threads/', createThread)
            .then(function (response) {
                return response
            }).then(() => {
                this.handleCloseModal()
            }).then(() => {
                setTimeout(this.kevin, 200)
            }).then(() => {
                this.props.updateThreadsArray(this.props.categoryId);
            })
    }

    kevin = () => {
        this.setState({ ShowSubmitModal: true })
    }

    render() {
        let disableButton = false
        if (this.state.title === "") {
            disableButton = true
        }
        return (
            <div>
                <form>
                    <div className="text-editor" style={{ marginBottom: "1em", marginLeft: "43%" }}>
                        <span style={{ background: "white", color: "#2e849e", padding: "6px 30px 6px 30px", borderRadius: "10px", cursor: "pointer", border: "2px solid #2e849e" }} onClick={this.handleOpenModal}>Create New Thread</span>
                        <Modal
                            isOpen={this.state.showModal}
                            contentLabel="Minimal Modal Example">
                            <i style={{ color: "red", marginLeft: "80%", fontSize: "1.5em" }}
                                onClick={this.handleCloseModal}
                                className="fas fa-times-circle"></i>
                            <div
                                style={{ marginLeft: "33%", fontSize: "2em" }}>
                                CREATE A NEW THREAD
                            </div>
                            <br></br>
                            <form>
                                <input style={{ width: "60%", marginLeft: "20%" }} type="text" placeholder=" Thread Title" onChange={this.updateInput}></input>
                            </form>
                            <br></br>
                            <ReactQuill
                                placeholder="Description Text (optional)"
                                style={{ width: "60%", height: "60%", margin: "0 auto" }}
                                value={this.state.text}
                                theme="snow"
                                modules={this.modules}
                                formats={this.formats}
                                onChange={this.handleChange}>
                            </ReactQuill>

                            <div>
                                <button style={{ background: "#2e849e", color: "white", borderRadius: "10px", width: "60%", marginLeft: "20%", marginTop: "5%" }} type="submit" onClick={this.handleSubmit} disabled={disableButton}>Submit</button>
                            </div>

                        </Modal>

                        <Modal
                            isOpen={this.state.ShowSubmitModal}
                            style={submittedMessage}>
                            <span
                                style={{
                                    fontSize: "1.25em",
                                    cursor: "default"
                                }}
                            >Thank you for your submission</span>
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

export default Comment;