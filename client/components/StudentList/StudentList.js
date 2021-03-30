import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudents } from "../../actions/index";
import Student from "./Student";

class StudentList extends Component {
  async componentDidMount() {
    await this.props.fetchStudents();
    // console.log(this.props);
  }

  render() {
    let studentList = null;
    if (this.props.students.length) {
      studentList = this.props.students.map((student) => (
        <Student
          key={student.id}
          firstName={student.firstName}
          lastName={student.lastName}
          imgUrl={student.imageUrl}
        />
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
