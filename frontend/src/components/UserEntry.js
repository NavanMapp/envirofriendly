import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function UserEntry() {

    const [item, setItem] = useState([]);
    const [selectOption, setSelectOption] = useState('');
    const [submit,setSubmit]=useState([]);

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
                    console.error("API fif not return an array", data)
                }
            })
            .catch((error) => console.error("Error when fetching from backend", error))
    }, [])

    function handleChange(e) {
        e.preventDefault();
        setSelectOption(e.target.value);
        console.log("Selected type: ", e.target.value);
    }

    function handleClick(e) {
        e.preventDefault();
    }

    return (
        <div className='container'>
            <section className='input-group'>
                <label htmlFor='name'>Name</label>
                <input type='text' placeholder='Enter Your Name' name='name' required
                    onChange={(e) => handleChange(e)} >
                </input>

                <label htmlFor='email'>Email</label>
                <input type='text' placeholder='Enter Your Email' name='email' required
                    onChange={(e) => handleChange(e)} >
                </input>

                <label htmlFor='type'>Choose Type to Recycle:</label>

                <select id="recycle-dropdown" value={selectOption} onChange={handleChange}>
                    <option value="">--Select a material--</option>
                    {item.map((key) => (
                        <option key={key} value={key}>
                            {key}
                        </option>
                    ))}
                </select>
                {/* <p>Select material: {selectOption}</p> */}

                <label htmlFor='quantity'>Quantity</label>
                <input type='double' placeholder='Amount of waste in KG'
                    name='quantity' required
                    onChange={(e) => handleChange(e)}>
                </input>

                <label htmlFor='location'>Location</label>
                <input type='text' placeholder='Lets Find You Closest Recycle Site'
                    name='location' required
                    onChange={(e) => handleChange(e)}>
                </input>

                <button type='button' className='btn btn-outline-success' onClick={(e) => handleClick(e)}>Submit</button>
            </section>
        </div>
    )
}

export default UserEntry