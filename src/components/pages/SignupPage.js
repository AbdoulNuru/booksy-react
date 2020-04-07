import React from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import SignupForm from "../forms/SignupForm";
import { signup } from "../../actions/users";

class SignupPage extends React.Component {
  submit = (data) =>
    this.props.signup(data).then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <div>
        <SignupForm submit={this.submit} />
      </div>
    );
  }
}

SignupPage.propTypes = {
  history: Proptypes.shape({
    push: Proptypes.func.isRequired,
  }).isRequired,
  signup: Proptypes.func.isRequired,
};

export default connect(null, { signup })(SignupPage);
