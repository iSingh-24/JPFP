// import React from "react";
// import Campus from "./Campus";

// const CampusList = (props) => {
//   const campusNames = props.campuses.map((campus, index) => (
//     <Campus name={campus.name} key={index} student={campus.students} />
//   ));

//   return <div>{campusNames}</div>;
// };

// export default CampusList;

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampuses } from "../../actions/index";
import Campus from "./Campus";

class CampusList extends Component {
  async componentDidMount() {
    await this.props.fetchCampuses();
    console.log(this.props);
  }

  render() {
    let campusList = null;
    if (this.props.campuses.length) {
      campusList = this.props.campuses.map((campus) => (
        <Campus key={campus.id} name={campus.name} imgUrl={campus.imageUrl} />
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
