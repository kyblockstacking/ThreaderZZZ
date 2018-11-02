import React from "react";

let card = {
    margin: "2em",
    width: "18rem"
}

class AboutUs extends React.Component {
    state = {};

    render() {
        return (
            <div className="container">

                <div className="card" style={card}>
                    <img className="card-img-top" src="/images/python_logo.jpg" alt="Profile Picture" />
                    <div className="card-body">
                        <h5 className="card-title">Aiden</h5>
                        <a href="https://github.com/ironaidan" className="btn btn-primary">Github Profile</a>
                    </div>
                </div>

                <div className="card" style={card}>
                    <img className="card-img-top" src="/images/python_logo.jpg" alt="Profile Picture" />
                    <div className="card-body">
                        <h5 className="card-title">David</h5>
                        <a href="https://github.com/davidmhuh" className="btn btn-primary">Github Profile</a>
                    </div>
                </div>

                <div className="card" style={card}>
                    <img className="card-img-top" src="/images/python_logo.jpg" alt="Profile Picture" />
                    <div className="card-body">
                        <h5 className="card-title">Kevin</h5>
                        <a href="https://github.com/kyblockstacking" className="btn btn-primary">Github Profile</a>
                    </div>
                </div>

                <div className="card" style={card}>
                    <img className="card-img-top" src="/images/python_logo.jpg" alt="Profile Picture" />
                    <div className="card-body">
                        <h5 className="card-title">Vernie</h5>
                        <a href="https://github.com/vedelacruz" className="btn btn-primary">Github Profile</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default AboutUs;