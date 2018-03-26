import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "../css/Map.css";

export default class MapIss extends Component {
  state = {
    lat: 15.887292,
    lng: -61.313367,
    zoom: 15
  };

  render() {
    let position = [this.state.lat, this.state.lng];
    return (
      <div className="boite">
        <Map className="carte" center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <span>
                Casablanca <br /> Restaurant
              </span>
            </Popup>
          </Marker>
        </Map>
        <div className="phrase">
          <p>
            Casablanca est avant toute chose une famille avec nos clients. Vous
            avez envie de voyager.
          </p>
        </div>
      </div>
    );
  }
}
