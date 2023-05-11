import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ fakeData }) {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            navigate('/');
        }
    }, [navigate]);

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
        } else {
            //clear username
            setUsername('');
            console.log('User does not exist.');
            // Handle invalid username case (display error message, etc.)
        }
    };

    return (
        <div style={{ padding: '1rem' }}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div style={{ marginTop: '1rem' }}>
                    <button type="submit" style={{ marginRight: '0.5rem' }}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
