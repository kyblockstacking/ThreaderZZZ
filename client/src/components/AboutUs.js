import React from "react";

let card = {
    margin: "2em",
    width: "14rem",
 }
 
 let about = {
    textAlign: "center"
 
 }

class AboutUs extends React.Component {
    state = {};

    render() {
        return (
            <div className="container">
                <br></br><br></br>
                <div className="aboutUs" style={about}>
                    <h1>Our Mission</h1>
                    <p>
                        Our mission is to provide an environment where fellow developers can help others with their experience, knowledge,
                        and insight. With our mentorship system, logged-in users are able to upvote to become mentors. There is also an option
                        to downvote other users enough for them to lose their position and status as a mentor.Mentors are given tools to help
                        others out such as replying to the current forums, or to privately tutor others in need with our inhouse chat
                        room. We are sure that this app can prove to be accessible and user-friendly to all developers who are both in need
                        of help and willing to help others.
                        </p>
                    <br></br><br></br><br></br>
                    <h1>Meet the admins</h1>
                </div>
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