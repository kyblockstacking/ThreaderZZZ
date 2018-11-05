import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class DeveloperLounge extends React.Component {
    state = {
        classes: [],
    };

    componentDidMount() {
        axios.get("/classes").then((res) => {
            this.setState({
                classes: res.data
            })
            console.log(this.state.classes)
        })
    }

    render() {
        return (

            <div>

                {this.state.classes.map(item => {
                    return (
                        <div style={{
                            width: '60%',
                            background: 'white',
                            borderTopRightRadius: '10px',
                            borderTopLeftRadius: '10px',
                            borderBottomRightRadius: '10px',
                            borderBottomLeftRadius: '10px',
                            marginBottom: "1em",
                            marginLeft: "auto",
                            marginRight: "auto",
                            border: "2px solid #2e849e",
                            padding: "1em"
                        }}>
                            <span style={{ fontSize: "0.75em", color: "lightgray" }}><i className="far fa-clipboard">&nbsp;</i>Posted By: {item.User.userName} at {item.createdAt}</span>
                            <br></br>
                            <Link style={{ fontSize: "1.75em" }} to={`/mentorRequest/${item.id}`}>
                                {item.title}
                            </Link>
                            <br></br>

                        </div>
                    )
                })}

            </div>

        )
    }
}

export default DeveloperLounge;
