import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Signup from './components/Signup';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import ForumCategory from './components/ForumCategory';
import JavascriptTreads from './components/JavascriptForum.js';
import JsThreadContent from './components/JavascriptThreadContent';
import PHPTreads from './components/PHPForum';
import PythonTreads from './components/PythonForum';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Logout from './components/Logout';
import NotFound from './components/404';

import Appointment from "./components/Appointment";
// import ReplyToThread from "./components/ReplyToThread";

class App extends React.Component {
  state = {
    userData: {},
  };
  componentDidMount() {
    axios.get('/auth').then((res) => {
      this.setState({
        userData: res.data,
      });
    });
  }

  render() {
    return (
      <Router>
        <div style={{ background: "#ededed" }}>
          <Jumbotron />
          <Navbar />
          <Route
            exact
            path="/"
            component={this.state.userData.user ? Logout : SignIn}
          />

          {/* TESTING COMPONENTS on localhost:port/test */}
          <Route exact path="/test" component={Appointment} />
          {/* <Route exact path="/test" component={ReplyToThread} /> */}

          <Switch>
            <Route exact path="/" component={ForumCategory} />
            <Route
              exact
              path="/forum/Javascript"
              component={JavascriptTreads}
            />
            <Route
              exact
              path="/forum/Javascript/thread=:id"
              component={JsThreadContent}
            />
            <Route exact path="/forum/PHP" component={PHPTreads} />
            <Route exact path="/forum/Python" component={PythonTreads} />
            <Route exact path="/signup" component={Signup} />
            {/* <Route component={NotFound} /> */}
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
