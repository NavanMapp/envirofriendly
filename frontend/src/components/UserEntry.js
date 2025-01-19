import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createAPIEndpoint } from '../API/api';

function UserEntry() {

    const [item, setItem] = useState([]);
    const [selectOption, setSelectOption] = useState('');
    const [setSubmit] = useState([]);
    const [name, setName] = useState([]);
    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState("");
    const [location, setLocation] = useState("");
    const [error, setError] = useState({});

    useEffect(() => {
        fetch("http://localhost:8080/api/recycling/types")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("network response not ok");
                }
                return response.json();
            })
            .then((data) => {
                if (Array.isArray(data)) {
                    setItem(data);
                } else {
                    console.error("API did not return an array", data)
                }
            })
            .catch((error) => console.error("Error when fetching from backend", error))

    }, [])

    function handleSubmit(e) {
        e.preventDefault();

        const addRecord = {
            name: name,
            email: email,
            type: selectOption,
            location: location,
            quantity: amount,
        };

        createAPIEndpoint('add')
            .post(addRecord)
            .then((response) => {
                console.log("You have successfully added a recycle record, go view the dashboard for your entry reference", response.data);
            }).catch((error) => {
                setError("Failed to add recycle record. Please try again.");
                console.error("Error when adding recycle record: ", error);
            });           
    }

    return (
        <div className='container'>
            <form className='input-group' onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' placeholder='Enter Your Name' name='name' required
                    onChange={(e) => setName(e.target.value)} />

                <label htmlFor='email'>Email</label>
                <input type='text' placeholder='Enter Your Email' name='email' required
                    onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor='type'>Choose Type to Recycle:</label>
                <select value={selectOption} 
                    onChange={(e) => setSelectOption(e.target.value)}>
                    <option value="">--Select a type--</option>
                    {item.map((key) => (
                        <option key={key} value={key}>
                            {key}
                        </option>
                    ))}
                </select>

                <label htmlFor='quantity'>Quantity</label>
                <input type='number' step='0.01' placeholder='Quantity'
                    name='quantity' required
                    onChange={(e) => setAmount(e.target.value)} />

                <label htmlFor='location'>Location</label>
                <input type='text' placeholder='Lets Find You Closest Recycle Site'
                    name='location' required
                    onChange={(e) => setLocation(e.target.value)} />

                <button type='submit' className='btn btn-outline-success'>Submit</button>
            </form>
        </div>
    )

}

export default UserEntry