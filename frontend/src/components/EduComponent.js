import React, { useEffect, useState } from 'react'
import { createAPIEndpoint } from '../API/api';

function EduComponent() {
    const [ tips, setTips ] = useState([]);
    const [ error, setError ] = useState();

useEffect(() =>{
    setError('');

    createAPIEndpoint()
    .getTips()
    .then((response) => {
        console.log('response: ', response);
        if (!response.ok) {
            throw new Error("Network response not ok");
        }
        return response.json(); 
    })
    .then((data) => {
        console.log('Data: ', data);
        
        if (Array.isArray(data)) {
        setTips(data);
        } else {
            alert('API did not return the array required.')
        }
    }).catch((error) => {
        console.error(error);
        setError('There was an error fetching the tips. Please try again later.');
    })
},[])

    const columnKeys = Object.keys(tips[0] || {});

    return (
        <div className='p-4 mt-3 mb-2'>
            <div class='mb-4'>
                <p>Recycling waste doesn’t just help the planet—it can help your pocket too! By using our platform, you can earn cash for every piece of recyclable waste you contribute.</p>
                <p>Check the leaderboard to see how you rank among other recyclers. The more you recycle, the higher your earnings and impact on the environment!</p>
                <p class='highlight'>Let’s work together to reduce waste, promote sustainability, and build a better future for everyone.</p>
            </div>

            <div>
                {tips.length > 0 ? (
                    <table className="table table-bordered custom-table" border="1">
                        <thead className="table-success">
                            <tr>
                                {columnKeys.map((key) => (
                                    <th key={key}>{key}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {tips.map((tip) => (
                                <tr key={tip.id}>
                                    {columnKeys.map((key) => (
                                        <td key={`${tip.id}-${key}`}>{tip[key]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Loading tips...</p>
                )}
            </div>
        </div>
    )
}

export default EduComponent
