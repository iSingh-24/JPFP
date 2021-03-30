import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudents } from "../../actions/index";

class StudentList extends Component {
  async componentDidMount() {
    await this.props.fetchStudents();
    console.log(this.props);
  }

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
        </div>
      ));
    }

    return <div>{studentList}</div>;
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
