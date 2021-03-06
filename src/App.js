import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import Homepage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashoardPage from "./components/pages/DashboardPage";
import SignupPage from "./components/pages/SignupPage";
// import Chat from "./components/pages/chat";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";

const App = ({ location }) => (
  <div className="ui container">
    <Route location={location} path="/" exact component={Homepage} />
    <GuestRoute location={location} path="/login" exact component={LoginPage} />
    <GuestRoute
      location={location}
      path="/signup"
      exact
      component={SignupPage}
    />
    {/* <GuestRoute location={location} path="/chat" exact component={Chat} /> */}
    <UserRoute
      location={location}
      path="/dashboard"
      exact
      component={DashoardPage}
    />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
