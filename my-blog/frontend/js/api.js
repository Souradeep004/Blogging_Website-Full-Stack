// API Configuration
const API_URL = 'http://localhost:5000/api';

// API Helper Functions
const api = {
    // Get all posts
    async getPosts(category = 'all') {
        const url = category === 'all' 
            ? `${API_URL}/posts` 
            : `${API_URL}/posts?category=${category}`;
        
        const response = await fetch(url);
        return response.json();
    },

    // Get single post
    async getPost(id) {
        const response = await fetch(`${API_URL}/posts/${id}`);
        return response.json();
    },

    // Create post
    async createPost(postData, token) {
        const response = await fetch(`${API_URL}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(postData)
        });
        return response.json();
    },

    // Update post
    async updatePost(id, postData, token) {
        const response = await fetch(`${API_URL}/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(postData)
        });
        return response.json();
    },

    // Delete post
    async deletePost(id, token) {
        const response = await fetch(`${API_URL}/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.json();
    },

    // Search posts
    async searchPosts(query) {
        const response = await fetch(`${API_URL}/posts/search?q=${encodeURIComponent(query)}`);
        return response.json();
    },

    // User login
    async login(email, password) {
        const response = await fetch(`${API_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        return response.json();
    },

    // User register
    async register(name, email, password) {
        const response = await fetch(`${API_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        return response.json();
    },

    // Get user profile
    async getProfile(token) {
        const response = await fetch(`${API_URL}/users/profile`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.json();
    }
};