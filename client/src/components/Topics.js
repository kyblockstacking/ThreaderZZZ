import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CreateThread from "./CreateThread"
import moment from 'moment';

class Topic extends React.Component {
    state = {
        threadsArray: [],
        category: ""
    };

    componentDidMount() {
        this.findAll();
    }

    findAll = () => {
        axios.get(`/api/${this.props.match.params.category}`).then(res => {
            console.log(res.data);
            let category = "";
            if (res.data[0].Category.name){
                category = res.data[0].Category.name
            }
            this.setState({ 
                threadsArray: res.data,
                category: category
            });
            // console.log(this.state);
        })

    }

    updateThreadsArray = (category) => {
        axios.get(`/api/${category}`).then(response => {
            this.setState({ threadsArray: response.data });
        })
    }

    render() {
        // let category;
        // switch (this.state.threadsArray[0].CategoryId) {
        //     case '1':
        //         category = "Javascript"
        //         break;
        //     case '2':
        //         category = "PHP"
        //         break;
        //     case '3':
        //         category = "Python"
        //         break;
        //     default:
        //         break;
        // }

        return (
            <div>
                <div style={{ borderRadius: "10px", padding: '5px', background: 'teal', color: 'white', width: "60%", marginRight: "auto", marginLeft: "auto", marginBottom: "1em", textAlign: "center", marginTop: "10%" }}><span style={{ cursor: "default" }}>{this.state.category}</span></div>
                {this.props.authenticated ? <CreateThread categoryId={this.props.match.params.category} userData={this.props.userData} updateThreadsArray={this.updateThreadsArray} /> : null}

                {this.state.threadsArray.map(items => {
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
                            border: "2px solid teal",
                            padding: "1em"
                        }} key={items.id}>
                            <span style={{ fontSize: "0.75em", color: "lightgray" }}><i className="far fa-clipboard">&nbsp;</i>Posted By: <Link to={`/api/profile/${items.User.userName}`}>{items.User.userName}</Link> {moment(items.createdAt).fromNow()}</span>
                            <br></br>
                            <Link style={{ fontSize: "1.75em" }} to={`/forum/category/thread=${items.id}`}>
                                {items.threadName}
                            </Link>
                            <br></br>
                            <span style={{ fontSize: "0.75em" }}><i className="far fa-comment-alt"></i>&nbsp;{items.Comments.length} replies</span>
                            <br></br>
                        </div>
                    )
                })}
            </div>
        );
    };
};

export default Topic;