import React, { useState } from 'react'
import { createAPIEndpoint } from '../API/api'

function Tips() {

  const [tips, setTips] = useState([]);
  const [error, setError] = useState("");
  const [ seletedOption, setSeletedOption ] = useState('');
  const [ items, setItems ] = useState([]);

  function handleTips() {

    setError('');
    setTips([]);

    createAPIEndpoint()
      .fetchById()
      .then((response) => {
        setTips(response.data);
        console.log('We found the tips: ', response.data)
      }).catch((error) => {
        setError(error);
        console.error('We couldnt find the tips, check your code!', error);
      })
  }

  return (
    <div>

      {/* Fetch the from the backend and display them here
             Every 15 seconds, tips of different waste types
             are displayed.
          */}
        <select value={seletedOption} onChange={handleTips}>
          <option value=''>*** Select an option ***</option>
          {items.map((key) => (
            <option key={key}>{key}</option>
          ))}
        </select>

      <div className='tips' >
        {tips.map((tip) => (
          <p key={tip} value={tip}>
            {tip}
          </p>
        ))}
      </div>
      <div className='images'>

        {/* A slide of different waste pictures displayed here to raise awareness */}

      </div>
    </div>
  )
}

export default Tips