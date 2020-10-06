import React, { Component } from 'react';
import './App.css';

import Tr from "./components/Tr";
import TrNewCoords from "./components/TrNewCoords";

class App extends Component {

  state = {
    data: [
      {
        lugar: "Spawn",
        posX: "0",
        posY: "63",
        posZ: "0",
      },
      {
        lugar: "Isla de setas",
        posX: "150",
        posY: "63",
        posZ: "-90",
      }
    ]
  };

  rows = this.state.data.map((d, index) =>
    <Tr key={index} data={d} />
  );

  render() {
    return (
      <div className="container my-4">
        <div className="card">
          <div className="card-head bg-dark text-white text-center">
            <h1>Minecraft - Coordenadas</h1>
          </div>
          <div className="card-body p-0">
            <table className="table table-striped table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>Lugar</th>
                  <th>X</th>
                  <th>Y</th>
                  <th>Z</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <TrNewCoords />
                {this.rows}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
