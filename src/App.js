import React from "react";


// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import { connect } from "react-redux";

const App = props => {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="content col-10">
          <AuthorsList authors={props.authors} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    authors: state.authors
  }
}

export default connect(mapStateToProps)(App);
