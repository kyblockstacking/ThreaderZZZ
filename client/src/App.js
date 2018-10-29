import Signup from './components/Signup';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Jumbotron from "./components/jumbotron";
import Navbar from "./components/navbar";
import ForumCategory from "./components/forumCategory";
import JavascriptTreads from "./components/javascript_forum";
import JsThreadContent from "./components/js_thread_content";
import PHPTreads from "./components/php_forum";
import PythonTreads from "./components/python_forum";
import Footer from "./components/footer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Jumbotron />
          <Navbar />
          <Route exact path="/" component={ForumCategory} />
          {/* <Route exact path="/forum/:category" component={JavascriptTreads} /> */}
          <Route exact path="/forum/Javascript" component={JavascriptTreads} />
          <Route exact path="/forum/Javascript/thread=:id" component={JsThreadContent} />
          <Route exact path="/forum/PHP" component={PHPTreads} />
          <Route exact path="/forum/Python" component={PythonTreads} />
          <Route exact path="/signup" component={Signup} />
          <Footer />
        </div>
      </Router>
    );
  };
};

export default App;