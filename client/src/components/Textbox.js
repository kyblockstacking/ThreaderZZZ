import React, { Component } from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'
 let titleStyle = {
    
}
 class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
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
                    <form>
                        <input style = {titleStyle} className ="form title" type = "text" placeholder = "title"></input>
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
                </div>
            </div>
        );
    }
}
 export default Editor;