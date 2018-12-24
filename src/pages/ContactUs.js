import React, { Component } from "react";

export default class ContactUs extends Component {
  render() {
    return (
      <div className="row">
        <h4 className="header">About Us & Our Team</h4>
        <div className="divider"></div>
        <div className="col s12 m6 l6">
          <div className="card horizontal small">
            <div className="card-image">
              <img src={require("../images/roshan.jpeg")} alt="Engineer" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h4>Roshan Yadav</h4>
                <div className="divider" />
                <p>
                  Experienced Automation Engineer with a demonstrated history of working in the
                  industrial automation industry. Skilled in instrumentation,
                  PLC Programming, AutoCAD, Matlab, Microsoft Word, Engineering, and C++.
                  Strong engineering professional with a Bachelor of Technology (B.Tech.)
                  focused in Electrical, Electronics & Communications Engineering from Lovely Professional University.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m6 l6">
          <div className="card horizontal small">
            <div className="card-image">
              <img src={require("../images/shailesh.jpg")} alt="Engineer" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h4>Shailesh Yadav</h4>
                <div className="divider" />
                <p>
                  Experienced Engineer with a demonstrated history of working in the
                  industry. Skilled in instrumentation, PLC Programming, AutoCAD, Matlab, Microsoft Word, Engineering, and C++.
                  Strong engineering professional with a Bachelor of Technology (B.Tech.)
                  focused in Electrical, Electronics & Communications Engineering from LPU.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
