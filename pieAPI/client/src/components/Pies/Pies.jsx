import React, {useState} from 'react';
import './pies.css';

const Pies = (props) => {

    const [pies, setPies] = useState([])

    // const [NameOfPie, setNameOfPie] = useState('');
    // const [BaseOfPie, setBaseOfPie] = useState('');
    // const [Crust, setCrust] = useState('');
    // const [BakeTime, setBakeTime] = useState('');
    // const [Servings, setServings] = useState('');
    // const [Rating, setRaiting] = useState('');

    return(
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

            </tbody>
        </table>
    )
}

export default Pies