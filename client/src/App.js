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
import CreateAppointment from './components/CreateAppointment';
import Layout from "./components/Layout";
import "./App.css";
// import ReplyTextbox from "./components/ReplyTextbox";
// import CreateThread from "./components/CreateThread";
import AboutUs from "./components/AboutUs";
import Topics from './components/Topics';
import AdminCategoryForm from './components/AdminCategoryForm';
import EmailMessage from './components/EmailMessage';

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
        <div style={{ background: '#ededed' }}>
          <Jumbotron />
          <Navbar />
          <Route
            exact
            path="/"
            render={this.state.userData.user ? 
            (props) => <Logout {...props} setLogout={this.setLogout} /> : 
            (props) => <SignIn {...props} setLogin={this.setLogin} error={this.state.userData} />}
          />

          {/* TESTING COMPONENTS ON localhost/port/test */}
          {/* <Route exact path="/test" component={Appointment} /> */}

          <Switch>
            <Route exact path="/" component={Forum} />
            <Route 
              exact path="/forum/:category" 
              render={(props) => <Topics {...props} 
              authenticated={this.state.authenticated} />} />
            />
            <Route exact path="/AboutUs" component={AboutUs} />
            <Route exact path="/DeveloperLounge" component={CreateAppointment} />
            {/* <Layout exact path="/vern" title="Chat App BAby" /> */}
            <Route exact path="/mentors/chatrooms/:id" component={Layout} />
            <Route
              exact
              path="/forum/category/thread=:id"
              render={(props) => <ThreadContent {...props} 
              authenticated={this.state.authenticated} />} />
            />
            <Route exact path="/signup" 
              render={(props) => <Signup {...props} setLogin={this.setLogin} />} />
            <Route exact path="/api/profile/:user" component={Profile} />
            <Route exact path="/admin/categoryform" component={AdminCategoryForm} />
            <Route exact path="/kappa" component={EmailMessage} />
            <Route component={NotFound} />
          </Switch>

          {/* <Route exact path="/forum/Javascript/thread=1" component={ReplyTextbox} /> */}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
