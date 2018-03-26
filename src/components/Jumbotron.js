import React, { Component } from "react";

import "../css/jumbotron.css";

class Jumbotron extends Component {
  render() {
    return (
      <div className="Jumbotroncontainer">
        <div className="Jumbotron">
          <span className="sentence">
            <em>Votre repas en un clique</em>
          </span>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
