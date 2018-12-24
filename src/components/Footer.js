import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
    this.getBody = this.getBody.bind(this);
  }
  componentDidMount() {
    setInterval(this.getBody, 3000);
  }

  getBody() {
    (this.state.count === 4) ?
      this.setState({ count: 1 }) :
      this.setState({ count: this.state.count + 1 });
  }

  getContainer() {
    switch (this.state.count) {
      case 1:
        return (
          <div>
            <h5 className="grey-text text-darken-4">Laxmi Industry</h5>
            <p className="grey-text text-darken-4">We have hired Techsa few times and every time we have been more then satisfied with the services thet provide.</p>
          </div>
        )
      case 2:
        return (
          <div>
            <h5 className="grey-text text-darken-4">Ma Durga Industry</h5>
            <p className="grey-text text-darken-4">Techsa has been that one team which has always provided us the best timely solutions.</p>
          </div>
        )
      case 3:
        return (
          <div>
            <h5 className="grey-text text-darken-4">Hunger Industrial</h5>
            <p className="grey-text text-darken-4">Techsa Automation has been the best service provider so far for us.</p>
          </div>
        )
      case 4:
        return (
          <div>
            <h5 className="grey-text text-darken-4">Dantey Industry</h5>
            <p className="grey-text text-darken-4">Techsa Automation has made us trust the online service provider with this quick and timely service.</p>
          </div>
        )
      default:
        return (
          null
        )
    }
  }

  render() {
    return (
      <footer className="page-footer teal">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Hear what our clients says about us</h5>
              <div>
                {this.getContainer()}
              </div>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Social Links</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    <img src={require('../images/instagram.png')} alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    <img src={require('../images/twitter.png')} alt="Twitter" />
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    <img src={require('../images/facebook.png')} alt="Facebook" />
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    <img src={require('../images/website.png')} alt="Website" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2014 Copyright Techsa Industrial and Automations
            <a className="grey-text text-lighten-4 right" href="https://ydvsailendar.github.io/">
              Designer & Developer ydvsailendar
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
