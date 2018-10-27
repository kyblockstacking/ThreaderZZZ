import React from "react";

let images = {
    javascript: "/images/javascript_logo.jpg",
    php: "/images/php_logo.png",
    python: "/images/python_logo.jpg"
}

class forumCategory extends React.Component {

    state = {};

    render() {
        return (
            <div className="container">
                <div>
                    <img alt="logo" src={images.javascript} />
                    <a href="/forum/javascript"> Enter Javascript Forum</a>
                </div>

                <div>
                    <img alt="logo" src={images.php} />
                    <a href="/forum/PHP"> Enter PHP Forum</a>
                </div>

                <div>
                    <img alt="logo" src={images.python} />
                    <a href="/forum/Python"> Enter Python Forum</a>
                </div>
            </div>
        )
    };
};

export default forumCategory;