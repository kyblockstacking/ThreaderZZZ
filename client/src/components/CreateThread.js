import React, { Component } from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'
import "./codeBlock.css";
import Modal from 'react-modal';
import axios from "axios";



class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: "",
            showModal: false
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
            CategoryId: this.props.categoryId
        }

        axios.post('/threads/api/threads/', createThread)
            .then(function (response) {
                return response
            }).then(function (body) {
                console.log(body);
            });
    }

    render() {
        return (
            <div>
                <form>
                    <div className="text-editor" style={{marginBottom:"1em", marginLeft: "43%"}}>
                        <span style={{ background: "white", color: "#2e849e", padding: "6px 30px 6px 30px", borderRadius: "10px" }} onClick={this.handleOpenModal}>Create New Thread</span>
                        <Modal
                            isOpen={this.state.showModal}
                            contentLabel="Minimal Modal Example">
                            <i style={{ color: "red", marginLeft: "80%", fontSize: "1.5em" }} onClick={this.handleCloseModal} className="fas fa-times-circle"></i>
                            <div style={{ marginLeft: "33%", fontSize: "2em" }}>
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
                                <button style={{ background: "teal", color: "white", borderRadius: "10px", width: "60%", marginLeft: "20%", marginTop: "5%" }} type="submit" onClick={this.handleSubmit} disabled={!this.props.authenticated}>Submit</button>
                            </div>
                        </Modal>
                    </div>
                </form>
            </div>
        );
    }
}

export default Comment;