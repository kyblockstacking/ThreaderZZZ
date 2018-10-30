import React from "react";
import axios from "axios";

let images = {
    javascript: "/images/javascript_logo.jpg",
    php: "/images/php_logo.png",
    python: "/images/python_logo.jpg"
}

class forumCategory extends React.Component {

    state = {
        Javascript_numberOfThreads: "",
        PHP_numberOfThreads: "",
        Python_numberOfThreads: ""
    };

    componentDidMount() {
        axios.get(`/api/realthreads`).then(res => {
            console.log(res.data)
            this.setState({ Javascript_numberOfThreads: res.data[0].Threads.length })
            this.setState({ PHP_numberOfThreads: res.data[1].Threads.length })
            this.setState({ Python_numberOfThreads: res.data[2].Threads.length })
        })
    }

    render() {
        return (
            <div className="container">
                <div>
                    <img alt="logo" src={images.javascript} />
                    <a href="/forum/javascript"> Enter Javascript Forum</a>
                    <br></br>
                    <span><i className="fas fa-bed"></i> Threadcount: {this.state.Javascript_numberOfThreads}</span>
                    <hr></hr>
                </div>

                <div>
                    <img alt="logo" src={images.php} />
                    <a href="/forum/PHP"> Enter PHP Forum</a>
                    <br></br>
                    <span><i className="fas fa-bed"></i> Threadcount: {this.state.PHP_numberOfThreads}</span>
                    <hr></hr>
                </div>

                <div>
                    <img alt="logo" src={images.python} />
                    <a href="/forum/Python"> Enter Python Forum</a>
                    <br></br>
                    <span><i className="fas fa-bed"></i> Threadcount: {this.state.Python_numberOfThreads}</span>
                    <hr></hr>
                </div>
            </div>
        )
    };
};

export default forumCategory;