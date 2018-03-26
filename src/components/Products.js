import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/Product.css";
import { element } from "../config/actions/action";
import Dorade from "../images/doradegrile.jpg";
import FiletP from "../images/filetdepoison.jpg";
import Ble from "../images/recetteiconnu.jpg";

class ListProduct extends Component {
  render() {
    console.log(this.props);
    console.log(this.props.listProducts);
    return (
      <div>
        <p className="title">Bienvenu a Casablanca</p>
        <div className="listProduct">
          {isListProduct.map((el, i) => {
            return (
              <div className="product" key={i}>
                <div>
                  <img className="pictureproduct" src={el.image} />
                </div>
                <div className="infoproduct">
                  <p>
                    <b> Nom :</b> {el.name}
                  </p>

                  <p>
                    <b>Descrpition :</b> {el.description}
                  </p>

                  <p>
                    <b>Prix :</b>
                    {el.prix}
                  </p>
                  <a
                    className="waves-effect waves-light btn"
                    onClick={() => {
                      this.props.isNewProduct("Dorade");
                    }}
                  >
                    <i className="material-icons right">add</i>Add product
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <p className="title">Localisation du restaurant</p>
      </div>
    );
  }
}

const isListProduct = [
  {
    name: "Salade de Dorade",
    image: Dorade,
    prix: "14€",
    description:
      "Darne de Dorade sur sa salade variée accompagner de son couli acidulé. "
  },
  {
    name: "Filet de poisson dans sa sauce",
    image: FiletP,
    prix: "17€",
    description:
      "Feuilleté de pomme de terre accompagée de son filet sur son coulis naturel."
  },
  {
    name: "Blanc fermier",
    image: Ble,
    prix: "15€",
    description:
      "Blanc fermier et son marin orangé au repos sur son nid de céreale végétale . "
  }
];

const mapStateToProps = state => {
  return {
    listProducts: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    isNewProduct: valeur => {
      dispatch(element(1, valeur, 1));
    }
  };
};

const Product = connect(mapStateToProps, mapDispatchToProps)(ListProduct);

export default Product;
