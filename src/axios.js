import axios from "axios";

// Creating an instance
const instance = axios.create({
    baseURL: 'https://tinder-backend-abhirup.herokuapp.com'
});

export default instance;