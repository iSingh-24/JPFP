import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudents } from "../../actions";
import axios from "axios";
import "../App.css";

class CreateStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      gpa: "",
      showForm: false,
    };
  }

  createStudentHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm,
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

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      gpa: "",
    });

    await this.props.fetchStudents();

    this.setState({
      showForm: false,
    });
  };

  createForm = () => {
    let formValue = (
      <div
        style={{
          width: "30rem",
          backgroundColor: "lightgray",
          border: "2px solid black",
        }}
      >
        <h3 style={{ backgroundColor: "red", display: "inline-block" }}>
          ADD STUDENT FORM
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
          </div>
          <button type="submit" style={{ marginLeft: "150px" }}>
            Submit
          </button>
        </form>
      </div>
    );

    return formValue;
  };

  render() {
    return (
      <div>
        {this.state.showForm ? (
          this.createForm()
        ) : (
          <button type="button" onClick={this.toggleForm}>
            Add Student
          </button>
        )}
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
