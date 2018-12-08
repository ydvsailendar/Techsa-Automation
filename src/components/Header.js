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

export default class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <div className="nav-wrapper teal">
              <Link to="/" className="brand-logo">
                <i
                  className="material-icons"
                  style={{ fontSize: "35px", paddingLeft: "20px" }}
                >
                  home
                </i>
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link to="/technology">Products & Technologies</Link>
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
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/sign">Sign Up/In</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={Home} />
          <Route path="/technology/" component={Technology} />
          <Route path="/services/" component={Services} />
          <Route path="/support/" component={Support} />
          <Route path="/career/" component={Career} />
          <Route path="/clients/" component={Clients} />
          <Route path="/gallary/" component={Gallary} />
          <Route path="/contact/" component={ContactUs} />
          <Route path="/sign/" component={Sign} />
        </div>
      </Router>
    );
  }
}
