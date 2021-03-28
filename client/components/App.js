import React, { Component } from "react";
import CampusList from "./CampusList/CampusList";
import "./App.css";
import StudentList from "./StudentList/StudentList";
import { connect } from "react-redux";
import { fetchCampuses, fetchStudents } from "../actions";
//why dont i need the loadCampuses, and loadStudents here?

class App extends Component {
  async componentDidMount() {
    await this.props.fetchCampuses();
    await this.props.fetchStudents();
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <h1>Nav Bar Will Go Here</h1>
        <div className="container">
          <br></br>
          <CampusList campuses={this.props.campuses} />
        </div>
        <h1>All Students Thus Far Are: </h1>
        <strong>
          <StudentList students={this.props.students} />
        </strong>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students,
    campuses: state.campuses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCampuses: () => dispatch(fetchCampuses()),
    fetchStudents: () => dispatch(fetchStudents()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

/**
 * Questions
 *
 * 1) Why am I having an issue with importing/exporting db when I break files up?
 */

/**
 * TODO:
 *
 * 1) FIX IMAGE URLS FOR CAMPUSES AND MAKE THEM DISPLAY SOMETHING
 * 2) MAKE THE DEFAULT IMAGE SRC ACTUALLY DISPLAY SOMETHING YOU'D WANT PEOPLE TO SEE BY DEFAULT
 */
