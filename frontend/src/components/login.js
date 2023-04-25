import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            // Call the login API
            const response = await fetch('http://localhost:3000/account/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Invalid credentials');
            }

            const responseData = await response.json();

            // Call the groups API with the token
            const groupsResponse = await fetch('http://localhost:3000/groups/', {
                headers: { Authorization: `Token ${responseData.token}` },
            });

            if (!groupsResponse.ok) {
                throw new Error('Failed to fetch groups');
            }

            const groupsData = await groupsResponse.json();

            // Build the data object with the API response data
            const newData = {
                username: responseData.username,
                groups: groupsData.map((group) => ({
                    groupId: group.id,
                    groupName: group.group_name,
                })),
            };

            return newData;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const newData = await handleLogin();
            console.log(newData);

            // Redirect to dashboard
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Login</h1>
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
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;
