import axios from 'axios';

/** 
 * API middleware, implementing REST endpoints
 * to enable communication between the frontend and backend
 **/

const API_BASE_URL = 'http://localhost:8080';

export const createAPIEndpoint = (endpoint) => {
    let url = `${API_BASE_URL}/api/recycling/${endpoint}`;

    return {
        getAllRecords: () => axios.get(`${url}`),
        getByType:(type) => axios.get(`${url}${type}`),
        fetchById: (id) => axios.get(`${url}${id}`),
        post: (newRecord) => axios.post(url, newRecord),
        update: (id, updateRecord) => axios.put(`${url}${id}`, updateRecord),
        delete: (id) => axios.delete(`${url}${id}`),
        getTips: () => axios.get(`${API_BASE_URL}/api/tips`),
        getTipsByType: (type) => axios.get(`${API_BASE_URL}/api/tips/${type}`)
    }
}