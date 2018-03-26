import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./config/store/store.js";
/*import {
  element,
  deleteElement,
  updateElement,
  deleteAllElement
} from "./config/actions/action.js";*/
import registerServiceWorker from "./registerServiceWorker";
/*
store.dispatch(element(0, 12, "produits 1"));
store.dispatch(element(1, 5, "produits 2"));
store.dispatch(element(2, 2, "produits 3"));

//deuxieme etape deleteAllElement
console.log(store.getState());
store.dispatch(deleteAllElement(1));

//troisieme etapes updateElement
console.log(store.getState());
store.dispatch(updateElement(2));

//
//console.log("Etat actuel: " + store.getState());
//store.dispatch(updateElement(0));
console.log(store.getState());
store.dispatch(deleteElement(0));
*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
