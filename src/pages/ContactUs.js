import React, { Component } from "react";

export default class ContactUs extends Component {
  render() {
    return (
      <div className="row">
        <h4 className="header">About Us & Our Team</h4>
        <div className="divider"></div>
        <div className="col s12 m7 l6">
          <div className="card horizontal small">
            <div className="card-image">
              <img src={require("../images/roshan.jpg")} alt="Engineer" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h4>Roshan Yadav</h4>
                <span style={{ fontSize: "12px" }}>
                  Address: Partappur-9 Nawalparasi-Nepal
                </span>
                <span style={{ fontSize: "13px" }}>
                  <p>Email: frank.ros@gmail.com</p>
                  <p>Phone: 9826439343</p>
                </span>
                <div className="divider" />
                <p>
                  Hello. I'm Roshan Yadav Founder and one of the lead engineer
                  of the team. I have been working in this field for around 3
                  years.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m7 l6">
          <div className="card horizontal small">
            <div className="card-image">
              <img src={require("../images/shailesh.jpg")} alt="Engineer" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h4>Shailesh Yadav</h4>
                <span style={{ fontSize: "12px" }}>
                  Address: Partappur-9 Nawalparasi-Nepal
                </span>
                <span style={{ fontSize: "13px" }}>
                  <p>Email: ydvsailesh1994@gmail.com</p>
                  <p>Phone: 9849121736</p>
                </span>
                <div className="divider" />
                <p>
                  Hello. I'm Shailesh Yadav Founder and one of the lead engineer
                  of the team. I have been working in this field for around 4
                  years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
