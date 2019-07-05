import React from "react";
import { connect } from "react-redux";

function Home(props) {
  console.log("home", props.user);
  return <h1>Home</h1>;
}

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(
  mapStateToProps,
  null
)(Home);
