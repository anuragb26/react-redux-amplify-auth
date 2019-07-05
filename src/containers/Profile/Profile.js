import React from "react";
import { connect } from "react-redux";

function Profile(props) {
  console.log("profile", props.user);
  return <h1>Profile</h1>;
}

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(
  mapStateToProps,
  null
)(Profile);
