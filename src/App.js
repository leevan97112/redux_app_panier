import React, { Component } from "react";
import Header from "./components/header.js";
import Jumbotron from "./components/Jumbotron";
import Product from "./components/Products";
import Map from "./components/Mapy";
import Footer from "./components/Footer";
import { connect } from "react-redux";
import {
  element,
  deleteElement,
  updateElement,
  deleteAllElement
} from "./config/actions/action.js";
import "./css/App.css";
import Products from "./components/Products.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Jumbotron />
        <Product />
        <Map />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    test: state
  };
};

const mapDispatchToProps = dispatch => {
  console.log();
  return {
    // Add element
    onclick: e => {
      dispatch(element);
    },
    // remove All Element
    removeAllElement: () => {
      dispatch(deleteAllElement(0));
    },
    // update element
    update: () => {
      dispatch(updateElement(0));
    },
    // remove Element
    removeElement: () => {
      dispatch(deleteElement(0)); // revoir les elements
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
