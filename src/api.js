import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5044/api', // URL base da sua API
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export const login = async (email, senha) => {
    if (!email || !senha) {
        throw new Error('Email and password must be provided');
    }

    try {
        const response = await api.post('/Usuario', { Email: email, Senha: senha });
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('Login error:', error.response.data);
            console.error('Validation errors:', error.response.data.errors);
        } else {
            console.error('Login error:', error.message);
        }
        throw error;
    }
};