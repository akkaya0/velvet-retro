import React, { useState } from 'react';
import axios from 'axios';

const SellerSignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/sellersignin', { email, password });
            const { token } = response.data;

            localStorage.setItem('token', token); // Store token in local storage

            setSuccess('Sign in successful!');
            setEmail('');
            setPassword('');

        } catch (err) {
            setError('Error signing in. Please try again.');
        }
    };

    return (
        <div>
            <h2>Seller Sign In</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SellerSignIn;
