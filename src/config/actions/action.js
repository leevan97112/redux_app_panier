export let element = (id, title, quantite) => {
  id = parseInt(id);
  let compteur = id + 1;
  return {
    type: "ADD_PRODUCT",
    id: { compteur, title, quantite }
  };
};

export let deleteAllElement = id => {
  return {
    type: "DELETE_PRODUCT",
    id
  };
};

export let deleteElement = compteur => {
  compteur++;
  return {
    type: "DELETE_ONE_PRODUCT",
    compteur
  };
};

export let updateElement = compteur => {
  compteur++;
  return {
    type: "UPDATE_PRODUCT",
    compteur
  };
};
