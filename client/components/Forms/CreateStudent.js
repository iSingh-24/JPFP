//we will make this a class that has it's own state so that we can store what the user is giving us. We don't need to use the redux store for this component

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudents } from "../../actions";
import axios from "axios";
import "../App.css";

class CreateStudent extends Component {
  constructor(props) {
    super(props);

    //IF AN ERROR PERSIST LATER, REMEMBER WE TOOK OUT imageUrl for now in the this.state below

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      gpa: "",
      // campus: "",
    };
  }

  createStudentHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitStudentHandler = async (event) => {
    event.preventDefault();

    const student = (
      await axios.post("/api/students", {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        gpa: this.state.gpa,
      })
    ).data;

    this.props.fetchStudents();
  };

  render() {
    console.log(this.state);
    return (
      <div
        style={{
          width: "30rem",
          backgroundColor: "lightgray",
          border: "2px solid black",
        }}
      >
        <h3 style={{ backgroundColor: "red", display: "inline-block" }}>
          CREATE STUDENT FORM
        </h3>
        <form onSubmit={this.submitStudentHandler}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.createStudentHandler}
              required
            />
            <label>Last Name:</label>
            <input
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.createStudentHandler}
              required
            />
            <label>Email:</label>
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.createStudentHandler}
              required
            />
            <label>GPA: </label>
            <input
              name="gpa"
              type="text"
              value={this.state.gpa}
              onChange={this.createStudentHandler}
              required
            />
            {/* <label>Image Url</label>
            <input
              name="imageUrl"
              type="text"
              value={this.state.imageUrl}
              onChange={this.createStudentHandler}
            /> */}
            {/* <label>Campus</label>
            <input
              name="campus"
              type="text"
              value={this.state.campus}
              onChange={this.createStudentHandler}
              required
            /> */}
          </div>
          <button type="submit" style={{ marginLeft: "150px" }}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudents: () => dispatch(fetchStudents()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateStudent);
