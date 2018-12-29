import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Support from "../pages/Support";
import Career from "../pages/Career";
import Clients from "../pages/Clients";
import Gallary from "../pages/Gallary";
import ContactUs from "../pages/ContactUs";
import Sign from "../pages/Sign";
import Technology from "../pages/Technology";
import Events from "../pages/Events";
import Application from "../pages/Application";
import Automation from "../pages/Automation";

export default class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul id="slide-out" className="sidenav">
            <li>
              <Link
                to="/"
                onClick={`$('.parallax').parallax()`}
                className="brand-logo"
              >
                <i className="material-icons">home</i>Home
              </Link>
              <div className="divider" />
            </li>
            <li>
              <ul className="collapsible">
                <li style={{ paddingLeft: "13px" }}>
                  <div className="collapsible-header">
                    <i className="material-icons">computer</i>Products &
                    Technologies
                  </div>
                  <div className="collapsible-body">
                    <ul>
                      <li>
                        <ul className="collapsible">
                          <li>
                            <div className="collapsible-header">AC Drives</div>
                            <div className="collapsible-body">
                              <ul>
                                <li>
                                  <ul className="collapsible">
                                    <li>
                                      <div className="collapsible-header">
                                        Micromaster
                                      </div>
                                      <div className="collapsible-body">
                                        <ul>
                                          <li>
                                            <Link to="#">MM420</Link>
                                          </li>
                                          <li>
                                            <Link to="#">MM430</Link>
                                          </li>
                                          <li>
                                            <Link to="#">MM440</Link>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <ul className="collapsible">
                                    <li>
                                      <div className="collapsible-header">
                                        Sinamics
                                      </div>
                                      <div className="collapsible-body">
                                        <ul>
                                          <li>
                                            <Link to="#">G110</Link>
                                          </li>
                                          <li>
                                            <Link to="#">G120 (PM230, PM240)</Link>
                                          </li>
                                          <li>
                                            <Link to="#">G130</Link>
                                          </li>
                                          <li>
                                            <Link to="#">V20</Link>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <ul className="collapsible">
                          <li>
                            <div className="collapsible-header">DC Drives</div>
                            <div className="collapsible-body">
                              <ul>
                                <li>
                                  <Link to="#">
                                    Simoreg DC Master Drive(6RA70)
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">Sinamics DC Drive(6RA80)</Link>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <ul className="collapsible">
                          <li>
                            <div className="collapsible-header">
                              Servo Drives
                            </div>
                            <div className="collapsible-body">
                              <ul>
                                <li>
                                  <Link to="#">V60</Link>
                                </li>
                                <li>
                                  <Link to="#">Sinamics S110</Link>
                                </li>
                                <li>
                                  <Link to="#">Sinamics S120</Link>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <ul className="collapsible">
                          <li>
                            <div className="collapsible-header">PLC</div>
                            <div className="collapsible-body">
                              <ul>
                                <li>
                                  <Link to="#">LOGO</Link>
                                </li>
                                <li>
                                  <Link to="#">S7 200</Link>
                                </li>
                                <li>
                                  <Link to="#">S7 300</Link>
                                </li>
                                <li>
                                  <Link to="#">S7 400</Link>
                                </li>
                                <li>
                                  <Link to="#">S7 1200</Link>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <ul className="collapsible">
                          <li>
                            <div className="collapsible-header">
                              (HMI) Human Machine Interface
                            </div>
                            <div className="collapsible-body">
                              <ul>
                                <li>
                                  <Link to="#">TD 200</Link>
                                </li>
                                <li>
                                  <Link to="#">TD 400</Link>
                                </li>
                                <li>
                                  <Link to="#">TD 177A</Link>
                                </li>
                                <li>
                                  <Link to="#">OP 77B</Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    KTP 600(Basic Color & Mono)
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">KP 300</Link>
                                </li>
                                <li>
                                  <Link to="#">KTP 400</Link>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/event">
                <i className="material-icons">event</i>Training & Events
              </Link>
            </li>
            <li>
              <Link to="/services">
                <i className="material-icons">settings</i>Solutions & Services
              </Link>
            </li>
            <li>
              <Link to="/clients">
                <i className="material-icons">people_outline</i>Sales & Clients
              </Link>
            </li>
            <li>
              <Link to="/support">
                <i className="material-icons">help</i>Support
              </Link>
            </li>
            <li>
              <Link to="/career">
                <i className="material-icons">business_center</i>Career
              </Link>
            </li>
            <li>
              <Link to="/gallary">
                <i className="material-icons">image</i>Gallary
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <i className="material-icons">business</i>About Us
              </Link>
            </li>
            <li>
              <Link to="/sign">
                <i className="material-icons">person_outline</i>Sign Up || Sign
                In
              </Link>
            </li>
            <div className="divider" />
          </ul>
          <div className="container-fluid teal">
            <a href="#!" data-target="slide-out" className="sidenav-trigger">
              <i
                className="material-icons medium"
                style={{ color: "black" }}
              >
                menu
              </i>
            </a>
          </div>
          <Route path="/" exact component={Home} />
          <Route path="/technology/" component={Technology} />
          <Route path="/event/" component={Events} />
          <Route path="/services/" component={Services} />
          <Route path="/support/" component={Support} />
          <Route path="/career/" component={Career} />
          <Route path="/clients/" component={Clients} />
          <Route path="/gallary/" component={Gallary} />
          <Route path="/contact/" component={ContactUs} />
          <Route path="/sign/" component={Sign} />
          <Route path="/automation/" component={Automation} />
          <Route path="/application/" component={Application} />
        </div>
      </Router>
    );
  }
}
