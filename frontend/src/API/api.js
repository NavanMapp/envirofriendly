import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

export const createAPIEndpoint = (endpoint) => {
    let url = `${API_BASE_URL}/api/recycling/{endpoint}`;

    return {
        fetch: () => axios.get(url),
        fetchById: (id) => axios.get(`${url}${id}`),
        post: (newRecord) => axios.post(url, newRecord),
        update: (id, updateRecord) => axios.put(`${url}${id}`, updateRecord),
        delete: (id) => axios.delete(`${url}${id}`)
    }
}