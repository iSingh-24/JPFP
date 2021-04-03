import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchStudent } from "../../actions";

class UpdateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.students.firstName,
      lastName: this.props.students.lastName,
      email: this.props.students.email,
      gpa: this.props.students.gpa,
    };
  }

  updateStudentHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitUpdateHandler = async (event) => {
    event.preventDefault();
    const newStudent = { ...this.state };
    const updatedStudent = (
      await axios.put(`/api/students/${this.props.students.id}`, newStudent)
    ).data;

    await this.props.fetchStudent(this.props.students.id);
  };

  render() {
    return (
      <div>
        <form
          style={{ border: "solid black 2px", backgroundColor: "lightgray" }}
          onSubmit={this.submitUpdateHandler}
        >
          <h4>Update Student Form</h4>
          <label>First Name</label>
          <input
            type="text"
            value={this.state.firstName}
            name="firstName"
            onChange={this.updateStudentHandler}
            required
          />
          <label>Last Name</label>
          <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            onChange={this.updateStudentHandler}
            required
          />
          <label>Email</label>
          <input
            type="text"
            value={this.state.email}
            name="email"
            onChange={this.updateStudentHandler}
            required
          />
          <label>GPA</label>
          <input
            type="text"
            value={this.state.gpa}
            name="gpa"
            onChange={this.updateStudentHandler}
            required
          />
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudent(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStudent);
