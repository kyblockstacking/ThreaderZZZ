import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Jumbotron from "./components/jumbotron";
import Navbar from "./components/navbar";
import ForumCategory from "./components/forumCategory";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Jumbotron />
          <Navbar />
          <Route exact path="/" component={ForumCategory} />
          {/* <Route exact path="/forum/Javascript" component={JavascriptTreads} />
          <Route exact path="/forum/PHP" component={PHPTreads} />
          <Route exact path="/forum/Python" component={PythonTreads} /> */}
        </div>
      </Router>
    )
  }
}

export default App;