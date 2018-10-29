import React from "react";
import axios from "axios";

class JsThreadContent extends React.Component {
    state = {
        content: []
    };
    componentDidMount() {
        axios.get(`/api/threads/${this.props.match.params.id}`).then(res => {
            console.log(res.data);
            this.setState({content: res.data});
        })
    }
    render() {
        return (
            <div>
                {this.state.content.map(items => {
                    return (
                        <div key={items.id}>
                        <h1>{items.replies}</h1>
                        <br></br>
                        <hr></hr>
                        </div>
                    )
                })}
            </div>
        );
    };
};

export default JsThreadContent;