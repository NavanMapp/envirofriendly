import React, { useEffect, useState } from 'react';
import { createAPIEndpoint } from '../API/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

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
    const [error, setError] = useState('');
    const [edit, setEdit] = useState([]);
    const [recordId, setRecrodId] = useState({});

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
                    alert('API did not return an array', data)
                }
            })
            .catch((error) => alert('Error when fetching from backend', error))

    }, [])

    function handleViewAll(e) {

        setLoading(true);
        setError('');
        setRecord([]);

        if(record.length === 0 && !loading && selectOption) {
            alert('No records found.');
            return;
        }

        createAPIEndpoint('records')
            .getAllRecords()
            .then((response) => {
                setRecord(response.data);
            })
            .catch((error) => {
                setError('Records cannot be found.');
                alert("Records not found: ", error);
            })
            .finally(() => setLoading(false));
    }

    function handleCategory(e) {

        const type = e.target.value;
        setSelectedOption(type);

        if(record.length === 0 && !loading && selectOption) {
            alert('No records found.');
            window.location.reload();
            return;
        }

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

    function handleDelete(id) {
        createAPIEndpoint('delete/')
            .delete(id)
            .then(() => {
                alert('record deleted successfully.')
                window.location.reload();
            })
            .catch((error) => {
                console.error('There was an issue when deleting this record.', error);
                setError('There was an issue when deleting this record.', error)
            })
    }


    function handleEdit(id) {
        const edit = record.find((record) => record.id === id);

        if (edit) {
            setEdit(edit);
        }
        setRecrodId(id);
    }

    function handleUpdate() {

        if (!edit) {
            alert('No record selected for update');
            return;
        }

        createAPIEndpoint('update/')
            .update(edit.id, edit)
            .then(() => {
                const updatedRecord = record.map((item) =>
                    item.id === edit.id ? edit : item
                );
                console('Record update: ', updatedRecord)
                setRecord(updatedRecord);
                setEdit(null);
                alert('Record updated successfully.');
                window.location.reload();
            }).catch((error) => {
                console.error('Error updating record: ', error);
                window.location.reload();
            })
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
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {record.map((record) => (
                                <tr key={record.id}>
                                    {columnKeys.map((key) => (
                                        <td key={`${record.id}-${key}`}>{record[key]}</td>
                                    ))}
                                    <td>
                                        <button
                                            className='btn btn-warning btn-sm me-2'
                                            onClick={() => handleEdit(record.id)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className='btn btn-danger btn-sm'
                                            onClick={() => handleDelete(record.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                {record.length === 0 && !loading && selectOption && (
                    <p>No records found for the selcted type</p>
                )}

                {edit && (
                    <div className='update-form'>
                        <h3>Update Record</h3>
                        <form>
                            {Object.keys(edit).map((key) => (
                                <div className='mb-3' key={key}>
                                    <label htmlFor={key} className='form-label'>
                                        {key}
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id={key}
                                        name={key}
                                        value={edit[key]}
                                        onChange={(e) =>
                                            setEdit((prevEdit) => ({
                                                ...prevEdit,
                                                [key]: e.target.value,
                                            }))
                                        }
                                    />
                                </div>
                            ))}
                            <button type='button' className='btn btn-primary' onClick={handleUpdate}>
                                Save Changes
                            </button>
                            <button
                                type='button'
                                className='btn btn-secondary'
                                onClick={() => setEdit(null)}
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                )}

            </div>
        </div>
    )
}

