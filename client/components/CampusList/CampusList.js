import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampuses } from "../../actions/index";
import CreateCampus from "../Forms/CreateCampus";

class CampusList extends Component {
  async componentDidMount() {
    await this.props.fetchCampuses();
  }

  deleteCampusHandler = async (event) => {
    const campusToDeleteId = event.target.value;

    await axios.delete(`/api/campuses/${campusToDeleteId}`);

    this.props.fetchCampuses();
  };

  render() {
    let campusList = null;
    if (this.props.campuses.length) {
      campusList = this.props.campuses.map((campus) => (
        <div key={campus.id}>
          <img height="130" src={campus.imageUrl} />
          <p>
            <a href={`#/campuses/${campus.id}`}>{campus.name} </a>
            <br></br>
            <br></br>
            <button
              type="button"
              value={campus.id}
              onClick={this.deleteCampusHandler}
            >
              Delete Campus
            </button>
            <br></br>
            <br></br>
          </p>
        </div>
      ));
    }
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <CreateCampus />
        <h1>ALL CAMPUSES</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {campusList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCampuses: () => dispatch(fetchCampuses()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CampusList);
