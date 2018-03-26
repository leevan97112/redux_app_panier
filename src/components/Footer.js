import React, { Component } from "react";

import "../css/Footer.css";

/*
<a className="grey-text text-lighten-3" href="#!">
                  <i className="fa fa-2x fa-instagram" />

*/

class Footer extends Component {
  render() {
    return (
      <footer className="fopage-footer">
        <div className="Fosocialmedia">
          <a className="grey-text text-lighten-3" href="#!">
            <i className="fa fa-2x fa-instagram" />
          </a>
          <a className="grey-text text-lighten-3" href="#!">
            <i className="fa fa-2x fa-facebook" />
          </a>
          <a className="grey-text text-lighten-3" href="#!">
            <i className="fa fa-2x fa-twitter" />
          </a>
        </div>
        <div className="Focontainer">
          <p>Made with M.L.D.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
