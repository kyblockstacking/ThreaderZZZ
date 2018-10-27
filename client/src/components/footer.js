import React from "react";

let style = {
    footer: {
        position: "fixed",
        backgroundColor: "red",
        width: "100%",
        left: "0",
        bottom: "0",
        textAlign: "center"
    }
};

class footer extends React.Component {
    state = {};

    render() {
        return (
            <div style={style.footer} className="footer">
                FOOTER
            </div>
        );
    };
};

export default footer;