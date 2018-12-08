import React, { Component } from "react";

export default class Company extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m3 l1" style={{ paddingTop: "35px" }}>
            <img
              src={require("../images/favicon.png")}
              alt="Logo"
              style={{ width: "80px", height: "80px" }}
            />
          </div>
          <div className="col s12 m5 l7">
            <div className="divider" />
            <div className="section">
              <h4>Techsa Industial & Automation</h4>
              <p>
                {"("}Redefining Technologies{")"}
              </p>
            </div>
          </div>
          <div className="col s12 m4 l4" style={{ paddingTop: "15px" }}>
            <h6>Contact Details</h6>
            <p>Email: frank.ros@gmail.com</p>
            <p>Phone: 9826439343, 984XXXXXXX</p>
          </div>
        </div>
      </div>
    );
  }
}
