import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampus, fetchStudent, fetchStudents } from "../../actions";
import { Link } from "react-router-dom";
import UpdateCampus from "../Forms/UpdateCampus";
import axios from "axios";

class SingleCampus extends Component {
  async componentDidMount() {
    await this.props.fetchCampus(this.props.match.params.id);
    // await this.props.fetchStudents();
  }

  unregisterStudentHandler = async (event) => {
    const studentId = event.target.value;
    const studentToUpdate = this.props.campuses.students.find(
      (student) => student.id === studentId
    );

    const updatedStudent = (
      await axios.put(`/api/students/${studentId}`, {
        ...studentToUpdate,
        campusId: null,
      })
    ).data;

    // studentToUpdate.campusId = null;

    // const updatedStudent = (
    //   await axios.put(`/api/students/${studentId}`, studentToUpdate)
    // ).data;

    this.props.fetchCampus(this.props.match.params.id); //when you do it with match params id it updates the props apparently, rather than if we did just this.props.id?
  };

  render() {
    let campus = [];
    let campusData = "...loading";
    let message = <h4>There are no students enrolled in this campus</h4>;

    campus = this.props.campuses;
    //console.log(campus.students);

    if (campus.students && campus.students.length !== 0) {
      //the reason why this needs to have the campus.students.length ! === 0 is for the case where everything is loaded up, and even after that a campus with no students will still typically have its campus.students = [] to an empty array. Therefore the message variable will be udpated to an empty array we map over, and the no campuses message will never be displayed. That is why we need the second part of this if statement to be necessary.

      message = campus.students.map((student) => (
        <h4 key={student.id}>
          <Link to={`/students/${student.id}`}>
            Click to see the student information for {student.firstName}{" "}
            {student.lastName}
          </Link>
          <span> </span>
          <button
            type="button"
            value={student.id}
            onClick={this.unregisterStudentHandler}
          >
            Unregister
          </button>
        </h4>
      ));
    }

    campusData = (
      <div>
        <img src={campus.imageUrl} />
        <h4>Campus Name: {campus.name}</h4>
        <h4>Campus Address: {campus.address}</h4>
        <h4>Campus Description: {campus.description}</h4>
        <h4>ENROLLMENT INFORMATION: </h4>
        {message}
      </div>
    );

    return (
      <div>
        <UpdateCampus />
        {campusData}
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampus(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
