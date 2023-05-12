import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ fakeData }) {
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Submitting login form');
        console.log('Username: ' + username);

        // Check if user with entered username exists
        const userExists = fakeData.users.some((user) => user.username === username);

        if (userExists) {
            console.log('User exists. Redirecting to /');
            localStorage.setItem('loggedInUser', username); // Set username in localStorage
            navigate('/');
            window.location.reload(); // Reload page to update navbar
        } else {
            // Clear username
            setUsername('');
            setErrorMessage('Invalid username. Please try again.');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ padding: '1rem', border: '1px solid black', borderRadius: '8px', width: '300px' }}>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                        <label htmlFor="username" style={{ marginRight: '0.5rem' }}>
                            Username:
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
