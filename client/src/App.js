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
import Profile from './components/Profile';
import Appointment from './components/Appointment';
import Layout from './components/Layout';
import './App.css';
import ReplyTextbox from './components/ReplyTextbox';
import CreateThread from './components/CreateThread';

class App extends React.Component {
  state = {
    userData: {},
    authenticated: false,
    loaded: false,
  };

  componentDidMount() {
    axios.get('/auth').then((res) => {
      this.setState({
        userData: res.data,
        loaded: true,
        authenticated: res.data.loggedIn,
      });
    });
  }

  setLogin = (user) => {
    this.setState({
      authenticated: true,
      userData: user,
    });
  };

  render() {
    if (!this.state.loaded) {
      return null;
    }

    return (
      <Router>
        <div style={{ background: '#ededed' }}>
          <Jumbotron />
          <Navbar />
          <Route
            exact
            path="/"
            render={this.state.userData.user ? 
            (props) => <Logout {...props} setLogin={this.setLogin} /> : 
            (props) => <SignIn {...props} setLogin={this.setLogin} error={this.state.userData} />}
          />

          {/* TESTING COMPONENTS ON localhost/port/test */}
          <Route exact path="/test" component={Appointment} />

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
              render={(props) => <JsThreadContent {...props} 
              authenticated={this.state.authenticated} />} />
            />
            {/* <Layout exact path="/vern" title="Chat App BAby" /> */}
            <Route exact path="/mentors/chatrooms/:id" component={Layout} />
            <Route exact path="/forum/PHP" component={PHPTreads} />
            <Route exact path="/forum/Python" component={PythonTreads} />
            <Route exact path="/signup" 
              render={(props) => <Signup {...props} setLogin={this.setLogin} />} />
            <Route exact path="/api/profile/:user" component={Profile} />
            <Route component={NotFound} />
          </Switch>
          <Route exact path="/forum/javascript" component={CreateThread} />
          <Route
            exact
            path="/forum/Javascript/thread=1"
            render={(props) => <ReplyTextbox {...props} 
            authenticated={this.state.authenticated} />}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
