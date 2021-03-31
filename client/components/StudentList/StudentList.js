import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudents } from "../../actions/index";
import CreateStudent from "../Forms/CreateStudent";
import axios from "axios";

//FOR THE FETCH TO OCCUR AGAIN DOES MY REDUX STORE STATE NEED TO UPDATE. IN OTHER WORDS DO I NEED TO DELETE IN BOTH MY REDUX STORE AS WELL AS MY DATABASE IF I AM TO CREATE/REMOVE A STUDENT?

class StudentList extends Component {
  async componentDidMount() {
    await this.props.fetchStudents();
  }

  deleteStudentsHandler = async (event) => {
    const studentToDeleteId = event.target.value;

    await axios.delete(`/api/students/${studentToDeleteId}`);
    this.props.fetchStudents();
  };
  //href becomes the params in the
  render() {
    let studentList = null;
    if (this.props.students.length) {
      studentList = this.props.students.map((student) => (
        <div key={student.id}>
          <a href={`#/students/${student.id}`}>
            {" "}
            {student.firstName} {student.lastName}{" "}
          </a>
          <p>
            <img height="100" src={student.imageUrl} />
          </p>
          <button
            type="button"
            value={student.id}
            onClick={this.deleteStudentsHandler}
          >
            Delete Student
          </button>
        </div>
      ));
    }

    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <h1>ALL STUDENTS</h1>
        </div>
        <br></br>
        <CreateStudent />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {studentList}
          <br></br>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudents: () => dispatch(fetchStudents()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
