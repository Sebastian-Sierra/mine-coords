import React, { Component } from "react";

class TrNewCoords extends Component {
  render() {
    return (
      <tr>
        {/* <form> */}
          <td className="px-2">
            <input className="form-control" type="text" placeholder="Lugar" />
          </td>
          <td className="px-2">
            <input className="form-control" type="text" placeholder="X" />
          </td>
          <td className="px-2">
            <input className="form-control" type="text" placeholder="Y" />
          </td>
          <td className="px-2">
            <input className="form-control" type="text" placeholder="Z" />
          </td>
          <td>
            <button className="btn btn-success">Agregar</button>
          </td>
        {/* </form> */}
      </tr>
    )
  }
}

export default TrNewCoords;