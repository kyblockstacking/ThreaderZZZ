import React, { Component } from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'
import "./codeBlock.css";
import Modal from 'react-modal';

let titleStyle = {

}

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            showModal: false
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);

    }
    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
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

    render() {
        return (
            <div>
                <div className="text-editor">
                    <button onClick={this.handleOpenModal}>Trigger Modal</button>
                    <Modal
                        isOpen={this.state.showModal}
                        contentLabel="Minimal Modal Example"
                    >
                        <form>
                            <input style={titleStyle} className="form title" type="text" placeholder="title"></input>
                        </form>
                        <br></br><br></br><br></br>
                        <ReactQuill theme="snow"
                            modules={this.modules}
                            formats={this.formats}>
                        </ReactQuill>
                        <div className="container">
                            <div>
                                <a href="/forum/Javascript/thread=:id"> submit</a>
                            </div>
                        </div>
                        <button onClick={this.handleCloseModal}>Close Modal</button>
                    </Modal>
                </div>
                </div>
                );
            }
        }
        
export default Comment;