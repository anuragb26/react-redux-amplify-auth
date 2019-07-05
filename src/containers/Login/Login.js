import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

function Login(props) {
  console.log("login", props.user);
  //return <h1>Login form</h1>;
  const handleLogin = event => {
    props.onUserLogin({ userName: "abc", password: "def" });
  };
  return <button onClick={handleLogin}>Login</button>;
}

const mapStateToProps = ({ user }) => ({
  user
});
const mapDispatchToProps = dispatch => ({
  onUserLogin: userCredentials =>
    dispatch(actions.userLoginInitiate(userCredentials))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
