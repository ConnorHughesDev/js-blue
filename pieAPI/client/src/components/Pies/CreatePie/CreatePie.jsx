/*

BRONZE
Create boilerplate CreatePie component. Set state vars for your request object. Default values hsould be empty str or 0s

SILVER
Within the return, create a form for each item noted in the pie model. These should have placeholders that reflect respective items. Finish off with Submit button.

GOLD
Set the value of each input field to their respective states.
Include onChange that allows infor and chage state of each item.
Attach component to the parent component.
*/

import React, { useEffect, useState } from "react"
import "./createPie.css"

const CreatePie = props => {

    const [nameOfPie, setNameOfPie] = useState("")
    const [baseOfPie, setBaseOfPie] = useState("")
    const [crust, setCrust] = useState("")
    const [timeToBake, setTimeToBake] = useState("Time To Bake")
    const [servings, setServings] = useState(undefined)
    const [rating, setRating] = useState(undefined)

    const postPie = event => {
        event.preventDefault()

        let url = "http://localhost:4000/pies/"

        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                nameOfPie: nameOfPie,
                baseOfPie: baseOfPie,
                crust: crust,
                timeToBake: timeToBake,
                servings: servings,
                rating: rating
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.sessionToken
            })
        })
        .then(res => res.json())
        .then(data => props.displayPie(false))
        .catch(err => console.log(err))

    }
    
    return (
        
        <form onSubmit={postPie}>
            <input type="text" onChange={(e) => setNameOfPie(e.target.value)} value={nameOfPie }placeholder="Name of Pie"/>
            <input type="text" onChange={(e) => setBaseOfPie(e.target.value)} value={baseOfPie} placeholder="Base of Pie"/>
            <input type="text" onChange={(e) => setCrust(e.target.value)} value={crust} placeholder="Crust"/>
            <input type="text" onChange={(e) => setTimeToBake(e.target.value)} value={timeToBake} placeholder={timeToBake}/>
            <input type="text" onChange={(e) => setServings(e.target.value)} value={servings} placeholder="Servings"/>
            <input type="text" onChange={(e) => setRating(e.target.value)} value={rating} placeholder="Rating"/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default CreatePie