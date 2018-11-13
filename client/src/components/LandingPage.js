import React from "react";

export default class LandingPage extends React.Component {
    state = {
        navbar: {
            color: "white",
            fontSize: "2em",
            padding: "2% 0 0 5%"
        },
        navbar2: {
            color: "white",
            fontSize: "1em",
            padding: "0.8% 0 0.8% 5%",
            background: "teal",
            position: "fixed",
            top: "0",
            width: "100%"
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        let scrollTop = event.srcElement.body.scrollTop

        console.log(event.srcElement.body.scrollY)

        this.setState({
            navbar: this.state.navbar2
        });
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
                <div style={this.state.navbar}>
                    <i className="fas fa-bed"></i>&nbsp;ThreaderZZZ
                </div>
                <div style={{
                    fontSize: "4em",
                    color: "white",
                    textAlign: "center",
                    margin: "0",
                    padding: "2em 0 0 0"
                }}><strong>THE LAW OF KEVIN YANG</strong>
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
                </div>
                <div style={{
                    marginTop: "30%"
                }}>
                    ABOUT THE TEAM
                </div>


            </div>
        );
    };
};