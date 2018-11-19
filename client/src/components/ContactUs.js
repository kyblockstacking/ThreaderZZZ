import React from "react";

export default class ContactUs extends React.Component {

    render() {
        return (
            <div className="container-fluid" style={{ textAlign: "center", backgroundColor: "#29292A", color: "white" }}>


                <div className="row" style={{ padding: "1.5em 0 1.5em 0" }}>
                    <div className="col-lg-4">
                        <h5>Additional Information</h5>
                        <div style={{ color: "#507F94" }}>>&nbsp;Info 1</div>
                        <div style={{ color: "#507F94" }}>>&nbsp;Info 2</div>
                        <div style={{ color: "#507F94" }}>>&nbsp;Info 3</div>
                    </div>
                    <div className="col-lg-4" style={{ borderRight: "1px solid #2E3236", borderLeft: "1px solid #2E3236" }}>
                        <h5>Sign Me Up!</h5>
                        <div style={{ color: "#507F94" }}>&nbsp;Join the THREADER<sup>&nbsp;Z<sup>&nbsp;Z<sup>&nbsp;Z</sup></sup></sup> Newsletter</div>
                        <input style={{ backgroundColor: "#29292A", width: "80%", margin: "0.5em", border: "1px solid white", color: "white" }} placeholder="&nbsp;Email Address"></input>
                        <button style={{ color: "white", backgroundColor: "#29292A", border: "2px solid #507F94", borderRadius: "5%" }}>Subscribe</button>
                    </div>
                    <div className="col-lg-4">
                        <h5>Follow Us</h5>
                        <div className="row" style={{ fontSize: "2em" }}>
                            <i className="fab fa-facebook-f col-lg-3"></i>
                            <i className="fab fa-twitter col-lg-3"></i>
                            <i className="fab fa-instagram col-lg-3"></i>
                            <i className="fab fa-youtube col-lg-3"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}