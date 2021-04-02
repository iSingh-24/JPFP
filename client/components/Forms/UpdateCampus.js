import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchCampus } from "../../actions";

class UpdateCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      description: "",
    };
  }

  async componentDidMount() {
    await this.props.fetchCampus(this.props.idForCampus.match.params.id);

    this.setState({
      name: this.props.campuses.name,
      address: this.props.campuses.address,
      description: this.props.campuses.description,
    });
  }

  updateCampusHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitUpdatesHandler = async (event) => {
    event.preventDefault();
    const newCampus = { ...this.state };
    const updatedCampus = (
      await axios.put(`/api/campuses/${this.props.campuses.id}`, newCampus)
    ).data;

    // this.setState({
    //   name: "",
    //   address: "",
    //   description: "",
    // });

    this.props.fetchCampus(this.props.campuses.id);
  };

  render() {
    // console.log("render", this.props);
    return (
      <div>
        <form onSubmit={this.submitUpdatesHandler}>
          <h4>Update Campus</h4>
          <label>Update Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.updateCampusHandler}
            required
          />
          <label>Update Address</label>
          <input
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.updateCampusHandler}
            required
          />
          <label>Update Description</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.updateCampusHandler}
            required
          />
          <button type="submit">Submit</button>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCampus);
