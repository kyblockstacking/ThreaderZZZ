import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Signup from './components/Signup';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Forum from './components/Forum';
import ThreadContent from './components/ThreadContent';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Logout from './components/Logout';
import NotFound from './components/404';
import Profile from './components/Profile';
import Layout from './components/Layout';
import './App.css';
import EmailSystem from './components/EmailSystem';
// import ReplyTextbox from "./components/ReplyTextbox";
// import CreateThread from "./components/CreateThread";
import AboutUs from './components/AboutUs';
import Topics from './components/Topics';
import AdminCategoryForm from './components/AdminCategoryForm';
import EmailMessage from './components/EmailMessage';

// TEST COMPONENTS
import Appointment from './components/Appointment';
import Inbox from './components/Inbox';
import Outbox from './components/Outbox';
import DeveloperLounge from './components/DeveloperLounge';

import LandingPage from "./components/LandingPage";
import ContactUs from "./components/ContactUs";

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

  setLogout = () => {
    this.setState({
      authenticated: false,
      userData: '',
    });
  };

  render() {
    if (!this.state.loaded) {
      return null;
    }

    return (
      <Router>


        <div style={{ height: "100%", width: "100%" }}>

          {/* <Jumbotron /> */}
          <Navbar authenticated={this.state.authenticated} />
          <Route
            exact path="/home"
            render={
              this.state.userData.user
                ? (props) => <Logout {...props} setLogout={this.setLogout} />
                : (props) => (
                  <SignIn
                    {...props}
                    setLogin={this.setLogin}
                    error={this.state.userData}
                  />
                )
            }
          />

          {/* TESTING COMPONENTS ON localhost/port/test */}
          {/* <Route exact path="/test" component={Appointment} /> */}

          <Switch>
            <Route exact path="/" component={LandingPage}></Route>
            <Route exact path="/home" component={Forum} />
            <Route
              exact path="/forum/:category"
              render={(props) => (
                <Topics {...props} authenticated={this.state.authenticated}
                  userData={this.state.userData}
                />
              )}
            />
            <Route exact path="/AboutUs" component={AboutUs} />
            {this.state.authenticated ? (
              <Route
                exact path="/DeveloperLounge"
                render={(props) => <DeveloperLounge {...props}
                  userData={this.state.userData} />} />
            ) : null}


            {/* TEST HERE */}
            <Route exact path="/mentorRequest/:id" render={(props) => (
              <Appointment {...props} userData={this.state.userData} />
            )} />
            {this.state.authenticated ? (
              <Route
                exact path="/email/inbox"
                render={(props) => (
                  <Inbox {...props} userData={this.state.userData} />
                )}
              />
            ) : null}
            {this.state.authenticated ? (
              <Route
                exact path="/email/outbox"
                render={(props) => (
                  <Outbox {...props} userData={this.state.userData} />
                )}
              />
            ) : null}
            {this.state.authenticated ? (
              <Route
                exact path="/generalemail"
                render={(props) => (
                  <EmailSystem {...props} userData={this.state.userData} />
                )}
              />
            ) : null}
            {/* END TEST */}

            {/* <Layout exact path="/vern" title="Chat App BAby" /> */}
            <Route exact path="/mentors/chatrooms/:id" component={Layout} />
            <Route
              exact path="/forum/category/thread=:id"
              render={(props) => (
                <ThreadContent
                  {...props}
                  authenticated={this.state.authenticated}
                  userData={this.state.userData}

                />
              )}
            />
            <Route
              exact path="/signup"
              render={(props) => <Signup {...props} setLogin={this.setLogin} />}
            />
            <Route exact path="/api/profile/:user" component={Profile} />
            <Route
              exact path="/admin/categoryform"
              component={AdminCategoryForm}
            />
            <Route
              exact path="/emailsystem"
              render={(props) => (
                <EmailMessage {...props} userData={this.state.userData} />
              )}
            />
            <Route component={NotFound} />
          </Switch>
          <ContactUs />
        </div>
      </Router>
    );
  }
}

export default App;
