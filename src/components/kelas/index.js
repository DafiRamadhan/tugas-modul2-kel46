import React, { Component } from "react";
import "./index.css";

export default class notice extends Component {
  render() {
    return (
      <div className="identity">
        <div className="container">
          <div className="card">
            <div>
              <img src={this.props.image} alt="Gambar" className="gambar" />
            </div>
            <div className="text">
              <h4 className="nama">{this.props.nama}</h4>
              <h4 className="nim">NIM : {this.props.nim}</h4>
              <h4 className="angkatan">Angkatan : {this.props.angkatan}</h4>
              <tr />
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}
