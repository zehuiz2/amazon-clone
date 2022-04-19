import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://us-central1-clone-c443b.cloudfunctions.net/api'
    // 'http://localhost:5001/clone-c443b/us-central1/api' //The API (cloud function) URL local host for debug
});

export default instance;