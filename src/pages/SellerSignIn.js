import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "./styles.css"

const SellerSignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/sellersignin', { email, password });
            const { token } = response.data;

            localStorage.setItem('token', token); // Store token in local storage

            setSuccess('Sign in successful!');
            setEmail('');
            setPassword('');

            navigate('/');

        } catch (err) {
            setError('Error signing in. Please try again.');
        }
    };

    return (
        <div>
            <Navbar />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <div className='flex row justify-between items-center px-5'>
                <p className='max-w-xs text-center'>You don't have an account?<br /><Link to="/sellersignup" className='text-blue-500 hover:text-blue-700'>Click here</Link> to sign up!</p>
                <form onSubmit={handleSubmit} className='w-6/12'>
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
                <p className='max-w-xs text-center'>Are you not a seller?<br /><Link to="/sellersignin" className='text-blue-500 hover:text-blue-700'>Click here</Link> to sign in as a user!</p>
            </div>
        </div>
    );
};

export default SellerSignIn;
