import React from "react";
import axios from "axios";

class AdminCategoryForm extends React.Component {

    state = {
        name: ""
    };

    handleInputChange = (event) => {
        // update any state property with the input value of the same name
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitProduct = (event) => {
        event.preventDefault();
        axios.post("/forumCategory", this.state).then((response) => {
            if (response.data) {
                this.setState({
                    name: ""
                });
            }
        })
    };

    render() {
        return (
            <form className="form" onSubmit={this.submitProduct}>
                <input
                    value={this.state.name}
                    name="name"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Category Name"
                    className="form-control"
                />
                <button className="btn btn-outline-primary mt-2">Add Category</button>
            </form>
        )
    }
}
export default AdminCategoryForm;