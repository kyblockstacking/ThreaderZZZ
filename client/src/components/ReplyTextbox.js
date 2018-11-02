import React, { Component } from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'
import "./codeBlock.css";
import axios from "axios";

 class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            showModal: false
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
            replies: this.state.text.replace("<p>", "").replace("</p>", "")
        }
        console.log(createThread)


        axios.post('/comments/api/comments/', createThread)
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
                            
                    </div>
                </form>
            </div>
        );
    }
}
 export default Editor;