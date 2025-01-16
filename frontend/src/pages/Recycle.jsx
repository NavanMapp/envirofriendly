import React, { useState } from 'react'

/**
 * 
 * @returns Opening page of the app
 * combining Navbar & Add details components
 */

function Recycle() {

  const [ selectOption, setSelectOption ] = useState('');

  function handleChange(e){
    e.preventDefault();

    setSelectOption(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault()
  }

  return (
    <div>
      
      {/* Fetch the from the backend and display them here
             Every 15 seconds, tips of different waste types
             are displayed.
          */}

      <div className='tips' >
        <p>TIPS</p>
        
        {/* A slide of different waste pictures displayed here to raise awareness */}

      </div>
      <section>
        <label htmlFor='name'>Name</label>
        <input type='text' placeholder='Enter Your Name' name='name' required
          onChange={(e) => handleChange(e)} >
        </input>

        <label htmlFor='email'>Email</label>
        <input type='text' placeholder='Enter Your Email' name='email' required
          onChange={(e) => handleChange(e)} >
        </input>  

        <label htmlFor='type'>Choose Type to Recycle:</label>
        <select id='type' value={selectOption} onChange={(e) => handleChange(e)}>
          <option value={selectOption} disabled>
            Select a type
          </option>
        </select>
        
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

        <button onClick={(e) => handleClick(e)}></button>
      </section>
    </div>
  )
}

export default Recycle