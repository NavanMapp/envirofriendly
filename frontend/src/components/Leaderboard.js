import React, { useEffect, useState } from 'react';
import { createAPIEndpoint } from '../API/api';

/**
 * 
 * @returns Overview of recycling entries made by users
 * Sorting/Categorizing of waste/recycling entries.
 * A leaderboard of who made the most entries to encourage 
 * a healthy competition to get waste of the community and to dumpsites
 * An incentive is given per entry. Scrap for cash concept.
 */

export default function Leaderboard() {

    const [selectOption, setSelectedOption] = useState('');
    const [item, setItem] = useState([]);
    const [record, setRecord] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

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
                    alert("API did not return an array", data)
                }
            })
            .catch((error) => alert("Error when fetching from backend", error))

    }, [])

    function handleViewAll(e) {

        setLoading(true);
        setError("");
        setRecord([]);

        createAPIEndpoint('records')
        .getAllRecords()
        .then((response) => {
            setRecord(response.data);
        })
        .catch((error) => {
            setError("Records cannot be found.");
            alert("Records not found: ", error);
        })
        .finally(() => setLoading(false));
    }

    function handleCategory(e) {
        
        const type = e.target.value;
        setSelectedOption(type);
        
        setLoading(true);
        setError('');

        createAPIEndpoint('category/')
            .getByType(type)
            .then((response) => {
                setRecord(response.data);
                console.log(response.data);
            }).catch((error) => {
                setError('Records cannot be found. Please try again!');
                console.error('Error when fetching the records: ', error);
            }).finally(() => setLoading(false));
    }

    const columnKeys = Object.keys(record[0] || {});

    return (
        <div className='p-4'>
            <h2>Dashboard: Dynamic recycling table view</h2>
            <div className='select-category p-2'>
                <select value={selectOption} onChange={handleCategory}>
                    <option value='' > *** Select To Sort Type ***</option>
                    {item.map((key) => (
                        <option key={key} value={key} >{key}</option>
                    ))}
                </select>
                {selectOption && <p>Selected: {selectOption}</p>}
            </div>
            <button type='submit' className='btn btn-success w-10' onClick={handleViewAll} >All Records</button>
            <div className='dashboard p-4'>
                {record.length > 0 && (
                    <table className='table table-bordered custom-table' border='1'>
                        <thead className='table-success'>
                            <tr>
                                {columnKeys.map((key) => (
                                    <th key={key}>{key}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {record.map((record) => (
                                <tr key={record.id}>
                                    {columnKeys.map((key) => (
                                        <td key={`${record.id}-${key}`}>{record[key]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                {record.length === 0 && !loading && selectOption && (
                    <p>No records found for the selcted type</p>
                )}
            </div>
        </div>
    )
}

