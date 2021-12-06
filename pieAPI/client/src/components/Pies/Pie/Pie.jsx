import React from "react";
import "./pie.css"
import EditPie from "../EditPie/EditPie";

const DisplayPies = props => {
    console.log(props.pie)
    return (
        <>
            {
                props.pie.map((pies, key) => {
                    console.log(pies, key)
                    return (
                        <tr key={key}>
                            <td>{pies.nameOfPie}</td>
                            <td>{pies.baseOfPie}</td>
                            <td>{pies.crust}</td>
                            <td>{pies.timeToBake}</td>
                            <td>{pies.servings}</td>
                            <td>{pies.rating}</td>
                            <td><EditPie pie={pies} sessionToken={props.sessionToken } /></td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default DisplayPies