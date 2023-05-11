import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ fakeData }) {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitting login form');
        console.log('Username: ' + username);

        // Check if user with entered username exists
        const userExists = fakeData.users.find((user) => user.username === username);

        if (userExists) {
            console.log('User exists. Redirecting to /');
            navigate('/');
            window.location.reload();
            localStorage.setItem('loggedInUser', username); // Set username in localStorage

        } else {
            // Clear username
            setUsername('');
            console.log('User does not exist.');
            // Handle invalid username case (display error message, etc.)
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
