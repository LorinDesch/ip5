import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import Cookies from 'js-cookie';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate ();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/account/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });


            if (response.ok) {
                // redirect to dashboard
                navigate('/dashboard');
            } else {
                console.log(response);
                throw new Error('Invalid credentials');
            }

            const data = await response.json();
            console.log(data);

            // Set the cookie
            Cookies.set('token', data.token);

            const groupsResponse = await fetch('http://localhost:3000/groups/', {
                headers: { Authorization: `Token ${data.token}` },
            });

            if (!groupsResponse.ok) {
                console.log(groupsResponse);
                throw new Error('Failed to fetch groups');
            }

            const groupsData = await groupsResponse.json();
            console.log(groupsData);
        } catch (error) {
            console.error(error);
            // TODO: show an error message to the user
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
