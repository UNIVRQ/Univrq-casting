// script.js

// Functionality for UNIVRQ CAST platform

// Login Functionality
function login(username, password) {
    // Validate input
    if (!username || !password) {
        showToast('Please enter both username and password.');
        return;
    }
    // Simulate authentication (In a real scenario, you would make an API call)
    console.log('Logging in:', username);
    showToast('Login successful!');
    // Redirect to dashboard or load user data here
}

// Registration Functionality
function register(username, password, email) {
    // Validate input
    if (!username || !password || !email) {
        showToast('Please fill all fields.');
        return;
    }
    // Simulate registration (In a real scenario, you would make an API call)
    console.log('Registering user:', username);
    showToast('Registration successful!');
}

// Authentication Check
function checkAuthentication() {
    // Simulate a check (In a real scenario, you would verify token or session)
    console.log('Checking authentication...');
    return true; // or false based on actual auth state
}

// Form Handling
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submit
    const { username, password, email } = event.target.elements;
    register(username.value, password.value, email.value);
}

// Modal Management
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Toast Notifications
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        document.body.removeChild(toast);
    }, 3000);
}

// Dashboard Features
function loadDashboard() {
    console.log('Loading dashboard...');
    // Load user-specific data here
}

// Example usages (these would typically be triggered by UI actions)
// login('testUser', 'testPass');
// register('newUser', 'newPass', 'user@example.com');
// loadDashboard();