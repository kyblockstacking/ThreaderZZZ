import React from "react";

let style = {
    footerTop: {
        backgroundColor: "#262626",
        height: "150px",
        width: "100%",
        left: "0",
        bottom: "0",
        textAlign: "center",
        color: "#c6d6c5"
    },
    footerBottom: {
        backgroundColor: "#498040",
        width: "100%",
        textAlign: "center"
    },
    noMargin: {
        margin: "0"
    },
    marginTop: {
        paddingTop: "30px"
    },
    backToTop: {
        float: "right",
        paddingTop: "5px",
        paddingRight: "5px"
    },
    react: {
        border: "1px solid #498040",
        padding: "2px",
        borderRadius: "50%"
    }
};

class footer extends React.Component {
    state = {};

    backToTop = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="footerContainer">
                <div style={style.footerTop} className="footerTop">
                    <i onClick={() => this.backToTop()} style={style.backToTop} className="far fa-caret-square-up"></i>
                    <h5 style={style.marginTop}>Project Made With:</h5>
                    <i style={style.react} className="fab fa-react"></i>
                    <h6 style={style.noMargin}>React</h6>
                </div>

                <div style={style.footerBottom} className="footerBottom">
                    <div>
                        ThreaderZZZ is made by Aiden, David, Kevin, Vernie
                </div>
                    <div>
                        Contribute to this project's <a href="https://github.com/vedelacruz/project3x`">GitHub</a> <i class="fab fa-github"></i>
                    </div>
                </div>
            </div>
        );
    };
};

export default footer;