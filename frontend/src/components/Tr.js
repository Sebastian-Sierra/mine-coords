import React, { Component } from "react";

class Tr extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.lugar}</td>
                <td>{this.props.data.posX}</td>
                <td>{this.props.data.posY}</td>
                <td>{this.props.data.posZ}</td>
                <td>
                    <button className="btn btn-danger">Eliminar</button>
                </td>
            </tr>
        )
    }
}

export default Tr;