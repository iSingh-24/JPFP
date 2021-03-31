import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampuses } from "../../actions/index";
import "../App.css";

class CreateCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
    };
  }

  createCampusHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitCampusHandler = async (event) => {
    event.preventDefault();

    const campus = (
      await axios.post("/api/campuses", {
        name: this.state.name,
        address: this.state.address,
      })
    ).data;

    this.setState({
      name: "",
      address: "",
    });

    this.props.fetchCampuses();
  };

  render() {
    return (
      <div style={{ border: "solid black 3px", backgroundColor: "lightgray" }}>
        <h3>CREATE CAMPUS</h3>
        <form onSubmit={this.submitCampusHandler} className="form">
          <div>
            <label>CAMPUS NAME</label>
            <input
              type="text"
              placeholder="Enter Campus Name Here"
              value={this.state.name}
              name="name"
              onChange={this.createCampusHandler}
            />
            <label>Campus Address</label>
            <input
              type="text"
              placeholder="Enter Campus Address Here"
              value={this.state.address}
              name="address"
              onChange={this.createCampusHandler}
            />
          </div>
          <button type="submit" style={{ marginLeft: "500px" }}>
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
    fetchCampuses: () => dispatch(fetchCampuses()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCampus);
