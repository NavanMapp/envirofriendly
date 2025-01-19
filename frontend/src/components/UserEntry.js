import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createAPIEndpoint } from '../API/api';

function UserEntry() {

    const [item, setItem] = useState([]);
    const [selectOption, setSelectOption] = useState('');
    const [setSubmit] = useState([]);
    const [name, setName] = useState([]);
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');
    const [location, setLocation] = useState('');
    const [error, setError] = useState({});

    useEffect(() => {
        fetch('http://localhost:8080/api/recycling/types')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('network response not ok');
                }
                return response.json();
            })
            .then((data) => {
                if (Array.isArray(data)) {
                    setItem(data);
                } else {
                    console.error('API did not return an array', data)
                }
            })
            .catch((error) => alert('Error when fetching from backend', error))

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
                alert('You have successfully added a recycle record, go' 
                  + 'view the dashboard for your entry reference', response.data);
                window.location.reload();
            }).catch((error) => {
                setError('Failed to add recycle record. Please try again.');
                console.error('Error when adding recycle record: ', error);
            });
    }

    return (
<div className='container'>
  <h3 className='text-center mb-4'>Recycle for Cash Calculator</h3>
  <form className='input-group mb-5' onSubmit={handleSubmit}>
    <div className='row g-3'>

      <div className='col-md-6'>
        <div className='row g-3 align-items-center'>
          <div className='col-md-6'>
            <label htmlFor='name' className='form-label'>Name</label>
            <input type='text' placeholder='Enter Your Name' name='name' required
              onChange={(e) => setName(e.target.value)} className='form-control' />
          </div>
          <div className='col-md-6'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='text' placeholder='Enter Your Email' name='email' required
              onChange={(e) => setEmail(e.target.value)} className='form-control' />
          </div>
        </div>
      </div>

      <div className='col-md-6'>
        <div className='row g-3 align-items-center'>
          <div className='col-md-6'>
            <label htmlFor='type' className='form-label'>Choose Type to Recycle:</label>
            <select value={selectOption}
              onChange={(e) => setSelectOption(e.target.value)} className='form-control'>
              <option value=''>--Select a type--</option>
              {item.map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
          </div>
          <div className='col-md-6'>
            <label htmlFor='quantity' className='form-label'>Quantity</label>
            <input type='number' step='0.01' placeholder='Quantity' name='quantity' required
              onChange={(e) => setAmount(e.target.value)} className='form-control' />
          </div>
        </div>
      </div>

      <div className='col-md-3'>
        <label htmlFor='location' className='form-label'>Location</label>
        <input type='text' placeholder='Lets Find You Closest Recycle Site' name='location' required
          onChange={(e) => setLocation(e.target.value)} className='form-control' />
      </div>

      <div className='col-md-12 mt-3'>
        <button type='submit' className='btn btn-success w-100'>Submit</button>
      </div>
    </div>
  </form>
</div>

    )

}

export default UserEntry