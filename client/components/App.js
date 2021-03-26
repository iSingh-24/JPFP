import React, { Component } from "react";
import axios from "axios";
import CampusList from "./CampusList/CampusList";
import "./App.css";
import StudentList from "./StudentList/StudentList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      campuses: [],
      students: [],
    };
  }

  async componentDidMount() {
    this.setState({
      campuses: (await axios.get("/api/campuses")).data,
      students: (await axios.get("/api/students")).data,
    });
  }

  render() {
    return (
      <div>
        <h1>Nav Bar Will Go Here</h1>
        <div className="container">
          <br></br>
          <CampusList campuses={this.state.campuses} />
        </div>
        <h1>All Students Thus Far Are: </h1>
        <strong>
          <StudentList students={this.state.students} />
        </strong>
      </div>
    );
  }
}

export default App;

/**
 * Questions
 *
 * 1) Why am I having an issue with importing/exporting db when I break files up?
 */
