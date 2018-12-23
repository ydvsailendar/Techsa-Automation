import React, { Component } from "react";

export default class Home extends Component {
  handleApplication(){
    this.props.history.push('/application');
  }
  handleAutomation(){
    this.props.history.push('/automation');
  }
  render() {
    return (
      <div>
        <div className="parallax-container">
          <div className="parallax">
            <img
              src={require("../images/industrial-automation.jpg")}
              alt="automation"
            />
          </div>
        </div>
        <div className="section white">
          <div className="row container">
            <p className="grey-text text-darken-3 lighten-3">
              <span style={{ color: "teal" }}>TIA</span>, is the fastest growing company dedicated to industrial automation, makes its customers
              more productive and the world more sustainable. TIA is involved in the design and installation
              of complete systems for monitoring and control of industrial plants and providing spares and
              services for the same.Founded in 2018, in Pajarkatti, Nepal, TIA is now the one of growing solution provider for all kind
              of Automation challenges in the industry. We have technical expertise and are providing
              quality high-end systems to multiple industrial verticals, for a variety of different
              applications.
            </p>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img src={require("../images/beer-automation.jpg")} alt="automation" />
          </div>
        </div>
        <div className="section white">
          <div className="row container">
            <p className="grey-text text-darken-3 lighten-3">
              We Provide Service to Siemens industrial automation and drive systems. The complete range of
              products broadly includes Programmable Logic Controllers (PLCs) ranging from, Logo!,
              micro-PLC S7-200, mni-PLC S7-1200, PLC S7-300 & S7-400 series, HMI systems, Supervisory
              Control and Data Acquisition (SCADA) systems, DCS systems (Siemens PCS7), AC & DC Drives.
              We also support services for AB, VIPA, and Mitsubishi etc.
            </p>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img src={require("../images/beer-engine.jpg")} alt="automation" />
          </div>
        </div>
        <div className="section white">
          <div className="row container">
            <div className="col s6">
              <h5><i className="material-icons">settings</i> Automation Support Panels</h5>
              <ul className="collection">
                <li className="collection-item">Automattic Power Factor</li>
                <li className="collection-item">Correction Panel</li>
                <li className="collection-item">
                  <button className="btn btn-primary right" onClick={this.handleAutomation.bind(this)}>Read More</button>
                </li>
              </ul>
            </div>
            <div className="col s6">
              <h5><i className="material-icons">settings</i> Applications</h5>
              <ul className="collection">
                <li className="collection-item">Automation of whole beer plant</li>
                <li className="collection-item">Automation of Dam Gate Control</li>
                <li className="collection-item">
                  <button className="btn btn-primary right" onClick={this.handleApplication.bind(this)}>Read More</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img src={require("../images/automation.jpg")} alt="automation" />
          </div>
        </div>
      </div>
    );
  }
}
