import React, { Component } from "react";
import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import StudentList from "./StudentList/StudentList";
import CampusList from "./CampusList/CampusList";
import Home from "./Home/Home";
import SingleStudent from "./SingleStudent/SingleStudent";
import SingleCampus from "./SingleCampus/SingleCampus";

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  async componentDidMount() {}

  render() {
    return (
      <div className="App" style={{ backgroundColor: "lightpink" }}>
        <Navbar />
        <HashRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/students" component={StudentList} exact />
            <Route path="/campuses" component={CampusList} exact />
            <Route path="/students/:id" component={SingleStudent} exact />
            <Route path="/campuses/:id" component={SingleCampus} exact />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;

/**
 * Questions
 *
 * 1) Why am I having an issue with importing/exporting db when I break files up?
 */

/**
 * TODO:
 *
 * 1) FIX IMAGE URLS FOR CAMPUSES AND MAKE THEM DISPLAY SOMETHING
 * 2) MAKE THE DEFAULT IMAGE SRC ACTUALLY DISPLAY SOMETHING YOU'D WANT PEOPLE TO SEE BY DEFAULT
 *
 *
 * Main Page get rid of all the unnecessary passing down of props, it defeats the purpose of it using mapstatetoprops
 *
 * Don't pass anything, just
 *
 *
 *
 * //
 */
