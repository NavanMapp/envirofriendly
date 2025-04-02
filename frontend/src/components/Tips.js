import React, { useEffect, useState } from 'react'
import { createAPIEndpoint } from '../API/api'
import cycleImg from '../images/cycle.jpg'

function Tips() {

  const [tips, setTips] = useState([]);
  const [error, setError] = useState("");
  const [selectedOption, setSelectedOption] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/api/recycling/types')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response Not Ok.");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setItems(data);
        } else {
          setError("API cannot retrieve the types requested");
        }
      }).catch((error) => {
        setError("Error fetching types from backend: ", error)
      })
  },[])

  function handleTips(e) {
    e.preventDefault()

    const type = e.target.value;
    setSelectedOption(type);
    setLoading(true);
    setError('');

    createAPIEndpoint()
      .getTipsByType(type)
      .then((response) => {
        setTips(response.data);
      }).catch((error) => {
        setError(error);
        console.error('We couldnt find the tips, check your code!', error);
      }).finally(() => {
        setLoading(false);
      })
  }

  return (
    <div class='mt-3 p-2'>
      <div>
        <h2 className='hero-heading text-center'>Welcome to EnviroFriendly, Turn Your Recycling Knowledge Into Wealth!</h2>
        <p className='mb-4'>
          Join our mission to create a cleaner, greener world while earning
          cash for your efforts. The more you recycle with us, the more you earn!
          Simply use the form below to log your recyclable waste. Your contributions
          will be tracked on our leaderboard, showcasing the top recyclers who are making a
          real impact.
        </p>
        <p className='highlight'>
          Together, we can reduce waste, protect the environment, and reward those who care
          for the planet. Start recycling today and inspire others to join the movement! 🌍💚
        </p>
      </div>

      <h2 className='text-center mb-4'>Recycling Tips and Guidelines</h2>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <div className='nav-pills' >
            <select value={selectedOption} onChange={handleTips} className='form-select mb-3'>
              <option value=''>*** Recycling Tips by Type ***</option>
              {items.map((key) => (
                <option key={key}>{key}</option>
              ))}
            </select>
            {selectedOption && <p>Selected: {selectedOption}</p>}

            <div className='tab-content' id='v-pills-tabContent'>
              {tips.map((tip) => (
                <p key={tip} value={tip}>
                  {tip}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className='col-md-4 text-center'>
          <img src={cycleImg} className='img-fluid rounded-right' alt='Recycle-Icon' />
        </div>
      </div>
    </div>
  )
}

export default Tips