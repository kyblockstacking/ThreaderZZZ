import React from "react";
import { Link } from "react-router-dom";

export default class LandingPage extends React.Component {
    state = {
        stickyNavbar: {
            color: "white",
            fontSize: "1.5em",
            padding: "0.5em 0 0.5em 5%",
            background: "",
            position: "",
            top: "0",
            zIndex: "100"
        },
        navbarClass: "",
        arrowClass: "fas fa-chevron-down fadeInDown infinite animated",
        aboutMeAiden: "card col-lg-4",
        aboutMeKevin: "card col-lg-4",
        aboutMeVernie: "card col-lg-4",
        page: ""
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        console.log(window.innerHeight)
        console.log(window.scrollY)
        if (window.innerHeight * window.scrollY > 0) {
            this.setState({
                stickyNavbar: {
                    color: "white",
                    fontSize: "1em",
                    padding: "0.5em 0 0.5em 5%",
                    background: "teal",
                    position: "fixed",
                    top: "0",
                    width: "100%",
                    zIndex: "100"
                },
                navbarClass: "animated fadeIn"
            })
            if (window.scrollY > 380) {
                this.setState({
                    aboutMeAiden: " animated zoomIn col-lg-4",
                    aboutMeKevin: " animated zoomIn col-lg-4",
                    aboutMeVernie: " animated zoomIn col-lg-4",
                    page: "animated fadeOut"
                })
            }
            else if (window.scrollY < 425) {
                this.setState({
                    aboutMeAiden: " animated zoomOut col-lg-4",
                    aboutMeKevin: " animated zoomOut col-lg-4",
                    aboutMeVernie: " animated zoomOut col-lg-4",
                    page: ""
                })
            }
        }
        else if (window.innerHeight * window.scrollY === 0) {
            this.setState({
                navbarClass: "animated fadeOut",
                stickyNavbar: {
                    color: "white",
                    fontSize: "1em",
                    padding: "0.5em 0 0.5em 5%",
                    background: "teal",
                    position: "",
                    top: "0",
                    width: "100%",
                    zIndex: "100"
                }
            })
        }
    }


    render() {
        return (
            <div style={{
                width: "100%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: "url('/images/background.jpg')",
            }} className="wrapper">
                <div className={this.state.page} style={{
                    height: "100vh",
                    width: "100%",
                    marginBottom: "0"
                }}>
                    {/* <div style={this.state.stickyNavbar} className={this.state.navbarClass}>
                        <i className="fas fa-bed" />&nbsp;Threader<sup>&nbsp;Z<sup>&nbsp;Z<sup>&nbsp;Z</sup></sup></sup>
                    </div> */}

                    <div
                        style={{
                            fontSize: "4em",
                            color: "white",
                            textAlign: "center",
                            margin: "0",
                            padding: "1.8em 0 0 0"
                        }}>
                        <strong>PROJECT THREADER<sup>&nbsp;Z<sup>&nbsp;Z<sup>&nbsp;Z</sup></sup></sup></strong>
                        <br />
                        <Link
                            to="/home"
                            style={{ color: "white", border: "1px solid yellow", borderRadius: "5px" }}
                        >Enter The Forums</Link>
                        <div style={{
                            fontSize: "0.25em",
                            margin: "5% 0 0 0"
                        }}>
                            Discover coders like you that are getting the support they seek by being involved in our community
                    </div>
                        <div style={{
                            fontSize: "0.5em",
                            padding: "1.5em 0 0.5em 0"
                        }}>Meet the team!</div>
                        <i style={{
                            fontSize: "0.5em",
                            padding: "0.75em 0 0.4em 0",
                        }} className={this.state.arrowClass}></i>
                    </div>
                </div>

                <div class="row" style={{ fontFamily: "Oswald, sans-serif" }}>
                    <div class={this.state.aboutMeAiden} align="center">
                        <div class="card marginAdjustment" style={{ width: "18rem", marginBottom: "20%"}}>
                            <img class="card-img-top" src="/images/aidan2.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Aidan</h5>
                                <a href="/servicesTwo" class="btn btn-primary">GitHub profile</a>
                            </div>
                        </div>
                    </div>
                    <div class={this.state.aboutMeKevin} align="center">
                        <div class="card marginAdjustment" style={{ width: "18rem", marginBottom: "20%"}}>
                            <img class="card-img-top" src="/images/kevin2.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Kevin</h5>
                                <a href="/servicesTwo" class="btn btn-primary">GitHub profile</a>
                            </div>
                        </div>
                    </div>
                    <div class={this.state.aboutMeVernie} align="center">
                        <div class="card marginAdjustment" style={{ width: "18rem", marginBottom: "20%"}}>
                            <img class="card-img-top" src="/images/vernie2.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Vernie</h5>
                                <a href="/servicesTwo" class="btn btn-primary">GitHub profile</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    };
};