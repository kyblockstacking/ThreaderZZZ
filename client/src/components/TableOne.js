import React, { Component } from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'
import "./codeBlock.css";
import Modal from 'react-modal';
import axios from "axios";

let createThread = {
    threadName: "a",
    threadSummary: ".ql-editor p"
}

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: "",
            showModal: false
        }

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
    handleChange(value) {
        this.setState({ text: value })    
        // this.props.onChange(this.state.text)
      }


    handleSubmit(e) {
        e.preventDefault();
        // On submit of the form, send a POST request with the data to the server.
        console.log(createThread)
        axios.post('/api/threads/', createThread)
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
                    <div className="text-editor">
                        <button onClick={this.handleOpenModal}>Trigger Modal</button>
                        <Modal
                            isOpen={this.state.showModal}
                            contentLabel="Minimal Modal Example">
                            <form>
                                <input type="text" placeholder="title" onChange={this.updateInput}></input>
                            </form>
                            <br></br><br></br><br></br>
                            <ReactQuill value ={this.state.text} theme="snow"
                                modules={this.modules}
                                formats={this.formats}
                                onChange={this.handleChange}>
                            </ReactQuill>
                            <div className="container">
                                <div>
                                    <input type="submit" onClick={this.handleSubmit} />
                                </div>
                            </div>
                            <button onClick={this.handleCloseModal}>Close</button>
                        </Modal>
                    </div>
                </form>
            </div>
        );
    }
}

export default Comment;

