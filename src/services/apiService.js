import axios from 'axios';

import {baseURL} from "../configs";

const apiService = axios.create({baseURL});

const apiToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmY5NDA4YzJhNjk0OGJhMGVkYmU0YmEyNzc2NWFiNyIsInN1YiI6IjYzNGRiOTY2YWY1OGNiMDA3YTNkOTgxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KqcMJ7Dc0vcGgvs84FJavvi1hebLPjtFcad4r7yDnCA';

apiService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${apiToken}`;
    return config;
})

export {
    apiService
}