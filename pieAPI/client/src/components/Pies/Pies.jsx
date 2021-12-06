import React, { useEffect, useState } from "react"
import "./pies.css"

import DisplayPies from "./Pie/Pie"
import CreatePie from "./CreatePie/CreatePie"

const Pies = props => {

    const [pies, setPies] = useState([])
    // console.log(pies)
    const [displayPie, setDisplayPie] = useState(false)

    const fetchPies = () => {
        let url = "http://localhost:4000/pies/"

        fetch(url, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.sessionToken
            })
        })
        .then(res => res.json())
        .then(data => setPies(data))
        .catch(err => console.log(err))
    }

    useEffect( () => {
        fetchPies()
    }, [displayPie])

    const buttonHandler = () => setDisplayPie(!displayPie)
   
    return(
        
        <>

            { displayPie ? <CreatePie sessionToken={props.sessionToken} displayPie={setDisplayPie} /> : null }
            { !displayPie ? <button onClick={buttonHandler}>Create Pie!</button> : null}

            <table>
                <thead>
                    <tr>
                        <th>Name of Pie</th>
                        <th>Base of Pie</th>
                        <th>Crust</th>
                        <th>Bake Time</th>
                        <th>Servings</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <DisplayPies pie={pies} sessionToken={props.sessionToken}/>
                </tbody>
            </table>
        </>
    )
}

export default Pies