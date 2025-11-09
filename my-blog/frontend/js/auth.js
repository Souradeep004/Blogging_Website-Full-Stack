// Authentication Helper Functions

// Check if user is authenticated
function isAuthenticated() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return !!(token && user);
}

// Get token
function getToken() {
    return localStorage.getItem('token');
}

// Get user
function getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

// Set authentication
function setAuth(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
}

// Logout
function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = 'login.html';
}

// Update navigation based on auth status
function updateNavigation() {
    const loginLink = document.getElementById('loginLink');
    const logoutLink = document.getElementById('logoutLink');
    const createLink = document.getElementById('createLink');
    const profileLink = document.getElementById('profileLink');

    if (isAuthenticated()) {
        if (loginLink) loginLink.style.display = 'none';
        if (logoutLink) logoutLink.style.display = 'block';
        if (createLink) {
            createLink.style.display = 'block';
            createLink.href = 'create.html';
        }
        if (profileLink) profileLink.style.display = 'block';

        // Add logout event listener
        if (logoutLink) {
            logoutLink.addEventListener('click', (e) => {
                e.preventDefault();
                logout();
            });
        }
    } else {
        if (loginLink) loginLink.style.display = 'block';
        if (logoutLink) logoutLink.style.display = 'none';
        if (createLink) createLink.style.display = 'none';
        if (profileLink) profileLink.style.display = 'none';
    }
}

// Initialize navigation on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateNavigation);
} else {
    updateNavigation();
}