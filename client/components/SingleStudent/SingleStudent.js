import React, { Component } from "react";
import { fetchStudent } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import UpdateStudent from "../Forms/UpdateStudent";

class SingleStudent extends Component {
  async componentDidMount() {
    await this.props.fetchStudent(this.props.match.params.id);
    console.log(this.props);
    // console.log(this.props.students);
  }

  render() {
    let student = this.props.students;
    let studentData = null;

    if (!Array.isArray(this.props.students)) {
      studentData = (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div>
            <img style={{ width: "300px" }} src={student.imageUrl} />
            <h4>
              Full Name: {student.firstName} {student.lastName}
            </h4>
            <h4>Email: {student.email}</h4>
            <h4>GPA: {student.gpa}</h4>
            {student.campusId === null ? (
              <h4>No Campus Association</h4>
            ) : (
              <Link to={`/campuses/${student.campusId}`}>
                {" "}
                <h4>{student.campus.name}</h4>{" "}
              </Link>
            )}
          </div>
          <div>
            <h3>
              <UpdateStudent />
            </h3>
          </div>
        </div>
      );
    }

    return <div>{studentData}</div>;
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudent(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);

/* <h4
            onClick={() =>
              this.props.history.push(`/campuses/${student.campusId}`)
            }
          >
            Associated with the campus Id of {student.campusId}
          </h4> */
