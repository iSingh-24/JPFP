import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampuses } from "../../actions/index";

class CampusList extends Component {
  async componentDidMount() {
    await this.props.fetchCampuses();
    console.log(this.props);
  }

  render() {
    let campusList = null;
    if (this.props.campuses.length) {
      campusList = this.props.campuses.map((campus) => (
        <div key={campus.id}>
          <img height="130" src={campus.imageUrl} />
          <p>
            <a href={`#/campuses/${campus.id}`}>{campus.name}</a>
          </p>
        </div>
      ));
    }
    return <div>{campusList}</div>;
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
