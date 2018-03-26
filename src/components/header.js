import React, { Component } from "react";
import "../css/Header.css";

class Header extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <div className="nav-wrapper">
          <h4 className="logo">Casablanca</h4>

          <div className="Hcontainer">
            <a className="navButton" data-toggle="modal" data-target="#myModal">
              <i className="material-icons">shopping_cart</i>
              <span className="badge">0</span>
            </a>
            <div className="modal fade" id="myModal" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                    <h4 className="modal-title">Panier</h4>
                  </div>
                  <div className="modal-body" />
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/*
            <div className="modal fade" id="myModal" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                    <h4 className="modal-title">Panier</h4>
                  </div>
                  <div className="modal-body" />
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
