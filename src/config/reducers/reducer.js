import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_ONE_PRODUCT
} from "../actions/actionReducer";

export const isReducer = (state = [], action) => {
  switch (action.type) {
    // nouvelle eatpe :ajoute du produits dans panier

    case ADD_PRODUCT:
      console.log(state.length - 1);
      if (
        state[0] !== null ||
        (state.length === 0 && state.findIndex(action.id) === "false")
      ) {
        console.log("Push");
        state.push(action.id); // ES6
        return state;
      } else {
        console.log("Ne Push Pas");
        return state;
      }

      // adjouter un if au cas ou
      /*  state.push(action.id); // ES6
      return state;
      console.log(state);
*/
      break;

    // nouvelle etape : la suppression du produits

    case DELETE_PRODUCT:
      state.splice(action.id, 1);
      return state;

      break;

    // nouvelle etape : La mise a jour

    case UPDATE_PRODUCT:
      console.log(state[0].compteur);
      console.log("Hello: " + state.length);
      for (var i = 0; i <= state.length - 1; i++) {
        if (state[i].compteur === action.compteur) {
          break;
        }
      }
      console.log("le dernier: " + i);
      console.log(state[i].quantite);
      state[i].quantite = state[i].quantite + 1;
      console.log("Update success: " + state[i].quantite);
      return state;
      break;

    // nouvelle etape : suppression d' produits
    case DELETE_ONE_PRODUCT:
      console.log(state[0].compteur);
      console.log("Hello: " + state.length);
      for (var i = 0; i <= state.length - 1; i++) {
        if (state[i].compteur === action.compteur) {
          break;
        }
      }
      console.log("le dernier: " + i);
      console.log(state[i].quantite);
      state[i].quantite = state[i].quantite - 1;
      console.log("Update success: " + state[i].quantite);
      return state;
      break;

    // nouvelle etape le default

    default:
      return state;
  }
  return state;
};

const recherche = (objet, value) => {
  for (var i = 0; i <= objet.length; i++) {
    if (objet[i].compteur === value) {
      console.log("Update");
      break;
    }
    return i;
  }
};

export default isReducer;
