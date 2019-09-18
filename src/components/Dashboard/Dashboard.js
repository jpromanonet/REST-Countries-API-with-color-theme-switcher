import React, { Component } from "react";
import styles from "./Dashboard.module.scss";
import NavBar from "../NavBar/NavBar";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <header className={styles.dashboard}>
          <NavBar
            darkMode={this.props.darkMode}
            appModeChanger={this.props.appModeChanger}
          />
        </header>
        {/* <main className="dashboard"></main> */}
        {/* <footer className="dashboard"></footer> */}
      </React.Fragment>
    );
  }
}
export default Dashboard;
