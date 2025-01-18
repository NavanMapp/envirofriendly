import React, { useState } from 'react';
import { createAPIEndpoint } from '../API/api';

/**
 * 
 * @returns Overview of recycling entries made by users
 * Sorting/Categorizing of waste/recycling entries.
 * A leaderboard of who made the most entries to encourage 
 * a healthy competition to get waste of the community and to dumpsites
 * An incentive is given per entry. Scrap for cash concept.
 */

function Dashboard() {

    const [selectOption, setSelectedOption] = useState('');

    function handleChange(e) {
        e.preventDefault();
    }

    return (
        <div>
            <div className='select-category'>
                <select id='category' value={selectOption} onChange={handleChange}>
                    <option value='' disabled>
                        Select an option
                    </option>
                </select>
                {selectOption && <p>Select: {selectOption}</p>}
            </div>

            <div className='dashboard'>
                {/* fetch and display the leaderboard or types of waste categories */}
            </div>
        </div>
    )
}

export default Dashboard