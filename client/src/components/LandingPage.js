import React from "react";

export default class LandingPage extends React.Component {
    state = {
        stickyNavbar: {
            color: "white",
            fontSize: "1.5em",
            padding: "0.5em 0 0.5em 5%",
            background: "",
            position: "",
            top: "0",
            width: "100%"
        },
        navbarClass: "",
        arrowClass: "fas fa-chevron-down fadeInDown infinite animated"
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 0) {
            this.setState({
                stickyNavbar: {
                    color: "white",
                    fontSize: "1em",
                    padding: "0.5em 0 0.5em 5%",
                    background: "teal",
                    position: "fixed",
                    top: "0",
                    width: "100%"
                },
                navbarClass: "animated fadeIn"
            })
        }
        else if (window.scrollY < window.innerHeight * 2) {
            this.setState({
                stickyNavbar: {
                    color: "white",
                    fontSize: "1em",
                    padding: "0.5em 0 0.5em 5%",
                    background: "teal",
                    position: "",
                    top: "0",
                    width: "100%"
                },
                navbarClass: "animated fadeOut"
            })
        }
        if (window.scrollY === 0) {
            console.log("HELLO")
            this.setState({
                stickyNavbar: {
                    color: "white",
                    fontSize: "1.5em",
                    padding: "0.5em 0 0.5em 5%",
                    background: "",
                    position: "",
                    top: "0",
                    width: "100%"
                },
                navbarClass: "",
            })
        }
    }


    render() {
        return (
            <div style={{
                height: "100%",
                width: "100%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: "url('/images/background.jpg')"
            }}>
                <div style={this.state.stickyNavbar} className={this.state.navbarClass}>
                    <i className="fas fa-bed" />&nbsp;ThreaderZZZ
                </div>

                <div style={{
                    fontSize: "4em",
                    color: "white",
                    textAlign: "center",
                    margin: "0",
                    padding: "20vh 0 0 0"
                }}><strong>THIS IS OUR PROJECT</strong>
                    <br />
                    <div style={{
                        fontSize: "0.3em",
                    }}>JOIN THE FASTEST GROWING ONLINE COMMUNITY FOR CODING
                    </div>
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
                        padding: "0.75em 0 0.4em 0"
                    }} className={this.state.arrowClass}></i>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        );
    };
};