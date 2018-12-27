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
          <ul id="dropdown1" className="dropdown-content">
            <li>
              <Link className="dropdown-trigger" to="#" data-target="dropdown2">AC Drives</Link>
            </li>
            <li><Link to="#">DC Drives</Link></li>
            <li><Link to="#">Servo Drives</Link></li>
            <li><Link to="#">PLC</Link></li>
            <li><Link to="#">(HMI) Human Machine Interface</Link></li>
          </ul>
          {/* <ul id="dropdown2" className="dropdown-content">
            <li><Link to="#">Heroic</Link></li>
            <li><Link to="#">Villians</Link></li>
          </ul> */}
          <nav>
            <div className="nav-wrapper teal">
              <Link to="/" onClick="$('.parallax').parallax()" className="brand-logo">
                <i
                  className="material-icons"
                  style={{ fontSize: "35px", paddingLeft: "20px" }}
                >
                  home
                </i>
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link className="dropdown-trigger1" to="#" data-target="dropdown1">Products & Technologies</Link>
                </li>
                <li>
                  <Link to="/event">Training & Events</Link>
                </li>
                <li>
                  <Link to="/services">Solutions & Services</Link>
                </li>
                <li>
                  <Link to="/clients">Sales & Clients</Link>
                </li>
                <li>
                  <Link to="/support">Support</Link>
                </li>
                <li>
                  <Link to="/career">Career</Link>
                </li>
                <li>
                  <Link to="/gallary">Gallary</Link>
                </li>
                <li>
                  <Link to="/contact">About Us</Link>
                </li>
                <li>
                  <Link to="/sign">Sign Up || Sign In</Link>
                </li>
              </ul>
            </div>
          </nav>
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
