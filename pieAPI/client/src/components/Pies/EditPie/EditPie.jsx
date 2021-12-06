import React, { useState } from "react"
// import "./EditPie.css"

const EditPie = props => {
    // console.log(props)

    const [editNameOfPie, setEditNameOfPie] = useState(props.pie.nameOfPie)
    const [editBaseOfPie, setEditBaseOfPie] = useState(props.pie.baseOfPie)
    const [editCrust, setEditCrust] = useState(props.pie.crust)
    const [editTimeToBake, setEditTimeToBake] = useState(props.pie.timeToBake)
    const [editServings, setEditServings] = useState(props.pie.servings)
    const [editRating, setEditRating] = useState(props.pie.rating)
    const [showModal, setShowModal] = useState(false)

    const updatePie = e => {
        e.preventDefault()

        let url = `http://localhost:4000/pies/${props.pie.id}`
        console.log("THE URL", url)

        fetch(url, {
            method: "PUT",
            body: JSON.stringify({
                nameOfPie: editNameOfPie,
                baseOfPie: editBaseOfPie,
                crust: editCrust,
                timeToBake: editTimeToBake,
                servings: editServings,
                rating: editRating
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.sessionToken
            })
        })
        .then(res => res.json())
        .then(d => null)
        .catch(err => console.log(err))
    }

    return (
        <div>
            <button onClick={updatePie}>Edit Pie</button>
        </div>
    )
}

export default EditPie